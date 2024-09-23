import Student from "./domains/student";
import Item from "./domains/item";
import Language from "./domains/language";
import Server, { ServerIndex, ServerIndexes } from "./domains/server";

export interface SchaleApiOptions {
  baseURL?: string;
  proxyPrefix?: string;
  server?: Server;
  language?: Language;
  useMin?: boolean;
  useProxy?: boolean;
}

export interface DataOptions {
  server?: Server;
  language?: Language;
}

const BASE_URL = "https://raw.githubusercontent.com/SchaleDB/SchaleDB/main";
const PROXY_PREFIX = "https://ghp.ci/";

export default class SchaleApi {
  baseURL: string;
  proxyPrefix: string;
  server: Server;
  language: Language;
  useMin: boolean;

  constructor({
    baseURL = BASE_URL,
    proxyPrefix = PROXY_PREFIX,
    server = Server.Japan,
    language = Language.SimplifiedChinese,
    useMin = true,
  }: SchaleApiOptions = {}) {
    this.baseURL = baseURL;
    (this.proxyPrefix = proxyPrefix), (this.server = server);
    this.language = language;
    this.useMin = useMin;
  }

  get serverIndex(): ServerIndex {
    return ServerIndexes[this.server];
  }

  get serverName(): string {
    switch (this.server) {
      case Server.Japan:
        return "日服";
      case Server.Global:
        return "国际服";
      case Server.Chinese:
        return "国服";
    }
  }

  get languageName(): string {
    switch (this.language) {
      case Language.Japanese:
        return "日本語";
      case Language.English:
        return "English";
      case Language.TraditionalChinese:
        return "正體中文";
      case Language.SimplifiedChineseUnofficial:
        return "简体中文（非官方）";
      case Language.SimplifiedChinese:
        return "简体中文";
    }
  }

  async getStudents({
    server = this.server,
    language = this.language,
  }: DataOptions = {}): Promise<Student[]> {
    const students = await this.getData<Student[]>("students", {
      language,
      server: undefined,
    });
    const serverIndex = ServerIndexes[server];
    return students.filter((student) => student.IsReleased[serverIndex]);
  }

  async getItems({
    server = this.server,
    language = this.language,
  }: DataOptions = {}): Promise<Item[]> {
    const items = await this.getData<Item[]>("items", {
      language,
      server: undefined,
    });
    const serverIndex = ServerIndexes[server];
    return items.filter((item) => item.IsReleased[serverIndex]);
  }

  async getData<D>(
    fileName: string,
    { server, language }: DataOptions
  ): Promise<D> {
    const dotMin = this.useMin ? ".min" : "";
    const languageDir = language !== undefined ? `${language}/` : "";
    const dashServer = server !== undefined ? `_${server}` : "";
    const uri = `/data/${languageDir}${fileName}${dashServer}${dotMin}.json`;
    return this.get<D>(uri, {});
  }

  protected async get<D>(
    uri: string,
    params: Record<string, any> = {}
  ): Promise<D> {
    const url = new URL(`${this.proxyPrefix}${this.baseURL}/${uri}`);
    for (const name in params) {
      const value = params[name];
      if (value !== undefined) {
        url.searchParams.set(name, `${value}`);
      }
    }
    const resp = await fetch(url, {
      method: "GET",
    });
    if (resp.status !== 200) {
      throw new Error();
    }
    const json = await resp.json();
    return json as D;
  }
}
