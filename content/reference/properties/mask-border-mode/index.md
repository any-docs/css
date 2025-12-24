---
title: mask-border-mode
slug: Web/CSS/Reference/Properties/mask-border-mode
page-type: css-property
spec-urls: https://drafts.fxtf.org/css-masking-1/#the-mask-border-mode
sidebar: cssref
---

The **`mask-border-mode`** [CSS](/en-US/docs/Web/CSS) property specifies the blending mode used in a [mask border](/reference/properties/mask-border).

## Syntax

```css
/* Keyword values */
mask-border-mode: luminance;
mask-border-mode: alpha;

/* Global values */
mask-border-mode: inherit;
mask-border-mode: initial;
mask-border-mode: revert;
mask-border-mode: revert-layer;
mask-border-mode: unset;
```

### Values

- `luminance`
  - The luminance values of the mask border image are used as the mask values.
- `alpha`
  - The alpha values of the mask border image are used as the mask values.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

Currently, no browsers support this feature.

## See also

- `mask-mode`
- `mask-type`
- [Alpha transparency versus luminance](/guides/Masking/Introduction#alpha_transparency_versus_luminance)
- `mask-border` shorthand
- `mask-border-outset`
- `mask-border-repeat`
- `mask-border-source`
- `mask-border-width`
- `mask-mode`
- [CSS masking](/guides/Masking) module
