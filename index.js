let items = [];

export const disableScroll = (targetElement = document.body) => {
  if (items.find((l) => l.targetElement === targetElement)) {
    return;
  }

  let scrollBarGap =
    targetElement === document.body
      ? window.innerWidth - document.documentElement.clientWidth
      : targetElement.offsetWidth - targetElement.clientWidth;

  let previousPaddingRight, previousInlinePaddingRight;
  if (scrollBarGap > 0) {
    previousInlinePaddingRight = targetElement.style.paddingRight;
    previousPaddingRight = parseInt(
      getComputedStyle(targetElement)["padding-right"]
    );

    scrollBarGap += previousInlinePaddingRight || previousPaddingRight;
    targetElement.style.paddingRight = `${scrollBarGap}px`;
  }

  let previousOverflowSetting = targetElement.style.overflow;
  targetElement.style.overflow = "hidden";

  items.push({
    targetElement,
    previousInlinePaddingRight,
    previousOverflowSetting,
  });
};

export const enableScroll = (targetElement = document.body) => {
  let item = items.find((l) => l.targetElement === targetElement);
  if (!item) {
    return;
  }

  if (item.previousInlinePaddingRight) {
    targetElement.style.paddingRight = item.previousInlinePaddingRight;
  } else {
    targetElement.style.paddingRight = null;
  }

  if (item.previousOverflowSetting) {
    targetElement.style.overflow = item.previousOverflowSetting;
  } else {
    targetElement.style.overflow = null;
  }

  items = items.filter((i) => i.targetElement !== targetElement);
};
