---
title: CSS font loading
short-title: Font loading
slug: Web/CSS/Guides/Font_loading
page-type: css-module
spec-urls: https://drafts.csswg.org/css-font-loading/
sidebar: cssref
---

The **CSS font loading** module describes events and interfaces used for dynamically loading font resources.

## Reference

### Interfaces

- `fontFace` interface
  - [`FontFace()`](/en-US/docs/Web/API/FontFace/FontFace) constructor
  - `fontFace.family` property
  - `fontFace.style` property
  - `fontFace.weight` property
  - `fontFace.stretch` property
  - `fontFace.unicodeRange` property
  - `fontFace.variant` property
  - `fontFace.featureSettings` property
  - `fontFace.variationSettings` property
  - `fontFace.display` property
  - `fontFace.ascentOverride` property
  - `fontFace.descentOverride` property
  - `fontFace.lineGapOverride` property
  - `fontFace.load()` method (returns a promise)
- `fontFaceSet` interface
- `fontFaceSetLoadEvent` event

## Guides

- [CSS font loading API](/en-US/docs/Web/API/CSS_Font_Loading_API)
  - Overview of the CSS Font Loading API, which provide events and interfaces for dynamically loading font resources.

## Related concepts

- CSS `@font-face` at-rule
- CSS `@font-feature-values` at-rule
- `CSSFontFaceRule` interface
- Document `fonts` property (returns the `FontFaceSet` object instance)
- WorkerGlobalScope `fonts` property (returns the `FontFaceSet` object instance)
- JavaScript {{jsxref("Promise")}} object

## Specifications

{{Specifications}}

## See also

- [CSS fonts](/guides/Fonts) module
