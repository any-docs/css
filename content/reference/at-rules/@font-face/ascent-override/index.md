---
title: ascent-override
slug: Web/CSS/Reference/At-rules/@font-face/ascent-override
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.ascent-override
sidebar: cssref
---

The **`ascent-override`** [CSS](/en-US/docs/Web/CSS) descriptor for the `@font-face` at-rule defines the ascent metric for the font. The ascent metric is the height above the baseline that CSS uses to lay out line boxes in an inline formatting context.

## Syntax

```css
ascent-override: normal;
ascent-override: 90%;
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

The `ascent-override` property can help when overriding the metrics of a fallback font to better match those of a primary web font.

```css
@font-face {
  font-family: "web-font";
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: "local-font";
  src: local("Local Font");
  ascent-override: 125%;
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
- `line-gap-override`
- `src`
- `size-adjust`
- `unicode-range` descriptor
