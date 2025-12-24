---
title: descent-override
slug: Web/CSS/Reference/At-rules/@font-face/descent-override
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.descent-override
sidebar: cssref
---

The **`descent-override`** [CSS](/en-US/docs/Web/CSS) descriptor for the `@font-face` at-rule defines the descent metric for the font. The descent metric is the height below the baseline that CSS uses to lay out line boxes in an inline formatting context.

## Syntax

```css
descent-override: normal;
descent-override: 90%;
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

The `descent-override` property can help when overriding the metrics of a fallback font to better match those of a primary web font.

```css
@font-face {
  font-family: "web-font";
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: "local-font";
  src: local("Local Font");
  descent-override: 125%;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `ascent-override`
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
