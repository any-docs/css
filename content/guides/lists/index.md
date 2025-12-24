---
title: CSS lists and counters
short-title: Lists and counters
slug: Web/CSS/Guides/Lists
page-type: css-module
spec-urls: https://drafts.csswg.org/css-lists/
sidebar: cssref
---

The **CSS lists and counters** module enables styling and positioning of list item bullets and manipulating their values with a combination of strings, counters, and other features.

A list item's marker, whether a bullet symbol or ordinal counter, is its defining feature. List items are not limited to {{HTMLElement("li")}} elements nested within {{HTMLElement("ol")}} or {{HTMLElement("ul")}} elements. Rather, list items are any element with `display: list-item` set.

This module defines CSS features to set and reset a list's counters, set which [counter-styles](/guides/Counter_styles) or symbols to use as its markers, and position those markers. It also provides developers with the ability to create customized markers.

## Reference

### Properties

- `counter-increment`
- `counter-reset`
- `counter-set`
- `list-style-image`
- `list-style-type`
- `list-style-position`
- `list-style` shorthand

There is also a `marker-side` property, which is yet to be fully defined or implemented.

### Pseudo-elements

- `::marker`

### Functions

- `counter`
- `counters`

### Data types

- [`<counter>`](/reference/properties/content#counter)
- [`<counter-name>`](/reference/values/counter#counter-name)
- [`<counter-style>`](/reference/values/counter#counter-style)

## Guides

- [Consistent list indentation](/guides/Lists/Indenting)
  - Explains how to achieve consistent list indentation across different browsers.

- [Using CSS Counters](/guides/Counter_styles/Using_counters)
  - Explains how to use the CSS counter properties to control list counters.

## Related concepts

- [CSS counter styles](/guides/Counter_styles)
  - `@counter-style` at-rule
  - [`<counter-style-name>`](/en-US/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name) data type
  - [`<symbol>`](/en-US/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#values) data type
  - `symbols()` function

- {{HTMLElement("ol")}} `start`, `reversed`, and `type` attributes
- {{HTMLElement("ul")}} `type` attribute
- {{HTMLElement("li")}} `type` and `value` attributes

## Specifications

{{Specifications}}

## See also

- [CSS counter styles](/guides/Counter_styles) module
- [CSS pseudo-elements](/guides/Pseudo-elements) module
- [CSS generated content](/guides/Generated_content) module
