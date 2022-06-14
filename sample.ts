import { loading, clearLoading } from "./main.ts";

const iId = loading("loading...");
await new Promise<void>((res, _rej) => {
  setTimeout(() => res(), 2000);
});
clearLoading(iId, "finish");
