# ScrollBlocker : disable the scrollbar (for a Modal Box use case)

```js
import { disableScroll, enableScroll } from "scroll-blocker";

// disable scroll for BODY element
disableScroll();
enableScroll();

// disable scroll for #container element
let targetElement = document.querySelector("#container");
disableScroll(targetElement);
enableScroll(targetElement);
```

## with Vue3

```js
import { createApp } from "vue";
import { scrollLockDirective } from "scroll-blocker/scroll-lock-directive";
import App from "./App.vue";

const app = createApp(App);
app.directive("scroll-lock", scrollLockDirective);
app.mount(document.querySelector("#app"));
```

```js
// note that the target element is not the FileManager but
// the #el-to-lock or document.body if no value
<FileManager v-scroll-lock:active />
<FileManager v-scroll-lock:active="'#el-to-lock'">
```

TODO:
for the moment does not manage the change of state.

```js
<FileManager v-scroll-lock:[isActive] />
<FileManager v-scroll-lock:[isActive]="'#el-to-lock'">
```
