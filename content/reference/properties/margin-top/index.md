---
title: margin-top
slug: Web/CSS/Reference/Properties/margin-top
page-type: css-property
browser-compat: css.properties.margin-top
sidebar: cssref
---

The **`margin-top`** [CSS](/en-US/docs/Web/CSS) property sets the [margin area](/guides/Box_model/Introduction#margin_area) on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

{{InteractiveExample("CSS Demo: margin-top")}}

```css interactive-example-choice
margin-top: 1em;
```

```css interactive-example-choice
margin-top: 10%;
```

```css interactive-example-choice
margin-top: 10px;
```

```css interactive-example-choice
margin-top: 0;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row"></div>
    <div class="row transition-all" id="example-element"></div>
    <div class="row"></div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

This property has no effect on _non-[replaced](/en-US/docs/Glossary/Replaced_elements)_ inline elements, such as {{HTMLElement("span")}} or {{HTMLElement("code")}}.

## Syntax

```css
/* <length> values */
margin-top: 10px; /* An absolute length */
margin-top: 1em; /* relative to the text size */
margin-top: 5%; /* relative to the nearest block container's width */
margin-top: anchor-size(height);
margin-top: calc(anchor-size(--my-anchor self-inline, 25px) / 4);

/* Keyword values */
margin-top: auto;

/* Global values */
margin-top: inherit;
margin-top: initial;
margin-top: revert;
margin-top: revert-layer;
margin-top: unset;
```

The `margin-top` property is specified as the keyword `auto`, or a `<length>`, or a `<percentage>`. Its value can be positive, zero, or negative.

### Values

- `&lt;length&gt;`
  - The size of the margin as a fixed value.
    - For _anchor-positioned elements_, the `anchor-size()` function resolves to a `&lt;length&gt;` value relative to the associated _anchor element_'s width or height (see [Setting element margin based on anchor size](/guides/Anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- `&lt;percentage&gt;`
  - The size of the margin as a percentage, relative to the inline size (_width_ in a horizontal language, defined by `writing-mode`) of the [containing block](/guides/Display/Containing_block).
- `auto`
  - The browser selects a suitable value to use. See `margin`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting positive and negative top margins

```css
.content {
  margin-top: 5%;
}
.side-box {
  margin-top: 10px;
}
.logo {
  margin-top: -5px;
}
#footer {
  margin-top: 1em;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `margin-right`, `margin-bottom`, and `margin-left`
- `margin` shorthand
- `margin-block-start`, `margin-block-end`, `margin-inline-start`, and `margin-inline-end`
- `margin-block` and `margin-inline` shorthands
- [CSS box model](/guides/Box_model) module
