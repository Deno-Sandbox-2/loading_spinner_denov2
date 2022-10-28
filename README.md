# loading_spinner
CLI loading animation using Deno

> Based on https://github.com/takaodaze/loading_spinner_deno

# Sample
![Videotogif](https://user-images.githubusercontent.com/42061897/173711329-a8f7371d-1f5b-4118-8e0b-7951cdf580ac.gif)

# usage
```ts
import {
  loading,
  clearLoading,
} from "https://deno.land/x/loading_spinnerv2/mod.ts";

const loadingId = loading("loading...");

await new Promise<void>((res, _rej) => {
  setTimeout(() => res(), 3000);
});

clearLoading(loadingId, "finish!!!");
```

# Update the message
```ts
import {
  loading,
  clearLoading,
  updateMessage
} from "https://deno.land/x/loading_spinnerv2/mod.ts";

const loadingId = loading("loading...");

await new Promise<void>((res, _rej) => {
  setTimeout(() => res(), 3000);
});

let newloadingId  = updateMessage(loadingId, "loading... 3sec");

clearLoading(newloadingId, "finish!!!");
```

# Do tests

```ts
import {
  loading,
  test_pass,
  test_fail,
} from "./mod.ts";

let loadingId = loading("test 1...");
await new Promise<void>((res, _rej) => {
  setTimeout(() => res(), 1000);
});

// The spinner result is VALID test
test_pass(loadingId);


loadingId = loading("test 2...");
await new Promise<void>((res, _rej) => {
  setTimeout(() => res(), 1000);
});

// The spinner result is FALED test
test_fail(loadingId);
```

