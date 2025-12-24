---
title: line-gap-override
slug: Web/CSS/Reference/At-rules/@font-face/line-gap-override
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.line-gap-override
sidebar: cssref
---

The **`line-gap-override`** [CSS](/en-US/docs/Web/CSS) descriptor for the `@font-face` at-rule defines the line-gap metric for the font. The line-gap metric is the font recommended line-gap or external leading.

## Syntax

```css
line-gap-override: normal;
line-gap-override: 90%;
```

### Values

- `normal`
  - The default value. When used the metric value is obtained from the font file.
- `<percentage>`
  - A `&lt;percentage&gt;` value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Overriding metrics of a fallback font

The `line-gap-override` property can help when overriding the metrics of a fallback font to better match those of a primary web font.

```css
@font-face {
  font-family: "web-font";
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: "local-font";
  src: local("Local Font");
  line-gap-override: 125%;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `descent-override`
- `font-display`
- `font-family`
- `font-weight`
- `font-style`
- `font-stretch`
- `font-feature-settings`
- `font-variation-settings`
- `src`
- `size-adjust`
- `unicode-range` descriptor
