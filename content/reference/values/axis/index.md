---
title: <axis>
slug: Web/CSS/Reference/Values/axis
page-type: css-type
browser-compat: css.types.axis
spec-urls: https://drafts.csswg.org/scroll-animations/#typedef-axis
sidebar: cssref
---

The **`<axis>`** {{glossary("enumerated")}} data type specifies the scrolling direction of the {{glossary("scroll container")}} controlling a [scroll timeline](/guides/Scroll-driven_animations/Timelines).

The `<axis>` keyword values are used in the following [CSS functions](/reference/values/Functions) and properties:

- `scroll-timeline-axis`
- `scroll-timeline` shorthand
- `scroll()`
- `view-timeline-axis`
- `view-timeline` shorthand
- `view()`

## Syntax

Valid `<axis>` values:

- `block`
  - The block axis of the scroller element, which is the axis in the direction perpendicular to the flow of text within a line. For horizontal writing modes, such as standard English, this is the same as `y`, while for vertical writing modes, it is the same as `x`.
- `inline`
  - The inline axis of the scroller element, which is the axis in the direction parallel to the flow of text in a line. For horizontal writing modes, this is the same as `x`, while for vertical writing modes, this is the same as `y`.
- `x`
  - The horizontal axis of the scroller element.
- `y`
  - The vertical axis of the scroller element.

## Formal syntax


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `animation-timeline`
- [Scroll-driven animation timelines](/guides/Scroll-driven_animations/Timelines) guide
- [CSS scroll-driven animations](/guides/Scroll-driven_animations) module
