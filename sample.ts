import {
  loading,
  clearLoading,
} from "https://deno.land/x/loading_spinner@v1.0.0/mod.ts";

const loadingId = loading("loading...");
await new Promise<void>((res, _rej) => {
  setTimeout(() => res(), 3000);
});
clearLoading(loadingId, "finish!!!");
