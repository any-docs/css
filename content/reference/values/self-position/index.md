---
title: <self-position>
slug: Web/CSS/Reference/Values/self-position
page-type: css-type
spec-urls: https://drafts.csswg.org/css-align/#typedef-self-position
sidebar: cssref
---

The **`<self-position>`** {{glossary("enumerated")}} value data type is used by the `justify-self` and `align-self` properties, and the `place-self` shorthand, to align the box within its alignment container. It is also used by the `justify-items` and `align-items` properties, and the `place-items` shorthand, to specify default values for `justify-self` and `align-self`.

## Syntax

```plain
<self-position> = center | start | end | self-start | self-end | flex-start | flex-end
```

## Values

The following keyword values are represented by the `<self-position>` grammar term:

- `center`
  - Centers the {{glossary("alignment subject")}} within its {{glossary("alignment container")}}.
- `start`
  - Aligns the alignment subject flush with the alignment container's start edge.
- `end`
  - Aligns the alignment subject flush with the alignment container's end edge.
- `self-start`
  - Aligns the alignment subject flush with the edge of the alignment container corresponding to the alignment subject's start side.
- `self-end`
  - Aligns the alignment subject flush with the edge of the alignment container corresponding to the alignment subject's end side.
- `flex-start`
  - In flex layout, aligns the alignment subject flush with the edge of the alignment container corresponding to the flex container's main-start or cross-start side, as appropriate. It is identical to `start` for layout modes other than flex layout.
- `flex-end`
  - In flex layout, aligns the alignment subject flush with the edge of the alignment container corresponding to the flex container's main-end or cross-end side, as appropriate. Identical to `end` for layout modes other than flex layout.

> [!NOTE]
> The `left` and `right` keywords are excluded from `<self-position>`, despite being valid positional alignment values for the `justify-*` properties (`justify-content`, `justify-self`, and `justify-items`), because they are not allowed in the `align-*` properties (`align-content`, `align-self`, and `align-items`). They are instead explicitly included in the `justify-*` properties' grammars.

## Specifications

{{Specifications}}

## See also

- Properties that use this data type: `align-self`, `justify-self`, `place-self`, `align-items`, `justify-items`, `place-items`
- Other box alignment data types: `baseline-position`, `content-distribution`, `overflow-position`, and `content-position`
- [CSS box alignment](/guides/Box_alignment) module
- [CSS flexible box layout](/guides/Flexible_box_layout) module
- [CSS grid layout](/guides/Grid_layout) module
