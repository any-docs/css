---
title: size-adjust
slug: Web/CSS/Reference/At-rules/@font-face/size-adjust
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.size-adjust
sidebar: cssref
---

The **`size-adjust`** [CSS](/en-US/docs/Web/CSS) descriptor for the `@font-face` at-rule defines a multiplier for glyph outlines and metrics associated with this font. This makes it easier to harmonize the designs of various fonts when rendered at the same font size.

The `size-adjust` descriptor behaves in a similar fashion to the `font-size-adjust` property. It calculates an adjustment per font by matching ex heights.

## Syntax

```css
size-adjust: 90%;
```

### Values

- `<percentage>`
  - A `&lt;percentage&gt;` value with an initial value of 100%.

All metrics associated with this font are scaled by the given percentage. This includes glyph advances, baseline tables, and overrides provided by `@font-face` descriptors.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Overriding metrics of a fallback font

The `size-adjust` property can help when overriding the metrics of a fallback font to better match those of a primary web font.

```css
@font-face {
  font-family: "web-font";
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: "local-font";
  src: local("Local Font");
  size-adjust: 90%;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `font-display` descriptor
- `font-family` descriptor
- `font-weight` descriptor
- `font-style` descriptor
- `font-stretch` descriptor
- `font-feature-settings`
- `font-variation-settings` descriptor
- `src` descriptor
- `unicode-range` descriptor
- {{cssxref('font-size-adjust')}} property
