---
title: CSS shapes
short-title: Shapes
slug: Web/CSS/Guides/Shapes
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-shapes-1/
  - https://drafts.csswg.org/css-shapes-2/
sidebar: cssref
---

The **CSS shapes** module describes geometric shapes. It also defines CSS properties that can use the shapes to control the geometry of an element's float area; this area can then be applied to exclusions, or specify an element's content area.

The specification defines several ways to create shapes. Content can be wrapped around or within a shape rather than following the default rectangle shape of the element's box.

Shapes define geometries that can be used as CSS values. This module provides functions for creating ellipses, polygons, and arbitrary geometries. Other CSS modules can make use of shapes defined in this specification, including [CSS motion path](/guides/Motion_path) and [CSS masking](/guides/Masking).

## CSS shapes in action

The example below shows an image that has been floated left, and the `shape-outside` property applied with a value of `circle(50%)`. This creates a circle shape, and the content wrapping the float now wraps around that shape. This changes the length of the wrapping text's line boxes. You can click "Play" to edit the code in the MDN Playground.

```html live-sample___circle hidden
<div class="box">
  <img
    alt="A hot air balloon"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___circle hidden
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "300px")}}

## Reference

### Properties

- `shape-image-threshold`
- `shape-margin`
- `shape-outside`

The CSS shapes module also introduces the `shape-inside` and `shape-padding` properties. Currently, no browsers support these features.

### Data types

- `basic-shape`

### Functions

- `circle()`
- `ellipse()`
- `inset()`
- `path()`
- `polygon()`
- `rect()`
- `shape()`
- `xywh()`

### Terms

- [Reference box](/guides/Shapes/Using_shape-outside#the_reference_box)

## Guides

- [Overview of shapes](/guides/Shapes/Overview)
  - Defining basic shapes with the `shape-margin` and `clip-path` properties, and debugging basic shapes with
    Developer Tools.

- [Shapes from box values](/guides/Shapes/From_box_values)
  - Using `border-radius` curvatures and CSS box model values to create shapes.

- [Basic shapes with `shape-outside`](/guides/Shapes/Using_shape-outside)
  - Creating rectangles, circles, ellipses, and polygons with CSS shapes, the reference box, and the `shape-outside` property.

- [Shapes from images](/guides/Shapes/From_images)
  - Creating shapes from semi-transparent image files and CSS Gradients.

## Related concepts

[CSS motion path](/guides/Motion_path) module

- `offset`
- `offset-anchor`
- `offset-distance`
- `offset-path`
- `offset-position`
- `offset-rotate`
- `ray` function

[CSS masking](/guides/Masking) module

- `clip`
- `clip-path`
- {{SVGAttr("clip-rule")}}
- `mask`
- `mask-origin`
- `mask-position`

[CSS backgrounds and borders](/guides/Backgrounds_and_borders) module

- `border-radius` shorthand

[CSS box model](/guides/Box_model) module

- `box-edge` data type

## Specifications

{{Specifications}}

## See also

- [Shape generator](/guides/Shapes/Shape_generator)
- [CSS Shapes resources](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS Shapes 101](https://alistapart.com/article/css-shapes-101/) via alistapart.com (2014)
- [Creating non-rectangular layouts with CSS Shapes](https://www.sarasoueidan.com/blog/css-shapes/) via sarasoueidan.com (2013)
- [How to use CSS Shapes in your web design](https://webdesign.tutsplus.com/how-to-use-css-shapes-in-your-web-design--cms-27498t) via tutsplus.com (2016)
- [Edit CSS shapes with the shape path editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) via mozilla.org (2018) ([Video](https://www.youtube.com/watch?v=u9bDe3Bw0sA))
