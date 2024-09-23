enum Server {
  Japan = "jp",
  Global = "global",
  Chinese = "cn",
}

export type ServerIndex = 0 | 1 | 2;
export const ServerIndexes: Record<Server, ServerIndex> = {
  [Server.Japan]: 0,
  [Server.Global]: 1,
  [Server.Chinese]: 2,
};

export default Server;
