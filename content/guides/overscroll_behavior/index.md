---
title: CSS overscroll behavior
short-title: Overscroll behavior
slug: Web/CSS/Guides/Overscroll_behavior
page-type: css-module
spec-urls: https://drafts.csswg.org/css-overscroll/
sidebar: cssref
---

The **CSS overscroll behavior** module provides properties to control the behavior of a {{Glossary("Scroll_container", "scroll container")}} when its scroll position reaches the {{Glossary("Scroll_boundary", "scroll boundary")}}. Controlling this aspect is particularly useful in scenarios where embedded scrollable areas should not trigger scrolling of the parent container.

When commenting on a blog, you might notice that if your comment exceeds the length of the provided {{htmlelement("textarea")}}, scrolling beyond the end of the text area causes the entire blog to scroll. This is because reaching the end of a scrollable area, known as the {{Glossary("Scroll_boundary", "scroll boundary")}}, can lead to scrolling other content or the entire page. This continuous scrolling experience is called {{Glossary("Scroll_chaining", "scroll chaining")}}.

In situations where the contents of an element are larger than its container and `overflow` allows or defaults to scrolling (like in `<textarea>`), continued scrolling past the element's scrollable area will initiate scrolling in the parent element or the underlying page.

Conversely, scrolling through a website's terms and conditions and reaching the end of the content to enable a checkbox, may not force the page to scroll or bounce (as on a phone). This example shows that you can control overscroll behavior and prevent scroll chaining.

This module defines the overscroll behavior, enabling you to specify the actions when a user scrolls beyond the boundaries of a scrollable element.

## Reference

### CSS properties

- `overscroll-behavior` shorthand
- `overscroll-behavior-block`
- `overscroll-behavior-inline`
- `overscroll-behavior-x`
- `overscroll-behavior-y`

### Glossary terms

- {{Glossary("Scroll_boundary", "Scroll boundary")}}
- {{Glossary("Scroll_chaining", "Scroll chaining")}}

## Guides

- [Learn: Overflowing content](/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - Learn what overflow is and how to manage it.

## Related concepts

- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA role
- [Containing block](/guides/Display/Containing_block) concept
- [CSS overflow](/guides/Overflow) module:
  - `overflow` shorthand property
    - `overflow-x`
    - `overflow-y`
    - `overflow-block`
    - `overflow-inline`
  - `overflow-clip-margin` property
  - `scroll-behavior` property
  - `text-overflow` property
- {{Glossary("Scroll_container", "Scroll container")}} and [scrollport](/en-US/docs/Glossary/Scroll_container#scrollport) glossary terms

- [CSS scroll snap](/guides/Scroll_snap) module:
  - `scroll-padding` shorthand property
  - `scroll-snap-type` property
  - `scroll-margin` shorthand property
  - `scroll-snap-stop` property
  - `scroll-snap-align` property

- [CSSOM view](/guides/CSSOM_view) module:
  - `Element.getBoundingClientRect()` method
  - `Element.scroll()` method
  - `Element.scrollBy()` method
  - `Element.scrollIntoView()` method
  - `Element.scrollTo()` method
  - `scroll` Document event

## Specifications

{{Specifications}}

## See also

- [CSS scroll anchoring](/guides/Scroll_anchoring) module
- [CSS scroll snap](/guides/Scroll_snap) module
- [CSS box model](/guides/Box_model) module
- [CSS logical properties and values](/guides/Logical_properties_and_values) module
