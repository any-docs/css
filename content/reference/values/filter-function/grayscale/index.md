---
title: grayscale()
slug: Web/CSS/Reference/Values/filter-function/grayscale
page-type: css-function
browser-compat: css.types.filter-function.grayscale
sidebar: cssref
---

The **`grayscale()`** [CSS](/en-US/docs/Web/CSS) [function](/reference/values/Functions) converts the input image to grayscale. Its result is a `filter-function`.

{{InteractiveExample("CSS Demo: grayscale()")}}

```css interactive-example-choice
filter: grayscale(0);
```

```css interactive-example-choice
filter: grayscale(0.2);
```

```css interactive-example-choice
filter: grayscale(60%);
```

```css interactive-example-choice
filter: grayscale(1);
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
grayscale(amount)
```

### Parameters

- `amount` <Badge type="info" text="Optional" />
  - Amount of the input image that is converted to grayscale. It is specified as a `&lt;number&gt;` or a `&lt;percentage&gt;`. A value of `100%` changes the input completely to grayscale, while a value of `0%` leaves the input unchanged. Values between `0%` and `100%` have linear multipliers on the effect. The initial value used for {{Glossary("interpolation")}} is `0`. The default value is `1`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Examples of correct values for grayscale()

```css
grayscale(0)     /* No effect */
grayscale(.7)    /* 70% grayscale */

grayscale()      /* Completely grayscale */
grayscale(1)
grayscale(100%)
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
- `hue-rotate()`
- `invert()`
- `opacity()`
- `saturate()`
- `sepia()`
