---
title: CSS backgrounds and borders
short-title: Backgrounds and borders
slug: Web/CSS/Guides/Backgrounds_and_borders
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-backgrounds/
  - https://drafts.csswg.org/css-backgrounds-4/
sidebar: cssref
---

The **CSS backgrounds and borders** module provides properties for adding backgrounds, borders, rounded corners, and box shadows to elements.

You can add different types of border styles, including borders made of images of any image type, from raster images to CSS gradients. Borders can be square or rounded, and a different radius can be set for each corner. Elements can be rounded whether or not they have a visible border.

Box shadows include inset and outset shadow, single or multiple shadows, and solid or allowed to fade to transparent. An outer box-shadow casts a shadow as if the border-box of the element were opaque. An inner box-shadow casts a shadow as if everything outside the padding edge were opaque. The shadow can be solid or include a spread distance with the shadow color transitioning to transparent.

The properties in this module also let you define whether cells inside a {{HTMLElement("table")}} should have shared or separate borders.

## Reference

### Properties

- `background-attachment`
- `background-clip`
- `background-color`
- `background-image`
- `background-origin`
- `background-position`
- `background-repeat-x`
- `background-repeat-y`
- `background-repeat` shorthand
- `background-size`
- `background` shorthand
- `background-position-x`
- `background-position-y`
- `border-bottom-color`
- `border-bottom-style`
- `border-bottom-width`
- `border-bottom` shorthand
- `border-left-color`
- `border-left-style`
- `border-left-width`
- `border-left` shorthand
- `border-right-color`
- `border-right-style`
- `border-right-width`
- `border-right` shorthand
- `border-top-color`
- `border-top-style`
- `border-top-width`
- `border-top` shorthand
- `border-color` shorthand
- `border-style` shorthand
- `border-width` shorthand
- `border` shorthand
- `border-bottom-left-radius`
- `border-bottom-right-radius`
- `border-top-left-radius`
- `border-top-right-radius`
- `border-radius` shorthand
- `border-image-outset`
- `border-image-repeat`
- `border-image-slice`
- `border-image-source`
- `border-image-width`
- `border-image` shorthand
- `box-shadow`

The CSS backgrounds module level 4 also introduces the `background-position-block`, `background-position-inline`, `background-repeat-block`, `background-repeat-inline`, and `background-tbd` properties. Currently, no browsers support these features.

### Data types

- `line-style` enumerated type

## Guides

- [Using multiple backgrounds](/guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - Setting one or more backgrounds on an element.
- [Resizing background images](/guides/Backgrounds_and_borders/Resizing_background_images)
  - Changing the size and repeating behavior of background images.
- [Scaling SVG backgrounds](/guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
  - How SVG aspect ratio, SVG dimension values, and the CSS `background-size` property impact the scaling of SVG background images.
- [Using CSS gradients](/guides/Images/Using_gradients)
  - Creating CSS gradients and using them as background images.
- [Learn CSS: background and borders](/en-US/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - Learn how to implement decorative images using CSS background images.
- [Learn CSS: the box model](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - Learn how borders and other box model properties impact the CSS box model.

## Related concepts

- `border-block-end-color`
- `border-block-start-color`
- `border-inline-end-color`
- `border-inline-start-color`
- `border-block-end-style`
- `border-block-start-style`
- `border-inline-end-style`
- `border-inline-start-style`
- `border-block-end-width`
- `border-block-start-width`
- `border-inline-end-width`
- `border-inline-start-width`
- `border-start-start-radius`
- `border-start-end-radius`
- `border-end-start-radius`
- `border-end-end-radius`
- `box-sizing`
- `box-decoration-break`
- `text-shadow`
- `&lt;url&gt;` data type
- `url` data type
- `image` data type
- `position` data type
- [`currentColor`](/reference/values/color_value#currentcolor_keyword) keyword

## Examples

### Backgrounds, borders, and box shadows in action

This sample of borders, backgrounds, and box shadows consists of centered background images made of linear and radial gradients. A series of box shadows make the border appear to "pop". The element on the left has a border image set. The element on the right has a rounded dotted border.

```html hidden live-sample___backgrounds
<article>
  <div></div>
  <div></div>
</article>
```

```css hidden live-sample___backgrounds
article {
  display: flex;
  gap: 10px;
}
div {
  color: #58ade3;
  height: 320px;
  width: 240px;
  padding: 20px;
  margin: 10px;
  border: dotted 15px; /* defaults to `currentColor` */
  border-radius: 100px 0;
  background-image:
    radial-gradient(
      circle,
      transparent 60%,
      currentColor 60% 70%,
      transparent 70%
    ),
    linear-gradient(45deg, currentColor, white),
    linear-gradient(transparent, transparent);
  /* the third transparent background image was added to provide space for the background color to show through */
  background-color: currentColor;
  background-position: center;
  background-size:
    60px 60px,
    120px 120px;
  background-clip: content-box, content-box, padding-box;
  box-shadow:
    inset 5px 5px 5px rgb(0 0 0 / 0.4),
    inset -5px -5px 5px rgb(0 0 0 / 0.4),
    5px 5px 5px rgb(0 0 0 / 0.4),
    -5px -5px 5px rgb(0 0 0 / 0.4);
}
div:first-of-type {
  border-radius: 0;
  border-image-source: repeating-conic-gradient(
    from 3deg at 25% 25%,
    currentColor 0 3deg,
    transparent 3deg 6deg
  );
  border-image-slice: 30;
}
```

{{EmbedLiveSample("backgrounds", "", "450px")}}

The background images are defined with `background-image`. The images are centered with `background-position`. Different values of the `background-clip` property for the multiple background images are used to make the background images stay within the content box. The background color gets clipped to the padding box preventing the background from appearing through the transparent sections for the `border-image` and the `dotted` `border`. The rounded corners in the element on the right are created using the `border-radius` property. A single `box-shadow` declaration is used to set all the shadows, both inset and outset.

Click "Play" in the example above to see or edit the code for the animation in the MDN Playground.

## Specifications

{{Specifications}}

## See also

- `filter`
- `backdrop-filter`
- [`drop-shadow()`](/reference/values/filter-function/drop-shadow) filter function
- [Applying color to HTML elements using CSS](/guides/Colors/Applying_color)
- Tools:
  - [Border-image generator](/guides/Backgrounds_and_borders/Border-image_generator)
  - [Border-radius generator](/guides/Backgrounds_and_borders/Border-radius_generator)
  - [Box-shadow generator](/guides/Backgrounds_and_borders/Box-shadow_generator)
