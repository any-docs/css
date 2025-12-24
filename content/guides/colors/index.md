---
title: CSS colors
short-title: Colors
slug: Web/CSS/Guides/Colors
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-color/
  - https://drafts.csswg.org/css-color-5/
sidebar: cssref
---

The **CSS colors** module defines colors, color types, color blending, opacity, and how you can apply these colors and effects to HTML content.

While this module has only two CSS properties, `color` and `opacity`, over 20 CSS and SVG properties, CSS images, at-rules, and @media rules depend on these two properties.

## Colors in action

The color syntax converter below shows the values of the currently selected color in [red-green-blue](/reference/values/color_value/rgb) (RGB), [hexadecimal](/reference/values/hex-color) (HEX), [hue, saturation, and lightness](/reference/values/color_value/hsl) (HSL), and [hue, whiteness, and blackness](/reference/values/color_value/hwb) (HWB) CSS color formats. All the RGB, HEX, HSL, and HWB color values here, while written differently, represent the same color value.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Selecting a color via the [color picker](/en-US/docs/Web/HTML/Reference/Elements/input/color) and an opacity via the [slider](/en-US/docs/Web/HTML/Reference/Elements/input/range) updates the RGB, HEX, HSL, and HWB values. When you choose a new color or opacity value, the color of the background and the slider update via the CSS properties `background-color` and `accent-color`, respectively.

To see the code for this color syntax converter, [view the source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Reference

### Properties

- `color`
- `opacity`

### At-rules and descriptors

The CSS colors module also introduces the `@color-profile` at-rule, along with its `components`, `rendering-intent` and `src` descriptors. Currently, no browsers support these features.

### Functions

- Color functions:
  - [`rgb()`](/reference/values/color_value/rgb)
  - [`hsl()`](/reference/values/color_value/hsl)
  - [`hwb()`](/reference/values/color_value/hwb)
  - [`lab()`](/reference/values/color_value/lab)
  - [`lch()`](/reference/values/color_value/lch)
  - [`oklab()`](/reference/values/color_value/oklab)
  - [`oklch()`](/reference/values/color_value/oklch)
  - [`color()`](/reference/values/color_value/color)
- [`color-mix()`](/reference/values/color_value/color-mix)
- [`contrast-color()`](/reference/values/color_value/contrast-color)
- `light-dark()`

The CSS color modules also introduce the `device-cmyk()` function. Currently, no browsers support this feature.

### Data types

- `&lt;color&gt;`
- [`<color-function>`](#functions)
- `hex-color`
- `named-color`
- `alpha-value`
- `hue`
- `system-color`
- [`<colorspace-params>`](/reference/values/color_value/color#using_predefined_color_spaces_with_color)

### Glossary terms and keywords

- {{glossary("Color space")}}
- [`currentColor`](/reference/values/color_value#currentcolor_keyword)
- {{glossary("Interpolation")}}
- {{glossary("RGB")}}
- [`transparent`](/reference/values/named-color#transparent)

### Interfaces

The CSS color module also introduces the `CSSColorProfileRule` interface. Currently, no browsers support this feature.

## Guides

- [Applying color to HTML elements using CSS](/guides/Colors/Applying_color)
  - A guide to using CSS to apply color to a variety of types of content, including all CSS properties that accept `<color>` as a value.
- [CSS color values](/guides/Colors/Color_values)
  - An overview of color spaces and the different `<color>` functional notations available in CSS.
- [Using color wisely](/guides/Colors/Using_color_wisely)
  - Color theory and resources, including finding the right colors to create an accessible color palette, contrast, and printing in color.
- [Using relative colors](/guides/Colors/Using_relative_colors)
  - This article explains relative CSS color syntax, shows what the different options are, and looks at some illustrative examples.
- [Understanding color and luminance](/en-US/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - Color perception and using colors with color insensitive (color blind) users, reduced vision users and users with vestibular disorders or other neurological disorders in mind.
- [WCAG 1.4.1: Color contrast](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - Explanation of contrast requirements between background and foreground content to ensure legibility.
- [CSS value serialization](/en-US/docs/Web/API/CSS_Object_Model/CSS_value_serialization)
  - How [CSSOM APIs](/en-US/docs/Web/API/CSS_Object_Model) serialize color and other values into standardized string representations.

## Related concepts

- CSS properties that are part of other specifications:
  - `accent-color`
  - `background-color`
  - `background-image`
  - `border-color`
  - `box-shadow`
  - `caret-color`
  - `color`
  - `color-scheme`
  - `column-rule-color`
  - `dynamic-range-limit`
  - `outline-color`
  - `scrollbar-color`
  - `text-decoration-color`
  - `text-emphasis-color`
  - `text-shadow`
  - `-webkit-tap-highlight-color`
- `dynamic-range-limit-mix()` function
- SVG color properties that are part of other specifications:
  - [`fill`](/en-US/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/en-US/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/en-US/docs/Web/SVG/Reference/Attribute/lighting-color)
  - [`stop-color`](/en-US/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/en-US/docs/Web/SVG/Reference/Attribute/stroke)
- SVG [`color`](/en-US/docs/Web/SVG/Reference/Attribute/color) attribute
- {{glossary("Color wheel")}} glossary term
- {{glossary("Interpolation")}} glossary term
- The `@font-palette-values` at-rule [`override-colors`](/en-US/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors) descriptor
- The `@color-profile` at-rule
- The [`color-gamut`](/en-US/docs/Web/CSS/Reference/At-rules/@media/color-gamut) @media feature
- The [`forced-colors`](/en-US/docs/Web/CSS/Reference/At-rules/@media/forced-colors) @media feature

## Specifications

{{Specifications}}

## See also

- [CSS color adjustment](/guides/Color_adjustment) module and `print-color-adjust`
- `gradient` defined in [CSS images](/guides/Images) module
- The [`VideoColorSpace`](/en-US/docs/Web/API/VideoColorSpace) interface
- [`<feColorMatrix>`](/en-US/docs/Web/SVG/Reference/Element/feColorMatrix) SVG element
- [Canvas API: applying styles and colors](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
- Tools:
  - [Color format converter](/guides/Colors/Color_format_converter)
  - [Color mixer](/guides/Colors/Color_mixer)
