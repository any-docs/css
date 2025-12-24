---
title: corner-end-start-shape
slug: Web/CSS/Reference/Properties/corner-end-start-shape
page-type: css-property
status:
  - experimental
browser-compat: css.properties.corner-end-start-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`corner-end-start-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of a box's block-end and inline-start corner, within its `border-radius` area.

For a full description of corner shape behavior and multiple examples, see the `corner-shape` shorthand property page.

## Syntax

```css
/* Keyword values */
corner-end-start-shape: round;
corner-end-start-shape: scoop;

/* superellipse() function values */
corner-end-start-shape: superellipse(0.2);
corner-end-start-shape: superellipse(-5);

/* Global values */
corner-end-start-shape: inherit;
corner-end-start-shape: initial;
corner-end-start-shape: revert;
corner-end-start-shape: revert-layer;
corner-end-start-shape: unset;
```

### Values

The `corner-end-start-shape` property is specified using a `&lt;corner-shape-value>` value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the `corner-shape` reference page.

### Basic `corner-end-start-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a `box-shadow`, a `border-radius` of `60px / 20%`, and a `corner-end-start-shape` of `bevel`.

```css hidden live-sample___basic-usage
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}
```

```css live-sample___basic-usage
div {
  box-shadow: 1px 1px 3px gray;
  border-radius: 60px / 20%;
  corner-end-start-shape: bevel;
}
```

#### Result

The rendered result looks like this:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `corner-shape` shorthand property
- `corner-start-start-shape`, `corner-start-end-shape`, and `corner-end-end-shape`
- `corner-top-left-shape`, `corner-top-right-shape`, `corner-bottom-left-shape`, and `corner-bottom-right-shape`
- `border-radius` shorthand property
- `border-end-start-radius`
- [CSS borders and box decorations](/guides/Borders_and_box_decorations) module
- [CSS backgrounds and borders](/guides/Backgrounds_and_borders) module
