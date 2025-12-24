---
title: blur()
slug: Web/CSS/Reference/Values/filter-function/blur
page-type: css-function
browser-compat: css.types.filter-function.blur
sidebar: cssref
---

The **`blur()`** [CSS](/en-US/docs/Web/CSS) [function](/reference/values/Functions) applies a [Gaussian blur](https://en.wikipedia.org/wiki/Gaussian_blur) to the input image. Its result is a `filter-function`.

{{InteractiveExample("CSS Demo: blur()")}}

```css interactive-example-choice
filter: blur(0);
```

```css interactive-example-choice
filter: blur(4px);
```

```css interactive-example-choice
filter: blur(1.5rem);
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
blur()         /* No effect */
blur(0)        /* No effect */

blur(8px)      /* Blur with 8px radius */
blur(1.17rem)  /* Blur with 1.17rem radius */
```

### Parameters

- `length` <Badge type="info" text="Optional" />
  - Specifies the radius of the blur. It defines the value of the standard deviation to the Gaussian function, that is, how many pixels on the screen blend into each other. Therefore, a larger value will create more blur. A value of `0` leaves the input unchanged. The initial value for {{Glossary("interpolation")}} is `0`. Percentage values are invalid. The default value is `0`.

## SVG filter

The SVG {{SVGElement("feGaussianBlur")}} filter element can also be used to blur content. The filter's {{SVGAttr("stdDeviation")}} attribute accepts up to two values enabling creating more complex blur values. To create an equivalent blur, we include one value for `stdDeviation`. This SVG effect can then be referenced by ID:

```html
<svg role="none">
  <filter id="blur11">
    <feGaussianBlur stdDeviation="1.1" edgeMode="duplicate" />
  </filter>
</svg>
```

The following declarations produce the same effect:

```css
filter: blur(1.1px);
filter: url("#blur11"); /* with embedded SVG */
filter: url("folder/fileName.svg#blur11"); /* external svg filter definition */
```

## Formal syntax

{{CSSSyntax}}

## Examples

This example shows three images: the image with a `blur()` filter function applied, the image with the equivalent SVG blur function applied, and the original images for comparison:

```css
.filter {
  filter: blur(3.5px);
}
```

```html
<svg role="img" aria-label="Flag">
  <filter id="blur">
    <feGaussianBlur stdDeviation="3.5" edgeMode="duplicate" />
  </filter>
  <image
    href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    filter="url('#blur')" />
</svg>
```

```css hidden
svg:not([height]) {
  display: none;
}

th,
td {
  padding: 5px;
}
```

```html hidden
<table>
  <thead>
    <tr>
      <th>Live example</th>
      <th>SVG Equivalent</th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <svg id="svg" height="220" width="220" overflow="visible">
          <filter id="svgBlur">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
          <image
            href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            filter="url('#svgBlur')" />
        </svg>
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('blur','100%','280')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS filter effects](/guides/Filter_effects) module
- The other `filter-function` functions available to be used in values of the `filter` and `backdrop-filter` properties include:
  - `brightness()`
  - `contrast()`
  - `drop-shadow()`
  - `grayscale()`
  - `hue-rotate()`
  - `invert()`
  - `opacity()`
  - `saturate()`
  - `sepia()`
