import {
  loading,
  clearLoading,
  updateMessage,
  test_pass,
  test_fail,
} from "./mod.ts";

let loadingId = loading("loading...");

await new Promise<void>((res, _rej) => {
  setTimeout(() => res(), 1000);
});

let k = updateMessage(loadingId, "loading... 3sec");

await new Promise<void>((res, _rej) => {
  setTimeout(() => res(), 1000);
});

clearLoading(k, "finish!!!");


// The test zone
loadingId = loading("test1...");
await new Promise<void>((res, _rej) => {
  setTimeout(() => res(), 1000);
});
test_pass(loadingId);

loadingId = loading("test 2...");
await new Promise<void>((res, _rej) => {
  setTimeout(() => res(), 1000);
});
test_fail(loadingId);