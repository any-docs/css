---
title: corner-block-end-shape
slug: Web/CSS/Reference/Properties/corner-block-end-shape
page-type: css-property
status:
  - experimental
browser-compat: css.properties.corner-block-end-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`corner-block-end-shape`** [CSS](/en-US/docs/Web/CSS) property specifies the shape of both the corners on a box's block-end edge, within their `border-radius` area.

For a full description of corner shape behavior and multiple examples, see the `corner-shape` shorthand property page.

## Constituent properties

The `corner-block-end-shape` property is a shorthand for the following physical properties:

- `corner-end-start-shape`
- `corner-end-end-shape`

## Syntax

```css
/* Single keyword value set for both corners */
corner-block-end-shape: square;
corner-block-end-shape: scoop;

/* Single superellipse() value set for both corners */
corner-block-end-shape: superellipse(3.5);
corner-block-end-shape: superellipse(-1.9);

/* Block-end/inline-start corner, block-end/inline-end corner */
corner-block-end-shape: square scoop;
corner-block-end-shape: square superellipse(-1.9);

/* Global values */
corner-block-end-shape: inherit;
corner-block-end-shape: initial;
corner-block-end-shape: revert;
corner-block-end-shape: revert-layer;
corner-block-end-shape: unset;
```

### Values

The `corner-block-end-shape` property is specified using one or two `&lt;corner-shape-value>` values:

- If **one value** is used, it specifies the shape of **both block-end** corners.
- If **two values** are used, the first one specifies the shape of the **block-end/inline-start** corner, and the second one specifies the shape of the **block-end/inline-end** corner.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find other related examples on the `corner-shape` reference page.

### Basic `corner-block-end-shape` usage

#### HTML

The markup for this example contains a single {{htmlelement("div")}} element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

We give the box some basic styles, which we've hidden for brevity. We also apply a `box-shadow`, a `border-radius` of `80px / 40px`, and a `corner-block-end-shape` of `notch square`.

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
  border-radius: 80px / 40px;
  corner-block-end-shape: notch square;
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
- `corner-block-start-shape`, `corner-inline-start-shape`, and `corner-inline-end-shape`
- `corner-top-shape`, `corner-bottom-shape`, `corner-left-shape`, and `corner-right-shape`
- `border-radius` shorthand property
- `border-end-start-radius` and `border-end-end-radius`
- [CSS borders and box decorations](/guides/Borders_and_box_decorations) module
- [CSS backgrounds and borders](/guides/Backgrounds_and_borders) module
