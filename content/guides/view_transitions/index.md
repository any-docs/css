---
title: CSS view transitions
short-title: View transitions
slug: Web/CSS/Guides/View_transitions
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-view-transitions-1/
  - https://drafts.csswg.org/css-view-transitions-2/
sidebar: cssref
---

The **CSS view transitions** module defines the behavior of the [View Transition API](/en-US/docs/Web/API/View_Transition_API), which allows developers to create animated transitions between different states within a document and across documents. This module also defines the CSS properties and pseudo-elements for styling these transitions.

## Reference

### Properties

- `view-transition-class`
- `view-transition-name`

### At-rules and descriptors

- `@view-transition`
  - [`navigation`](/en-US/docs/Web/CSS/Reference/At-rules/@view-transition#navigation) descriptor

### Selectors and pseudo-elements

- `:active-view-transition`
- `:active-view-transition-type()`
- `::view-transition`
- `::view-transition-image-pair()`
- `::view-transition-group()`
- `::view-transition-new()`
- `::view-transition-old()`

### Interfaces

- `CSSViewTransitionRule`
- `ViewTransition`
  - `ViewTransition.skipTransition()` method
  - `ViewTransition.updateCallbackDone`
  - `ViewTransition.ready`
  - `ViewTransition.finished`
- `Document.startViewTransition()` method

## Guides

- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using)
  - Explains how to create view transitions and customize transition animations, including manipulating active view transitions.

## Related concepts

- `pagereveal` event
- `pageswap` event
- `Document.visibilityState`

- [CSS animations](/guides/Animations) module
  - `animation`
  - `@keyframes`
  - `CSSKeyframesRule`
  - `CSSStyleRule`
  - [Web animations API](/en-US/docs/Web/API/Web_Animations_API)

- [CSS transforms](/guides/Transforms) module
  - `transform`
  - `transform-function`

## Specifications

{{Specifications}}

## See also

- [Pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [Functional pseudo-classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes)
- [Learn: Pseudo-classes and pseudo-elements](/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
