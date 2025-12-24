---
title: padding-left
slug: Web/CSS/Reference/Properties/padding-left
page-type: css-property
browser-compat: css.properties.padding-left
sidebar: cssref
---

The **`padding-left`** [CSS](/en-US/docs/Web/CSS) property sets the width of the [padding area](/guides/Box_model/Introduction#padding_area) to the left of an element.

{{InteractiveExample("CSS Demo: padding-left")}}

```css interactive-example-choice
padding-left: 1.5em;
```

```css interactive-example-choice
padding-left: 10%;
```

```css interactive-example-choice
padding-left: 20px;
```

```css interactive-example-choice
padding-left: 1ch;
```

```css interactive-example-choice
padding-left: 0;
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
}
```

An element's padding area is the space between its content and its border.

> [!NOTE]
> The `padding` property can be used to set paddings on all four sides of an element with a single declaration.

## Syntax

```css
/* <length> values */
padding-left: 0.5em;
padding-left: 0;
padding-left: 2cm;

/* <percentage> value */
padding-left: 10%;

/* Global values */
padding-left: inherit;
padding-left: initial;
padding-left: revert;
padding-left: revert-layer;
padding-left: unset;
```

The `padding-left` property is specified as a single value chosen from the list below. Unlike margins, negative values are not allowed for padding.

### Values

- `&lt;length&gt;`
  - The size of the padding as a fixed value. Must be nonnegative.
- `&lt;percentage&gt;`
  - The size of the padding as a percentage, relative to the inline size (_width_ in a horizontal language, defined by `writing-mode`) of the [containing block](/guides/Display/Containing_block). Must be nonnegative.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting left padding using pixels and percentages

```css
.content {
  padding-left: 5%;
}
.side-box {
  padding-left: 10px;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `padding-top`, `padding-right`, and `padding-bottom`
- `padding` shorthand
- `padding-block-start`, `padding-block-end`, `padding-inline-start`, and `padding-inline-end`
- `padding-block` and `padding-inline` shorthands
- [Introduction to the CSS basic box model](/guides/Box_model/Introduction)
- [CSS box model](/guides/Box_model) module
