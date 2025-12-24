---
title: CSSOM view
slug: Web/CSS/Guides/CSSOM_view
page-type: css-module
spec-urls: https://drafts.csswg.org/cssom-view/
sidebar: cssref
---

The **CSSOM view** module lets you manipulate the visual view of a document, including getting the position of element layout boxes, obtaining the width or height of the viewport through script, and also scrolling an element.

## Reference

### Events

- `Window` events:
  - `resize`
- `VisualViewport` events:
  - `resize`
  - `scroll`
  - `scrollend`
- `Document` events
  - `scroll`
  - `scrollend`
- `Element` events
  - `scroll`
  - `scrollend`
- `MediaQueryList` events
  - `change`

### Glossary terms

- {{glossary("Viewport")}}
- {{glossary("Layout viewport")}}
- {{glossary("Visual viewport")}}

### API

For the JavaScript API defined by this module, see the [CSSOM view API](/en-US/docs/Web/API/CSSOM_view_API) documentation.

## Guides

- [Coordinate systems](/en-US/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - The coordinate systems used to specify a position in a display context such as a window on a monitor, a viewport on a mobile device, or a position on a sheet of paper when printing.
- [Viewport concepts](/guides/CSSOM_view/Viewport_concepts)
  - The concept of the viewport — what it is, its impact in terms of CSS, SVG, and mobile devices — and the difference between the visual viewport and the layout viewport.

## Related concepts

- `zoom`
- {{htmlelement("meta")}}

### Glossary terms

- {{glossary("CSSOM", "CSS object model (CSSOM)")}}
- {{glossary("CSS pixel")}}
- {{glossary("Scroll container")}}

## Specifications

{{Specifications}}

## See also

- [CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model) API
- [CSSOM view API](/en-US/docs/Web/API/CSSOM_view_API)
- [CSS viewport](/guides/Viewport) module
- [CSS overflow](/guides/Overflow) module
- [CSS overscroll behavior](/guides/Overscroll_behavior) module
- [CSS scroll snap](/guides/Scroll_snap) module
