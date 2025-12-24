---
title: opacity()
slug: Web/CSS/Reference/Values/filter-function/opacity
page-type: css-function
browser-compat: css.types.filter-function.opacity
sidebar: cssref
---

The **`opacity()`** [CSS](/en-US/docs/Web/CSS) [function](/reference/values/Functions) applies transparency to the samples in the input image. Its result is a `filter-function`.

{{InteractiveExample("CSS Demo: opacity()")}}

```css interactive-example-choice
filter: opacity(1);
```

```css interactive-example-choice
filter: opacity(80%);
```

```css interactive-example-choice
filter: opacity(50%);
```

```css interactive-example-choice
filter: opacity(0.2);
```

```css interactive-example-choice
filter: opacity(0);
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

> [!NOTE]
> This function is similar to the more established `opacity` property. The difference is that with filters, some browsers provide hardware acceleration for better performance.

## Syntax

```css
opacity(amount)
```

### Parameters

- `amount` <Badge type="info" text="Optional" />
  - The amount of the conversion, specified as a `&lt;number&gt;` or a `&lt;percentage&gt;`. A value of `0%` is completely transparent, while a value of `100%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. The initial value for {{Glossary("interpolation")}} is `1`. The default value is `1`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Examples of correct values for opacity()

```css
opacity(0%)   /* Completely transparent */
opacity(50%)  /* 50% transparent */

opacity()     /* No effect */
opacity(1)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other `filter-function` functions available to be used in values of the `filter` and `backdrop-filter` properties include:
  - `blur()`
  - `brightness()`
  - `contrast()`
  - `drop-shadow()`
  - `grayscale()`
  - `hue-rotate()`
  - `invert()`
  - `saturate()`
  - `sepia()`
- The CSS `opacity` property
