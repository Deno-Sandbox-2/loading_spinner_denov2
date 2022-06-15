# loading_spinner
CLI loading animation using Deno

# sample
![Videotogif](https://user-images.githubusercontent.com/42061897/173711329-a8f7371d-1f5b-4118-8e0b-7951cdf580ac.gif)

# usage
```ts
import {
  loading,
  clearLoading,
} from "https://deno.land/x/loading_spinner@v1.0.1/mod.ts";

const loadingId = loading("loading...");

await new Promise<void>((res, _rej) => {
  setTimeout(() => res(), 3000);
});

clearLoading(loadingId, "finish!!!");
```
