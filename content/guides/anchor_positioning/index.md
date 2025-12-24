---
title: CSS anchor positioning
source: mdn
---

# {{$frontmatter.title}}

The **CSS anchor positioning** module defines features that allow you to tether elements together. Certain elements are defined as **anchor elements**; **anchor-positioned elements** can then have their size and position set based on the size and location of the anchor elements to which they are bound.

In addition, the specification provides CSS-only mechanisms to:

- Specify a set of alternative positions for an anchored element; when the default rendering position causes it to overflow its containing block and/or be rendered offscreen, the browser will try rendering the anchored element in the alternative positions instead.
- Declare conditions under which anchor-positioned elements should be hidden, in situations where it is not appropriate to tether them to anchor elements.

## Reference

### Properties

- [anchor-name](/reference/properties/anchor-name)
- [position-anchor](/reference/properties/position-anchor)
- [position-area](/reference/properties/position-area)
- [position-try-fallbacks](/reference/properties/position-try-fallbacks)
- [position-try-order](/reference/properties/position-try-order)
- [position-try](/reference/properties/position-try) shorthand
- [position-visibility](/reference/properties/position-visibility)

The CSS anchor positioning module also introduces the `anchor-scope` property. Currently, no browsers support this feature.

### At-rules and descriptors

- [@position-try](/reference/at-rules/@position-try)

### Functions

- [`anchor()`](/reference/values/anchor)
- [`anchor-size()`](/reference/values/anchor-size)

### Data types and values

- [`anchor-center`](/guides/anchor_positioning/using#centering-on-the-anchor-using-anchor-center)
- [`<anchor-side>`](/reference/values/anchor#anchor-side)
- [`<anchor-size>`](/reference/values/anchor-size#anchor-size)
- [`<position-area>`](/reference/values/position-area_value)
- [`<try-size>`](/reference/properties/position-try-order#try-size)
- [`<try-tactic>`](/reference/properties/position-try-fallbacks#try-tactic)

### HTML attributes

- [`anchor`](/en-US/docs/Web/HTML/Reference/Global_attributes/anchor) <Badge type="info" text="Non-standard. Check cross-browser support before using." />

### Interfaces

- `CSSPositionTryDescriptors`
- `CSSPositionTryRule`
- `HTMLElement.anchorElement` <Badge type="info" text="Non-standard. Check cross-browser support before using." />

## Guides

- [Using CSS anchor positioning](/guides/Anchor_positioning/Using)
  - An introductory guide to fundamental anchor positioning concepts, including associating, positioning, and sizing elements relative to their anchor.

- [Fallback options and conditional hiding for overflow](/guides/Anchor_positioning/Try_options_hiding)
  - A guide to the mechanisms CSS anchor positioning provides to prevent anchor-positioned elements from overflowing their containing elements or the viewport, including position try fallback options and conditionally hiding elements.

## Related concepts

- [CSS logical properties and values](/guides/Logical_properties_and_values) module:
  - `inset-block-start`
  - `inset-block-end`
  - `inset-inline-start`
  - `inset-inline-end`
  - `inset-block`
  - `inset-inline`
  - `inset` shorthand
  - `inline-size`
  - `min-block-size`
  - `min-inline-size`
  - `block-size`
  - `max-block-size`
  - `max-inline-size`
  - `margin-block`
  - `margin-block-end`
  - `margin-block-start`
  - `margin-inline`
  - `margin-inline-end`
  - `margin-inline-start`
  - [Inset properties](/en-US/docs/Glossary/Inset_properties) glossary term
- [CSS positioned layout](/guides/Positioned_layout) module:
  - `top`
  - `left`
  - `bottom`
  - `right`
- [CSS box model](/guides/Box_model) module:
  - `width`
  - `height`
  - `min-width`
  - `min-height`
  - `max-width`
  - `max-height`
  - `margin`
  - `margin-bottom`
  - `margin-left`
  - `margin-right`
  - `margin-top`
- [CSS box alignment](/guides/Box_alignment) module:
  - `align-items`
  - `align-self`
  - `justify-items`
  - `justify-self`
  - `place-items`
  - `place-self`

## Specifications

{{Specifications}}

## See also

- [CSS scroll anchoring](/guides/Scroll_anchoring) module
- [Learn: CSS positioning](/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logical properties and values](/guides/Logical_properties_and_values) module
- [Learn: Sizing items in CSS](/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing)
