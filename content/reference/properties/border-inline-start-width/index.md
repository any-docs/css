---
title: border-inline-start-width
slug: Web/CSS/Reference/Properties/border-inline-start-width
page-type: css-property
browser-compat: css.properties.border-inline-start-width
sidebar: cssref
---

The **`border-inline-start-width`** [CSS](/en-US/docs/Web/CSS) property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

{{InteractiveExample("CSS Demo: border-inline-start-width")}}

```css interactive-example-choice
border-inline-start-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-start-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-start-width: 4px;
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
  background-color: palegreen;
  color: black;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Syntax

```css
/* <'border-width'> values */
border-inline-start-width: 5px;
border-inline-start-width: thick;

/* Global values */
border-inline-start-width: inherit;
border-inline-start-width: initial;
border-inline-start-width: revert;
border-inline-start-width: revert-layer;
border-inline-start-width: unset;
```

Related properties are `border-block-start-width`, `border-block-end-width`, and `border-inline-end-width`, which define the other border widths of the element.

### Values

- `<'border-width'>`
  - The width of the border. See {{ cssxref("border-width") }}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-inline-start-width: 5px;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/guides/Logical_properties_and_values)
- This property maps to one of the physical border properties: `border-top-width`, `border-right-width`, `border-bottom-width`, and `border-left-width`
- `writing-mode`, `direction`, `text-orientation`
