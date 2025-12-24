---
title: corner-right-shape
slug: Web/CSS/Reference/Properties/corner-right-shape
page-type: css-property
status:
  - experimental
browser-compat: css.properties.corner-right-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`corner-right-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of both the corners on a box's right-hand edge, within their `border-radius` area.

For a full description of corner shape behavior and multiple examples, see the `corner-shape` shorthand property page.

## Constituent properties

The `corner-right-shape` property is a shorthand for the following physical properties:

- `corner-top-right-shape`
- `corner-bottom-right-shape`

## Syntax

```css
/* Single keyword value set for both corners */
corner-right-shape: bevel;
corner-right-shape: notch;

/* Single superellipse() value set for both corners */
corner-right-shape: superellipse(4);
corner-right-shape: superellipse(-0.9);

/* Top corner, bottom corner */
corner-right-shape: bevel notch;
corner-right-shape: notch superellipse(-0.9);

/* Global values */
corner-right-shape: inherit;
corner-right-shape: initial;
corner-right-shape: revert;
corner-right-shape: revert-layer;
corner-right-shape: unset;
```

### Values

The `corner-right-shape` property is specified using one or two `&lt;corner-shape-value>` values:

- If **one value** is used, it specifies the shape of **both right-hand corners**.
- If **two values** are used, the first one specifies the shape of the **top-right** corner, and the second one specifies the shape of the **bottom-right** corner.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the `corner-shape` reference page.

### Basic `corner-right-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a `box-shadow`, a `border-radius` of `20% 30% / 50% 40%`, and a `corner-right-shape` of `square scoop`.

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
  background-color: cyan;
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
  border-radius: 20% 30% / 50% 40%;
  corner-right-shape: square scoop;
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
- `corner-top-shape`, `corner-bottom-shape`, and `corner-left-shape`
- `corner-block-start-shape`, `corner-block-end-shape`, `corner-inline-start-shape`, and `corner-inline-end-shape`
- `border-radius` shorthand property
- `border-top-right-radius` and `border-bottom-right-radius`
- [CSS borders and box decorations](/guides/Borders_and_box_decorations) module
- [CSS backgrounds and borders](/guides/Backgrounds_and_borders) module
