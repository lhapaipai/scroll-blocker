import { disableScroll, enableScroll } from "./index";

export const scrollLockDirective = {
  mounted: (el, binding) => {
    if (!binding.arg) return;

    if (binding.arg === "enabled") {
      disableScroll(
        binding.value ? document.querySelector(binding.value) : undefined
      );
    }
    if (binding.arg === "disabled") {
      enableScroll(
        binding.value ? document.querySelector(binding.value) : undefined
      );
    }
  },
  unmounted: (el, binding) => {
    enableScroll();
  },
};
