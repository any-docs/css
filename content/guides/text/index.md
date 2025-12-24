---
title: CSS text
short-title: Text
slug: Web/CSS/Guides/Text
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-text/
  - https://drafts.csswg.org/css-text-4/
sidebar: cssref
---

The **CSS text** module defines how to perform text manipulation, like line breaking, justification and alignment, white space handling, and text transformation.

## Reference

### Properties

- `hanging-punctuation`
- `hyphenate-character`
- `hyphenate-limit-chars`
- `hyphens`
- `letter-spacing`
- `line-break`
- `overflow-wrap` (and the `word-wrap` alias)
- `tab-size`
- `text-align`
- `text-align-last`
- `text-indent`
- `text-justify`
- `text-autospace`
- `text-spacing-trim` {{Experimental_Inline}}
- `text-transform`
- `text-wrap`
- `text-wrap-mode`
- `text-wrap-style`
- `white-space`
- `white-space-collapse`
- `word-break`
- `word-spacing`

The specification also defines the `hyphenate-limit-last`, `hyphenate-limit-lines`, `hyphenate-limit-zone`, `line-padding`, `text-align-all`, `text-group-align`, `text-spacing`, `white-space-trim`, `word-space-transform`, `wrap-after`, `wrap-before`, and `wrap-inside` properties, which are not yet supported by any browser.

## Guides

- [Wrapping and breaking text](/guides/Text/Wrapping_breaking_text)
  - A guide to the various ways in which overflowing text can be managed in CSS.
- [Handling whitespace](/guides/Text/Whitespace)
  - A guide introducing the various CSS properties that control the rendering of whitespace in the DOM, exploring the pitfalls and their mitigations.

## Related concepts

### Properties

- `direction`
- `font-feature-settings`
- `initial-letter`
- `orphans`
- `text-combine-upright`
- `text-orientation`
- `text-overflow`
- `text-size-adjust` {{Experimental_Inline}}
- `unicode-bidi`
- `widows`
- `writing-mode`

### Values

- `min-content`
- `max-content`

### HTML

- {{htmlelement("pre")}}
- {{htmlelement("wbr")}}

## Specifications

{{Specifications}}

## See also

- [CSS writing modes](/guides/Writing_modes) module
- [CSS overflow](/guides/Overflow) module
- [CSS fonts](/guides/Fonts) module
- [CSS ruby layout](/guides/Ruby_layout) module
- [CSS text decoration](/guides/Text_decoration) module
