---
title: padding-block-start
slug: Web/CSS/Reference/Properties/padding-block-start
page-type: css-property
browser-compat: css.properties.padding-block-start
sidebar: cssref
---

The **`padding-block-start`** [CSS](/en-US/docs/Web/CSS) property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

{{InteractiveExample("CSS Demo: padding-block-start")}}

```css interactive-example-choice
padding-block-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-block-start: 5em;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block-start: 5em;
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
  unicode-bidi: bidi-override;
}
```

## Syntax

```css
/* <length> values */
padding-block-start: 10px; /* An absolute length */
padding-block-start: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-block-start: 5%; /* A padding relative to the block container's width */

/* Global values */
padding-block-start: inherit;
padding-block-start: initial;
padding-block-start: revert;
padding-block-start: revert-layer;
padding-block-start: unset;
```

### Values

- `&lt;length&gt;`
  - The size of the padding as a fixed value. Must be nonnegative.
- `&lt;percentage&gt;`
  - The size of the padding as a percentage, relative to the [inline-size](/guides/Display/Block_and_inline_layout) (_width_ in a horizontal language) of the [containing block](/guides/Display/Containing_block). Must be nonnegative.

## Description

The `padding-block-start` property takes the same values as physical padding properties such as `padding-top`. However, it can be equivalent to `padding-top`, `padding-bottom`, `padding-left`, or `padding-right` depending on the values set for `writing-mode`, `direction`, and `text-orientation`.

It relates to `padding-block-end`, `padding-inline-start`, and `padding-inline-end`, which define the other padding values of the element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting block start padding for vertical text

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
  writing-mode: vertical-lr;
  padding-block-start: 20px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_block_start_padding_for_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/guides/Logical_properties_and_values)
- The mapped physical properties: `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`
- `writing-mode`, `direction`, `text-orientation`
