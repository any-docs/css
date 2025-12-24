---
title: CSS counter styles
short-title: Counter styles
slug: Web/CSS/Guides/Counter_styles
page-type: css-module
spec-urls: https://drafts.csswg.org/css-counter-styles/
sidebar: cssref
---

The **CSS counter styles** module lets you define your own counter styles to manage the appearance of [markers](/en-US/docs/Web/CSS/Reference/Selectors/::marker) in lists and counters in [generated content](/guides/Generated_content). It also enables you to extend native browser list styles with your own customizations.

While we think of counters as numbers, they are actually strings with components that can be incremented. The counter styles module defines the `@counter-style` rule with ten descriptors, which enable developers to precisely define how counters are converted into strings. This module enables defining which characters to use for the counter bullets, the prefix to put before the counter and postfix that comes after, along with how to handle negative values. The descriptors can also set a range to limit the values a counter style can handle, while also providing fallback styles for when the counter value falls outside the defined range or otherwise can't render the counter value. The module also enables defining how the counter is read out loud by speech synthesizers.

## Reference

### Properties

No properties are defined in this module

### Functions

- `symbols()`

### Data types

- [`<counter-style-name>`](/en-US/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name)
- [`<symbol>`](/en-US/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#values)
- [`<symbols-type>`](/reference/values/symbols#syntax)

### At-rules and descriptors

- `@counter-style`
  - `system`
  - `symbols`
  - `additive-symbols`
  - `negative`
  - `prefix`
  - `suffix`
  - `range`
  - `pad`
  - `speak-as`
  - `fallback`

### Interfaces

- `CSSCounterStyleRule` interface

## Guides

- [Using CSS counters](/guides/Counter_styles/Using_counters)
  - Describes how to use counters to number any HTML element or to perform complex counting.

## Related concepts

[CSS lists and counters](/guides/Lists) module:

- `counter-increment` property
- `counter-reset` property
- `counter-set` property
- `list-style-type` property
- `list-style` shorthand property
- `counter()` function
- `counters()` function

[CSS pseudo-elements](/guides/Pseudo-elements) module:

- `::after` pseudo-element
- `::before` pseudo-element
- `::marker` pseudo-element

[CSS generated content](/guides/Generated_content) module:

- `content` property

## Specifications

{{Specifications}}

## See also

- [CSS lists and counters](/guides/Lists) module
- [CSS pseudo-elements](/guides/Pseudo-elements) module
- [CSS generated content](/guides/Generated_content) module
- [Ready-made counter styles](https://w3c.github.io/predefined-counter-styles/#builtins) via W3C (2023)
