import SchaleApi from "./schale-api";
import Server from "./domains/server";
import { DataOptions } from "./schale-api";
import Language from "./domains/language";
import Student from "./domains/student";
import Item from "./domains/item";

export default SchaleApi;
export type { Student, Item, DataOptions };
export { Server, Language };
