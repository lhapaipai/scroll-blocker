# ScrollBlocker : disable the scrollbar

use case :

- for a Modal Box

## Configuration

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

```html
<!-- note that the target element is not the FileManager but
the #el-to-lock or document.body if no value -->
<file-manager v-scroll-lock:active />
<file-manager v-scroll-lock:active="'#el-to-lock'" />
```

TODO:
for the moment does not manage the change of state.

```html
<file-manager v-scroll-lock:[isActive] />
<file-manager v-scroll-lock:[isActive]="'#el-to-lock'" />
```
