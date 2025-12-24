---
title: CSS transitions
short-title: Transitions
slug: Web/CSS/Guides/Transitions
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-transitions-1/
  - https://drafts.csswg.org/css-transitions-2/
sidebar: cssref
---

The **CSS transitions** module specifies functionality for creating gradual transitions between different CSS property values. The behavior of these transitions can be controlled by specifying their easing function, duration, and other values.

Normally, when the value of a CSS property changes, the result of the change from the old value to the new value is immediate. The CSS transitions module enables controlling a progression from the old property state to the new state over a specified period of time. It also provides event handlers to allow code to be run in response to different stages of a transition being reached.

In certain cases, there is no originating "from" value for a transition. For example, if an element gets added to the DOM, the styles defined are for the "to" state. This module provides the `@starting-style` at-rule, which enables defining starting styles for such cases. The module also defines how discrete property values should be transitioned, such as transitioning the discretely animated `display` property from the `none` value to a displayed value.

## Reference

### Properties

- `transition`
- `transition-behavior`
- `transition-delay`
- `transition-duration`
- `transition-property`
- `transition-timing-function`

### At rules

- `@starting-style`

### Interfaces

- `CSSStartingStyleRule`
- `CSSTransition`
  - `transitionProperty` property
- `TransitionEvent`
  - `TransitionEvent()` constructor
  - `TransitionEvent.propertyName` property
  - `TransitionEvent.elapsedTime` property
  - `TransitionEvent.pseudoElement` property
  - `transitioncancel` event
  - `transitionend` event
  - `transitionrun` event
  - `transitionstart` event

## Guides

- [Using CSS transitions](/guides/Transitions/Using)
  - Step-by-step tutorial explaining how to create transitions using CSS. This article describes each relevant CSS property and explains how they interact with each other.
- [Animating `display`](/reference/properties/display#animating_display)
  - Transitioning to and from the `none` value of the discretely animated `display` property.
- [Transitioning a popover](/reference/properties/overlay#transitioning_a_popover) and [transitioning a `<dialog>`](/en-US/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements)
  - Examples of transitioning from `@starting-style` to final `:popover-open` and `:open` pseudo-class styles.

## Related concepts

- `interpolate-size` property
- `calc-size()` function
- {{Glossary("Intrinsic size")}} glossary term

- [CSS easing functions](/guides/Easing_functions) module:
  - `easing-function` data-type

- [CSS animations](/guides/Animations) module:
  - `animation` shorthand
  - `animation-delay`
  - `animation-direction`
  - `animation-duration`
  - `animation-fill-mode`
  - `animation-iteration-count`
  - `animation-name`
  - `animation-play-state`
  - `animation-timing-function`

- [CSS transforms](/guides/Transforms) module:
  - `transform`
  - `transform-box`
  - `transform-origin`
  - `transform-style`

- [CSS scroll snap](/guides/Scroll_snap) module:
  - `scroll-snap-type`
  - `scroll-padding`
  - `scroll-snap-align`
  - `scroll-margin`
  - `scroll-snap-stop`

## Specifications

{{Specifications}}

## See also

- `opacity`
- `visibility`
- `ViewTransition` interface
- `PageTransitionEvent` interface
