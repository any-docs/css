---
title: <display-listitem>
slug: Web/CSS/Reference/Values/display-listitem
page-type: css-type
browser-compat: css.properties.display.list-item
sidebar: cssref
---

The `list-item` keyword causes the element to generate a `::marker` pseudo-element with the content specified by its `list-style` properties (for example a bullet point) together with a principal box of the specified type for its own contents.

## Syntax

A single value of `list-item` will cause the element to behave like a list item. This can be used together with `list-style-type` and `list-style-position`.

`list-item` can also be combined with any `&lt;display-outside&gt;` keyword and the `flow` or `flow-root` `&lt;display-inside&gt;` keywords.

> [!NOTE]
> In browsers that support the two-value syntax, if no inner value is specified it will default to `flow`. If no outer value is specified, the principal box will have an outer display type of `block`.

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<div class="fake-list">I will display as a list item</div>
```

### CSS

```css
.fake-list {
  display: list-item;
  list-style-position: inside;
}
```

### Result

{{EmbedLiveSample("Examples", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `display`
  - `&lt;display-outside&gt;`
  - `&lt;display-inside&gt;`
  - `&lt;display-internal&gt;`
  - `&lt;display-box&gt;`
  - `&lt;display-legacy&gt;`
