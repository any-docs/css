---
title: CSS scroll-driven animations
short-title: Scroll-driven animations
slug: Web/CSS/Guides/Scroll-driven_animations
page-type: css-module
spec-urls: https://drafts.csswg.org/scroll-animations-1/
sidebar: cssref
---

The **CSS scroll-driven animations** module provides functionality that builds on the [CSS animations module](/guides/Animations) and [Web Animations API](/en-US/docs/Web/API/Web_Animations_API). It allows you to animate property values along a scroll-based timeline rather than the default time-based document timeline. This means that you can animate an element by scrolling the element, its scroll container, or its root element, rather than just by the passing of time.

## Scroll-driven animations in action

You can define the scroller that controls the animation either by naming the animation or with the `scroll` function.

```html hidden live-sample___scroll_animation
<main>
  <div></div>
</main>
```

```css live-sample___scroll_animation
main {
  scroll-timeline: --main-timeline;
}

div {
  animation: background-animation linear;
  animation-timeline: scroll(nearest inline);
}

div::after {
  animation: shape-animation linear;
  animation-timeline: --main-timeline;
}
```

```css hidden live-sample___scroll_animation
@layer animations {
  @keyframes background-animation {
    0% {
      background-color: palegoldenrod;
    }
    100% {
      background-color: magenta;
    }
  }
  @keyframes shape-animation {
    0% {
      left: 0;
      top: 0;
      background-color: black;
    }
    50% {
      top: calc(100% - var(--elSize));
      left: calc(50% - var(--elSize));
      background-color: red;
    }
    100% {
      left: calc(100vw - var(--elSize));
      top: 0;
      rotate: 1800deg;
      background-color: white;
    }
  }
}

@layer page-setup {
  :root {
    --elSize: 50px;
  }
  main {
    height: 90vh;
    overflow: scroll;
    border: 1px solid;
    margin: 5vh auto;
  }
  div {
    height: 400vh;
    width: 400vw;
  }
  div::after {
    content: "";
    border: 1px solid red;
    height: var(--elSize);
    width: var(--elSize);
    position: absolute;
    border-radius: 20px;
    corner-shape: superellipse(-4);
  }
}

@layer no-support {
  @supports not (scroll-timeline: --main-timeline) {
    body::before {
      content: "Your browser doesn't support scroll-driven animations.";
      background-color: wheat;
      display: block;
      text-align: center;
    }
  }
}
```

{{EmbedLiveSample("scroll_animation", "", "400px")}}

Scroll the element in the inline direction to see its background color change. Scroll it vertically to see the generated content move, spin, and change colors.

## Reference

### Properties

- `animation-range` shorthand
  - `animation-range-end`
  - `animation-range-start`
- `scroll-timeline` shorthand
  - `scroll-timeline-axis`
  - `scroll-timeline-name`
- `timeline-scope`
- `view-timeline` shorthand
  - `view-timeline-axis`
  - `view-timeline-inset`
  - `view-timeline-name`

### Data types and values

- `axis`
- `timeline-range-name`

### Functions

- `scroll()`
- `view()`

### Interfaces

- `ScrollTimeline`
- `ViewTimeline`

## Guides

- [Scroll-driven animation timelines](/guides/Scroll-driven_animations/Timelines)
  - Scroll-driven animation timelines and creating scroll-driven animations.

## Related concepts

- [CSS animations](/guides/Animations) module
  - `animation-timeline`
  - `@keyframes`
- [CSS overflow](/guides/Overflow) module
  - {{glossary("Scroll container")}}
  - [Scrollport](/en-US/docs/Glossary/Scroll_container#scrollport)
- [Web Animations](/en-US/docs/Web/API/Web_Animations_API) API
  - `Element.animate()`
  - `Animation`
  - `AnimationTimeline`
  - `DocumentTimeline`
  - `KeyframeEffect`

## Specifications

{{Specifications}}

## See also

- [Animate elements on scroll with scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) via developer.chrome.com (2023)
