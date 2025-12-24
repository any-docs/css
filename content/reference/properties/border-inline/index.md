---
title: border-inline
slug: Web/CSS/Reference/Properties/border-inline
page-type: css-shorthand-property
browser-compat: css.properties.border-inline
sidebar: cssref
---

The **`border-inline`** [CSS](/en-US/docs/Web/CSS) property is a [shorthand property](/guides/Cascade/Shorthand_properties) for setting the individual logical inline border property values in a single place in the style sheet.

{{InteractiveExample("CSS Demo: border-inline")}}

```css interactive-example-choice
border-inline: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline: 1rem solid;
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

- `border-inline-color`
- `border-inline-style`
- `border-inline-width`

## Syntax

```css
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;

/* Global values */
border-inline: inherit;
border-inline: initial;
border-inline: revert;
border-inline: revert-layer;
border-inline: unset;
```

### Values

The `border-inline` is specified with one or more of the following, in any order:

- `<'border-width'>`
  - The width of the border. See `border-width`.
- `<'border-style'>`
  - The line style of the border. See `border-style`.
- `&lt;color&gt;`
  - The color of the border.

## Description

The physical borders to which `border-inline` maps depends on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top` and `border-bottom` or `border-right`, and `border-left` properties, depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

The borders in the other dimension can be set with `border-block`, which sets `border-block-start`, and `border-block-end`.

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
  border-inline: 5px dashed blue;
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
