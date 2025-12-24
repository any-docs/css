---
title: Pseudo-elements
slug: Web/CSS/Reference/Selectors/Pseudo-elements
page-type: landing-page
spec-urls:
  - https://drafts.csswg.org/css-pseudo/
  - https://drafts.csswg.org/css-position-4/
  - https://drafts.csswg.org/css-shadow-parts/
  - https://w3c.github.io/webvtt/
sidebar: cssref
---

A CSS **pseudo-element** is a keyword added to a selector that lets you style a specific part of the selected element(s).

> [!NOTE]
> This page is an index of all pseudo-elements in CSS. The [CSS pseudo-elements](/guides/Pseudo-elements) page introduces the module that defines some, but not all, of these pseudo-elements.

## Syntax

```css
selector::pseudo-element {
  property: value;
}
```

For example, `::first-line` can be used to change the font of the first line of a paragraph.

```css
/* The first line of every <p> element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

Double colons (`::`) are used for pseudo-elements. This distinguishes pseudo-elements from [pseudo-classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) that use a single colon (`:`) in their notation. Note, browsers support single colon syntax for the original four pseudo-elements: `::before`, `::after`, `::first-line`, and `::first-letter`.

Pseudo-elements do not exist independently. The element of which a pseudo-element is a part is called its _originating element_. A pseudo-element must appear after all the other components in the [complex](/guides/Selectors/Selector_structure#complex_selector) or [compound](/guides/Selectors/Selector_structure#compound_selector) selector. The last element in the selector is the originating element of the pseudo-element. For example, you can select a paragraph's first line using `p::first-line` but not the first-line's children. So `p::first-line > *` is invalid.

A pseudo-element can be selected based on the current state of the originating element. For example, `p:hover::first-line` selects the first line (pseudo-element) of a paragraph when the paragraph itself is being hovered (pseudo-class).

> [!NOTE]
> When a [selector list](/guides/Selectors/Selector_structure#selector_list) contains an invalid selector, the entire style block is ignored.

## Typographic pseudo-elements

- `::first-line`
  - The first line-box of the originating element.
- `::first-letter`
  - The first letter, number, or symbol character on the first line of its originating element.
- `::cue`
  - The [WebVTT](/en-US/docs/Web/API/WebVTT_API) cues within a selected element.
    This can be used to [style captions and other cues](/en-US/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in media with VTT tracks.
    The [CSS pseudo-elements](/guides/Pseudo-elements) module also defines the `::postfix` and `::prefix` sub-pseudo elements. These are not yet supported by any browser.

## Highlight pseudo-elements

Selects document sections based on content and document status, enabling those areas to be styled differently to indicate that status to the user.

- `::selection`
  - The portion of a document that has been selected.
- `::target-text`
  - The document's target element. The target element is identified using the URL's fragment identifier.
- `::spelling-error`
  - A portion of text that the browser thinks is misspelled.
- `::grammar-error`
  - A portion of text that the browser thinks is grammatically incorrect.
- `::highlight()`
  - The elements in the [highlight registry](/en-US/docs/Web/API/CSS/highlights_static). It is used to create custom highlights.

## Tree-Abiding pseudo-elements

These pseudo-elements behave like regular elements, fitting seamlessly within the box model. They act as a child element that can be styled directly within the originating element hierarchy.

- `::before`
  - Creates a pseudo-element that is the first child of the selected element.
- `::after`
  - Creates a pseudo-element that is the last child of the selected element.
- `::column`
  - Each column fragment of a [multi-column layout](/guides/Multicol_layout).
- `::marker`
  - The automatically generated marker box of a list item.
- `::backdrop`
  - The backdrop of the originating element rendered in the [top layer](/en-US/docs/Glossary/Top_layer).
- `::scroll-button()`
  - Creates a button that can control the scrolling of the {{glossary("scroll container")}} to which it is applied.
- `::scroll-marker`
  - Creates a pseudo-element that is a scroll marker — a scroll target button for its originating element nested in a scroll-marker group.
- `::scroll-marker-group`
  - Generates a container before or after a scroll container to contain the `::scroll-marker` pseudo-elements generated on the element or its descendants.

## Element-backed pseudo-elements

These pseudo-elements are real elements that are not otherwise selectable.

- `::details-content`
  - The expandable/collapsible contents of a {{HTMLElement("details")}} element.
- `::part()`
  - Any element within a [shadow tree](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) that has a matching [`part`](/en-US/docs/Web/HTML/Reference/Global_attributes/part) attribute.
- `::slotted()`
  - Any element placed into a slot inside an HTML template.

## Form-related pseudo-elements

The pseudo-elements are related to form controls.

- `::checkmark`
  - Targets the checkmark placed inside the currently-selected `<option>` element of a [customizable select element](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select) to provide a visual indication of which one is selected.
- `::file-selector-button`
  - The button of an {{HTMLElement("input") }} of [`type="file"`](/en-US/docs/Web/HTML/Reference/Elements/input/file).
- `::picker()`
  - The picker part of an element, for example the drop-down picker of a [customizable select element](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- `::picker-icon`
  - The picker icon inside form controls that have an icon associated with them. In the case of a [customizable select element](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select), it selects the arrow that points down when the select is closed.
- `::placeholder`
  - The placeholder text in an input field.

## Alphabetical index

Pseudo-elements defined by a set of CSS specifications include the following:

A

- `::after`

B

- `::backdrop`
- `::before`

C

- `::column`
- `::checkmark`
- `::cue` (and `::cue()`)

D

- `::details-content`

F

- `::file-selector-button`
- `::first-letter`
- `::first-line`

G

- `::grammar-error`

H

- `::highlight()`

M

- `::marker`

P

- `::part()`
- `::picker()`
- `::picker-icon`
- `::placeholder`

S

- `::scroll-button()`
- `::scroll-marker`
- `::scroll-marker-group`
- `::selection`
- `::slotted()`
- `::spelling-error`

T

- `::target-text`

V

- `::view-transition`
- `::view-transition-image-pair()`
- `::view-transition-group()`
- `::view-transition-new()`
- `::view-transition-old()`

### Non-standard pseudo-elements

Non-standard vendor-prefixed pseudo-elements include:

#### `-moz-` prefix

- `::-moz-color-swatch`
- `::-moz-focus-inner`
- `::-moz-list-bullet`
- `::-moz-list-number`
- `::-moz-meter-bar`
- `::-moz-progress-bar`
- `::-moz-range-progress`
- `::-moz-range-thumb`
- `::-moz-range-track`

#### `-webkit-` prefix

- `::-webkit-inner-spin-button`
- `::-webkit-meter-bar`
- `::-webkit-meter-even-less-good-value`
- `::-webkit-meter-inner-element`
- `::-webkit-meter-optimum-value`
- `::-webkit-meter-suboptimum-value`
- `::-webkit-progress-bar`
- `::-webkit-progress-inner-element`
- `::-webkit-progress-value`
- `::-webkit-scrollbar`
- `::-webkit-search-cancel-button`
- `::-webkit-search-results-button`
- `::-webkit-slider-runnable-track`
- `::-webkit-slider-thumb`

## Nesting pseudo-elements

You can chain some pseudo-element selectors together to style pseudo-elements nested inside other pseudo-elements. The following nested pseudo-element combinations are supported:

- `::after`
  - `::after::marker`: Selects the `::marker` pseudo-element of an `::after` pseudo-element, when `::after` is styled as a list item, with `display: list-item`.
- `::before`
  - `::before::marker`: Selects the `::marker` pseudo-element of a `::before` pseudo-element, when `::before` is styled as a list item, with `display: list-item`.

Check out the individual pseudo-element reference pages for examples and browser compatibility information.

## Highlight pseudo-elements inheritance

[Highlight pseudo-elements](#highlight_pseudo-elements), such as `::selection`, `::target-text`, `::highlight()`, `::spelling-error`, and `::grammar-error`, follow a consistent inheritance model that differs from [regular element inheritance](/guides/Cascade/Inheritance).

When you apply styles to highlight pseudo-elements, they inherit from both:

1. Their parent elements (following normal inheritance).
2. The highlight pseudo-elements of their parent elements (following highlight inheritance).

This means that if you style both a parent element's highlight pseudo-element and a child element's highlight pseudo-element, the child's highlighted text will combine properties from both sources.

Here is a concrete example.

First, we have some HTML that includes two nested {{htmlelement("div")}} elements. Some of the included text content is contained directly inside the parent `<div>`, and some is nested inside the child `<div>`.

```html live-sample___highlight_inheritance
<div class="parent">
  Parent text
  <div class="child">Child text</div>
</div>
```

Next we include some CSS, which selects the parent and child `<div>` elements separately and gives them different `color` values, and selects the parent and child's selected text (`::selection`). This gives each `<div>` a different `background-color` and sets a different text `color` on the parent selection.

```css live-sample___highlight_inheritance
/* Style for the parent element */
.parent {
  color: blue;
}

/* Style for the parent's selected text */
.parent::selection {
  background-color: yellow;
  color: red;
}

/* Style for the child element */
.child {
  color: green;
}

/* Style for the child's selected text */
.child::selection {
  background-color: orange;
}
```

The example renders as follows:

Try selecting the text in both the parent and child elements. Notice that:

1. When you select the parent text, it uses the yellow background and red text color defined in `.parent::selection`.
2. When you select the child text, it uses:
   - The orange background from `.child::selection`.
   - The red text color inherited from the parent's `::selection` pseudo-element.

This demonstrates how the child's highlight pseudo-element inherits from both its parent element and the parent's highlight pseudo-element.

[CSS custom properties (variables)](/guides/Cascading_variables/Using_custom_properties) in highlight pseudo-elements inherit from their originating element (the element they're being applied to), not through the highlight inheritance chain. For example:

```css
:root {
  --selection-color: lightgreen;
}

::selection {
  color: var(--selection-color);
}

.blue {
  --selection-color: blue;
}
```

When using the universal selector with highlight pseudo-elements, it prevents highlight inheritance. For example:

```css
/* This prevents highlight inheritance */
*::selection {
  color: lightgreen;
}

/* Prefer this to allow inheritance */
:root::selection {
  color: lightgreen;
}
```

## Specifications

{{Specifications}}

## See also

- [CSS pseudo-elements](/guides/Pseudo-elements) module
- [Pseudo-classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [CSS selectors](/guides/Selectors) module
- [Learn: Pseudo-classes and pseudo-elements](/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Inheritance changes for CSS selection styling](https://developer.chrome.com/blog/selection-styling) - Detailed explanation of the highlight pseudo-elements inheritance model changes in Chrome 134
