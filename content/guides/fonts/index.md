---
title: CSS fonts
short-title: Fonts
slug: Web/CSS/Guides/Fonts
page-type: css-module
spec-urls: https://drafts.csswg.org/css-fonts/
sidebar: cssref
---

The **CSS fonts** module defines font-related properties and how font resources are loaded. It lets you define the style of a font, such as its family, size and weight, and the glyph variants to use when multiple are available for a single character.

A font is a resource file containing the visual representation of characters, mapping character codes to glyphs that represent letters, numbers, punctuation and even emojis of a typeface. A font family is a group of fonts that share common design styles and font properties, with each member of the group providing different ways of displaying the glyphs, varying by stroke weight, slant, or relative width, among other attributes. A font typically represents a single style of a typeface, such as Helvetica that is Bold and Italic. A font family is the complete set of styles. Including such a font in a document or design is done by defining a separate `@font-face` declaration for each font resource.

The properties, at-rules, and descriptors of the CSS fonts module enable the downloading of multiple variations of a font. They also define the font file to use for a particular font characteristic, along with fallback instructions in case a resource fails to load. The CSS font selection mechanism describes the process of matching a given set of CSS font properties to a single font face.

The CSS fonts module also supports variable fonts. Unlike regular fonts, where each style is implemented as a separate font file, variable fonts can contain all styles within a single file. By using a single `@font-face` declaration, you can import a variable font that includes all the styles. Depending on the font, this can include a multitude of font variants. Variable fonts are a part of the OpenType font specification.

## Reference

### Properties

- `font` shorthand
- `font-family`
- `font-feature-settings`
- `font-kerning`
- `font-language-override`
- `font-optical-sizing`
- `font-palette`
- `font-size`
- `font-size-adjust`
- `font-stretch`
- `font-style`
- `font-weight`

- `font-synthesis` shorthand
- `font-synthesis-position`
- `font-synthesis-small-caps`
- `font-synthesis-style`
- `font-synthesis-weight`

- `font-variant` shorthand
- `font-variant-alternates`
- `font-variant-caps`
- `font-variant-east-asian`
- `font-variant-emoji`
- `font-variant-ligatures`
- `font-variant-numeric`
- `font-variant-position`
- `font-variation-settings`

The specification also defines the `font-width` property, which is not yet supported by any browser.

### At-rules and descriptors

- At-rule: `@font-face`
  - Descriptors:
    - `ascent-override`
    - `descent-override`
    - `font-display`
    - `font-family`
    - `font-feature-settings`
    - `font-stretch`
    - `font-style`
    - `font-variation-settings`
    - `font-weight`
    - `line-gap-override`
    - `size-adjust`
    - `src`
    - `unicode-range`

The CSS fonts module also defines the `font-language-override`, `font-named-instance`, `font-width`, `font-size`, `subscript-position-override`, `subscript-size-override`, `superscript-position-override`, and `superscript-size-override` descriptors. Currently, no browsers support these features.

- At-rule: `@font-feature-values`

The CSS fonts module also defines the `font-display` descriptor. Currently, no browsers support this feature.

- At-rule: `@font-palette-values`
  - Descriptors:
    - `base-palette`
    - `font-family`
    - `override-colors`

### Data types

`font-size` types:

- `absolute-size`
- `relative-size`

`font-family` type:

- `generic-family`

`font-feature-settings` type:

- [`<feature-tag-value>`](/reference/properties/font-feature-settings#values)

`font-format` type:

- [`<font-format>`](/en-US/docs/Web/CSS/Reference/At-rules/@supports#font-format)

`font-stretch` type:

- [`<font-stretch-css3>`](/reference/properties/font-stretch#values)

`font-tech` types:

- [`<color-font-tech>`](/en-US/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`<font-features-tech>`](/en-US/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`<font-tech>`](/en-US/docs/Web/CSS/Reference/At-rules/@supports#font-tech)

`font-variant` types:

- [`<font-variant-css2>`](/reference/properties/font-variant)
- [`<east-asian-variant-values>`](/reference/properties/font-variant#values)
- [`<east-asian-width-values>`](/reference/properties/font-variant#values)

`font-variant-ligatures` types:

- [`<common-lig-values>`](/reference/properties/font-variant-ligatures#values)
- [`<contextual-alt-values>`](/reference/properties/font-variant-ligatures#values)
- [`<discretionary-lig-values>`](/reference/properties/font-variant-ligatures#values)
- [`<historical-lig-values>`](/reference/properties/font-variant-ligatures#values)

`font-variant-numeric` types:

- [`<numeric-figure-values>`](/reference/properties/font-variant-numeric#values)
- [`<numeric-fraction-values>`](/reference/properties/font-variant-numeric#values)
- [`<numeric-spacing-values>`](/reference/properties/font-variant-numeric#values)

`font-weight` type:

- [`<font-weight-absolute>`](/reference/properties/font-weight#values)

### Interfaces

- `CSSFontFaceRule`
- `CSSFontFeatureValuesRule`
- `CSSFontPaletteValuesRule`

## Guides

- [Learn: Fundamental text and font styling](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)
  - This beginner's learning article covers the basic fundamentals of text and font styling. It covers how to set the font weight, family, and style by using the `font` shorthand and how to align text and manage line and letter spacing.

- [Learn: Web fonts](/en-US/docs/Learn_web_development/Core/Text_styling/Web_fonts)
  - This beginner's learning article explains how to use custom fonts on your web page to allow for more varied and custom text styling.

- [OpenType font features](/guides/Fonts/OpenType_fonts)
  - Font features or variants refer to different glyphs or character styles contained within an OpenType font. These include things like ligatures (special glyphs that combine characters like 'fi' or 'ffl'), kerning (adjustments to the spacing between specific letterform pairings), fractions, numeral styles, and a number of others. These are all referred to as OpenType Features, and are made available to use on the web via specific properties and a low-level control property — `font-feature-settings`. This article provides you with all you need to know about using OpenType font features in CSS.

- [Web Open Font Format (WOFF)](/guides/Fonts/WOFF)
  - WOFF uses a compressed version of the same table-based `sfnt` structure used by TrueType, OpenType, and Open Font Format, but adds metadata and private-use data structures, including predefined fields allowing foundries and vendors to provide license information if desired.

- [Variable fonts](/guides/Fonts/Variable_fonts)
  - This article will help you get started with using variable fonts.

- [Improving font performance](/en-US/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)
  - This article, part of the CSS performance guide, discusses font loading, loading only the required glyphs, and defining font display behavior with the `font-display` descriptor.

## Related concepts

- `letter-spacing` CSS property
- `line-height` CSS property
- `text-transform` CSS property

## Specifications

{{Specifications}}

## See also

- [CSS font loading](/guides/Font_loading) module
- [CSS font loading API](/en-US/docs/Web/API/CSS_Font_Loading_API)
- [CSS text](/guides/Text) module
- [CSS writing modes](/guides/Writing_modes) module
