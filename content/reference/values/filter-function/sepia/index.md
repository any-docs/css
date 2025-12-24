---
title: sepia()
slug: Web/CSS/Reference/Values/filter-function/sepia
page-type: css-function
browser-compat: css.types.filter-function.sepia
sidebar: cssref
---

The **`sepia()`** [CSS](/en-US/docs/Web/CSS) [function](/reference/values/Functions) converts the input image to sepia, giving it a warmer, more yellow/brown appearance. Its result is a `filter-function`.

{{InteractiveExample("CSS Demo: sepia()")}}

```css interactive-example-choice
filter: sepia(0);
```

```css interactive-example-choice
filter: sepia(0.2);
```

```css interactive-example-choice
filter: sepia(60%);
```

```css interactive-example-choice
filter: sepia(1);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## Syntax

```css
sepia(amount)
```

### Parameters

- `amount` <Badge type="info" text="Optional" />
  - The amount of the conversion, specified as a `&lt;number&gt;` or a `&lt;percentage&gt;`. A value of `100%` is completely sepia, while a value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. The initial value for {{Glossary("interpolation")}} is `0`. The default value is `1`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Examples of correct values for sepia()

```css
sepia(0)     /* No effect */
sepia(.65)   /* 65% sepia */

sepia()      /* Completely sepia */
sepia(100%)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The other `filter-function` functions available to be used in values of the `filter` and `backdrop-filter` properties include:

- `blur()`
- `brightness()`
- `contrast()`
- `drop-shadow()`
- `grayscale()`
- `hue-rotate()`
- `invert()`
- `opacity()`
- `saturate()`
