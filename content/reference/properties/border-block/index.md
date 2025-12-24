---
title: border-block
slug: Web/CSS/Reference/Properties/border-block
page-type: css-shorthand-property
browser-compat: css.properties.border-block
sidebar: cssref
---

The **`border-block`** [CSS](/en-US/docs/Web/CSS) property is a [shorthand property](/guides/Cascade/Shorthand_properties) for setting the individual logical block border property values in a single place in the style sheet.

{{InteractiveExample("CSS Demo: border-block")}}

```css interactive-example-choice
border-block: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block: 1rem solid;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- `border-block-color`
- `border-block-style`
- `border-block-width`

## Syntax

```css
border-block: 1px;
border-block: 2px dotted;
border-block: medium dashed blue;

/* Global values */
border-block: inherit;
border-block: initial;
border-block: revert;
border-block: revert-layer;
border-block: unset;
```

### Values

The `border-block` is specified with one or more of the following, in any order:

- `<'border-width'>`
  - The width of the border. See `border-width`.
- `<'border-style'>`
  - The line style of the border. See `border-style`.
- `&lt;color&gt;`
  - The color of the border.

## Description

`border-block` can be used to set the values for one or more of `border-block-width`, `border-block-style`, and `border-block-color` setting both the start and end in the block dimension at once. The physical borders to which it maps depends on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top` and `border-bottom` or `border-right`, and `border-left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

The borders in the other dimension can be set with `border-inline`, which sets `border-inline-start`, and `border-inline-end`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Border with vertical text

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  border-block: 5px dashed blue;
}
```

#### Results

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/guides/Logical_properties_and_values)
- This property maps to one of the physical border properties: `border-top`, `border-right`, `border-bottom`, or `border-left`.
- `writing-mode`, `direction`, `text-orientation`
