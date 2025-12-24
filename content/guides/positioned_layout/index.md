---
title: CSS positioned layout
short-title: Positioned layout
slug: Web/CSS/Guides/Positioned_layout
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-position/
  - https://drafts.csswg.org/css-position-4/
sidebar: cssref
---

The **CSS positioned layout** module defines the coordinate-based positioning and offsetting schemes available in CSS and the properties used to position and stack elements on a web page. The module is best known for defining the basic positioning methods, including relative positioning, sticky positioning, absolute positioning, and fixed positioning. It also defines how positioned elements are painted and layered, clarifying stacking behavior and visual order.

The positioned layout module defines the physical, logical, and shorthand {{glossary("inset properties")}}. The logical properties enable developing with internationalization and responsiveness in mind.

Like all CSS modules, this module impacts and is impacted by other modules. This module describes how positioning interacts with other layout modules such as [CSS flexible box layout](/guides/Flexible_box_layout) and [CSS Grid layout](/guides/Grid_layout). Other modules, such as [CSS anchor positioning](/guides/Anchor_positioning), build upon this module to enable positioning elements relative to other elements and layers.

## Reference

### Properties

- `bottom`
- `inset`
- `inset-block`
- `inset-block-end`
- `inset-block-start`
- `inset-inline`
- `inset-inline-end`
- `inset-inline-start`
- `left`
- `overlay`
- `position`
- `right`
- `top`

### Selectors

- `::backdrop`

### Glossary terms and definitions

- [Block direction](/en-US/docs/Glossary/Flow_relative_values#block_direction)
- [Containing block](/guides/Display/Containing_block)
- {{glossary("Flow relative values")}}
- [Inline direction](/en-US/docs/Glossary/Flow_relative_values#inline_direction)
- {{glossary("Inset properties")}}
- [Positioning context](/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning#positioning_contexts)
- [Relative position](/reference/properties/position#relative_positioning)
- {{glossary("Stacking context")}}
- [Static positioning](/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning#static_positioning)
- {{glossary("Top layer")}}

## Guides

- [Understanding z-index](/guides/Positioned_layout/Understanding_z-index)
  - Presents the notion of stacking context and explains how z-ordering works, with several examples.
- [Stacking without the `z-index` property](/guides/Positioned_layout/Stacking_without_z-index)
  - The stacking rules that apply when `z-index` is not used.
- [Stacking floating elements](/guides/Positioned_layout/Stacking_floating_elements)
  - How floating elements are handled with stacking.
- [Using `z-index`](/guides/Positioned_layout/Using_z-index)
  - How to use `z-index` to change default stacking.
- [Stacking context](/guides/Positioned_layout/Stacking_context)
  - CSS stacking context, the CSS features that create new stacking contexts, and nested stacking contexts.
- [Learn: positioning](/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - The different position values and how to use them.

## Related concepts

- `float`
- `clear`
- `transition-property`
- `transition-behavior`
- [Popover API](/en-US/docs/Web/API/Popover_API)
- {{htmlelement("dialog")}} element

- [CSS anchor positioning](/guides/Anchor_positioning) module
  - `position-anchor`
  - `position-area`
  - `position-try-fallbacks`
  - `position-try-order`
  - `position-try` shorthand
  - `position-visibility`

- [CSS transforms](/guides/Transforms) module
  - `transform`
  - `transform-origin`
  - `translate`

## Specifications

{{Specifications}}

## See also

- Other CSS `*-position` properties:
  - `background-position`
  - `background-position`
  - `background-position`
  - `font-synthesis-position`
  - `font-variant-position`
  - `list-style-position`
  - `mask-position`
  - `object-position`
  - `offset-position`
  - `ruby-position`
  - `text-emphasis-position`
  - `text-underline-position`
- Position-related [data types](/reference/values/Data_types)
  - `baseline-position`
  - `content-position`
  - `overflow-position`
  - `self-position`
- [CSS Scroll Snap](/guides/Scroll_snap) module
  - {{glossary("Snap positions")}}
