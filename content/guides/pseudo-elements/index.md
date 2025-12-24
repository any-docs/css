---
title: CSS pseudo-elements
short-title: Pseudo-elements
slug: Web/CSS/Guides/Pseudo-elements
page-type: css-module
spec-urls: https://drafts.csswg.org/css-pseudo/
sidebar: cssref
---

The **CSS pseudo-element** module defines abstract elements that are not directly present in the document tree. These abstract elements, called pseudo-elements, represent portions of the render tree that can be selected and styled. Pseudo-elements are used to create abstractions about the document tree beyond those provided by the document tree.

> [!NOTE]
> This page introduces a CSS module. To find an exhaustive list of all pseudo-elements defined by CSS specifications, see the [pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) reference page.

Pseudo-elements are prefixed with a double colon (`::`). You add pseudo-elements to selectors (as in `p::first-line`) to target and style these faux elements.

Pseudo-elements enable targeting entities not included in HTML and sections of content that cannot be targeted otherwise without adding extra markup. Consider the placeholder of an {{HTMLelement("input")}} element. This is an abstract element and not a distinct node in the document tree. You can select this placeholder by using the `::placeholder` pseudo-element. As another example, the `::selection` pseudo-element matches the content currently highlighted by a user, allowing you to style what is matched as the user interacts with the content and changes the selection. Similarly, the `::first-line` pseudo-element targets the first line of an element, updating automatically if the character count of the first line changes, without having to query the element's line length.

## Reference

### Selectors

- `::after`
- `::before`
- `::file-selector-button`
- `::first-letter`
- `::first-line`
- `::grammar-error`
- `::highlight()`
- `::marker`
- `::placeholder`
- `::selection`
- `::spelling-error`
- `::target-text`

The specification also defines the `::details-content` and `::search-text` pseudo-elements and the `::postfix` and `::prefix` sub-pseudo elements. These are not yet supported by any browser. The `::highlight()` pseudo-element is included within this module, but most details are provided in the [CSS custom highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API).

### Interfaces

- `CSSPseudoElement` interface
  - `CSSPseudoElement.element` property
  - `CSSPseudoElement.type` property

### Terms

- {{Glossary("Pseudo-element")}} glossary term

## Guides

- [CSS pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - Alphabetical list of pseudo-elements defined by all the CSS specifications and WebVTT.

- [Learn: Pseudo-classes and pseudo-elements](/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - Part of CSS building blocks section on selectors. This article defines what a pseudo-element is and how it can be combined with pseudo-classes and be used for generating content with `::before` and `::after` pseudo-elements.

- [How to create fancy boxes using pseudo-elements](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)
  - Example of styling generated content using `::before` and `::after` pseudo-elements for visual effects.

## Related concepts

- `::backdrop`

- Web Video Text Tracks Format (WebVTT) cues:
  - `::cue`
  - `::cue()`

- [CSS multi-column layout](/guides/Multicol_layout) module
  - `::column`

- [CSS overflow](/guides/Overflow) module
  - `::scroll-button()`
  - `::scroll-marker`
  - `::scroll-marker-group`
  - `:target-current`

- [CSS scoping](/guides/Scoping) module
  - `:host`
  - `:host()`
  - `:host-context()`
  - `::slotted()`

- [CSS shadow parts](/guides/Shadow_parts) module
  - `::part`

- [CSS view transitions](/guides/View_transitions) module
  - `::view-transition` {{Experimental_Inline}}
  - `::view-transition-image-pair()` {{Experimental_Inline}}
  - `::view-transition-group()` {{Experimental_Inline}}
  - `::view-transition-new()` {{Experimental_Inline}}
  - `::view-transition-old()` {{Experimental_Inline}}

- [CSS selectors](/guides/Selectors)
  - [Attribute selectors](/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
  - [Combinators](/guides/Selectors/Selectors_and_combinators#combinators)
  - [Class selectors](/en-US/docs/Web/CSS/Reference/Selectors/Class_selectors)
  - [ID selectors](/en-US/docs/Web/CSS/Reference/Selectors/ID_selectors)
  - [Type selectors](/en-US/docs/Web/CSS/Reference/Selectors/Type_selectors)
  - [Pseudo-classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - [Universal selectors](/en-US/docs/Web/CSS/Reference/Selectors/Universal_selectors)

- [`placeholder`](/en-US/docs/Web/HTML/Reference/Elements/input#placeholder) attribute of the `<input>` element
- `:placeholder-shown` selector

- [CSS generated content](/guides/Generated_content)
  - `content` property
  - `quotes` property

- [Text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments)

- `AnimationEvent.pseudoElement` property
- `KeyframeEffect.pseudoElement` property
- `TransitionEvent.pseudoElement` property

## Specifications

{{Specifications}}

## See also

- [List of pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [Specificity](/guides/Cascade/Specificity)
- [CSS selectors](/guides/Selectors) module
- [CSS shadow-parts](/guides/Shadow_parts) module
- [CSS generated content](/guides/Generated_content) module
- [CSS positioned layout](/guides/Positioned_layout) module
- [CSS custom highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API)
