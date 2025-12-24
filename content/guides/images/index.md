---
title: CSS images
short-title: Images
slug: Web/CSS/Guides/Images
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-images/
  - https://drafts.csswg.org/css-images-4/
  - https://drafts.csswg.org/css-images-5/
sidebar: cssref
---

The **CSS images** module defines the types of images that can be used (the `image` type, containing URLs, gradients and other types of images), how to resize them and how they, and other replaced content, interact with the different layout models.

## Reference

### Properties

- `image-orientation`
- `image-rendering`
- `object-fit`
- `object-position`
- `object-view-box`

The CSS images module also defines the `image-resolution` property. Currently, no browsers support this feature.

### Functions

- `linear-gradient()`
- `radial-gradient()`
- `repeating-linear-gradient()`
- `repeating-radial-gradient()`
- `conic-gradient()`
- `repeating-conic-gradient()`
- `cross-fade()`
- `element()`
- `image-set()`

The CSS images module also defines the `image()` function. Currently, no browsers support this feature.

### Data types

- `gradient`
- `image`

## Guides

- [Using CSS gradients](/guides/Images/Using_gradients)
  - Presents a specific type of CSS images, _gradients_, and how to create and use these.

- [Implementing image sprites in CSS](/guides/Images/Implementing_image_sprites)
  - Describes the common technique grouping several images in one single document to save download requests and speed up the availability of a page.

- [Styling replaced elements](/guides/Images/Replaced_element_properties)
  - Introduces the properties that only apply to _replaced elements_.

- [Understanding aspect ratios](/guides/Box_sizing/Aspect_ratios)
  - Learn about the `aspect-ratio` property, discuss aspect ratios for replaced and non-replaced elements, and examine some common aspect ratio use cases.

- [Using the CSS `object-view-box` property](/guides/Images/Using_object-view-box)
  - Learn the CSS `object-view-box` property, including how to zoom in, zoom out, and pan across images.

## Related concepts

- `&lt;url&gt;`
- `url()`
- [`<basic-shape-rect>`](/reference/values/basic-shape#syntax_for_rectangles_basic-shape-rect)

## Specifications

{{Specifications}}

## See also

- [CSS filter effects](/guides/Filter_effects) module
- [CSS compositing and blending](/guides/Compositing_and_blending) module
- [CSS colors](/guides/Colors) module
- [CSS values and units](/guides/Values_and_units) module
