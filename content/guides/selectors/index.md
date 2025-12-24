---
title: CSS selectors
short-title: Selectors
slug: Web/CSS/Guides/Selectors
page-type: css-module
spec-urls: https://drafts.csswg.org/selectors/
sidebar: cssref
---

The **CSS selectors** module defines the patterns to select elements to which a set of CSS rules are then applied along with their [specificity](/guides/Cascade/Specificity). The CSS selectors module provides us with more than 60 selectors and five combinators. [Other modules](#related_concepts) provide additional pseudo-class selectors and pseudo-elements.

> [!NOTE]
> This page introduces a CSS module. To find an exhaustive list of all selectors defined by CSS specifications, see the [selectors](/en-US/docs/Web/CSS/Reference/Selectors) reference page.

In CSS, selectors are patterns used to match, or select, the elements you want to style. Selectors are also used in JavaScript to enable selecting the DOM nodes to return as a [`NodeList`](/en-US/docs/Web/API/NodeList).

Selectors, whether used in CSS or JavaScript, enable targeting HTML elements based on their type, attributes, current states, and even position in the DOM. Combinators allow you to be more precise when selecting elements by enabling selecting elements based on their relationship to other elements.

## Reference

### Combinators and separators

- `+` ([Next-sibling combinator](/en-US/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator))
- `>` ([Child combinator](/en-US/docs/Web/CSS/Reference/Selectors/Child_combinator))
- `~` ([Subsequent sibling combinator](/en-US/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator))
- " " ([Descendant combinator](/en-US/docs/Web/CSS/Reference/Selectors/Descendant_combinator))
- `|` ([Namespace separator](/en-US/docs/Web/CSS/Reference/Selectors/Namespace_separator))
- `,` ([Selector list](/en-US/docs/Web/CSS/Reference/Selectors/Selector_list))

The CSS selectors module also introduces the [column combinator](/en-US/docs/Web/CSS/Reference/Selectors/Column_combinator) (`||`). Currently, no browsers support this feature.

### Selectors

- `:active`
- `:any-link`
- `:autofill`
- `:buffering`
- `:checked`
- `:default`
- `:defined`
- `:dir()`
- `:disabled`
- `:empty`
- `:enabled`
- `:first-child`
- `:first-of-type`
- `:focus`
- `:focus-visible`
- `:focus-within`
- `:fullscreen`
- `:future`
- `:has()`
- `:hover`
- `:in-range`
- `:indeterminate`
- `:interest-source`
- `:interest-target`
- `:invalid`
- `:is()`
- `:lang()`
- `:last-child`
- `:last-of-type`
- `:link`
- `:matches()` (obsolete legacy selector alias for {{CSSXref( ":is", ":is()")}})
- `:modal`
- `:muted`
- `:not()`
- `:nth-child()`
- `:nth-of-type()`
- `:nth-last-child()`
- `:nth-last-of-type()`
- `:only-child`
- `:only-of-type`
- `:open`
- `:optional`
- `:out-of-range`
- `:past`
- `:paused`
- `:picture-in-picture`
- `:placeholder-shown`
- `:playing`
- `:popover-open`
- `:read-only`
- `:read-write`
- `:required`
- `:root`
- `:scope`
- `:seeking`
- `:stalled`
- `:target`
- `:user-invalid`
- `:user-valid`
- `:valid`
- `:visited`
- `:volume-locked`
- `:where()`
- [`:-webkit-` pseudo-classes](/en-US/docs/Web/CSS/Reference/Webkit_extensions#pseudo-classes)
- [Attribute selectors](/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [Class selector](/en-US/docs/Web/CSS/Reference/Selectors/Class_selectors)
- [ID selectors](/en-US/docs/Web/CSS/Reference/Selectors/ID_selectors)
- [Type selectors](/en-US/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [Universal selectors](/en-US/docs/Web/CSS/Reference/Selectors/Universal_selectors)

The CSS selectors module also introduces the `:blank`, `:current`, and `:local-link` pseudo-classes. Currently, no browsers support these features.

## Terms

- {{glossary("Pseudo-class")}} glossary term
- [Functional pseudo-classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes)
- [Combinators](/guides/Selectors/Selectors_and_combinators#combinators)
- [Simple selector](/guides/Selectors/Selector_structure#simple_selector)
- [Compound selector](/guides/Selectors/Selector_structure#compound_selector)
- [Complex selector](/guides/Selectors/Selector_structure#complex_selector)
- [Relative selector](/guides/Selectors/Selector_structure#relative_selector)
- [Specificity](/guides/Cascade/Specificity)

## Guides

- [CSS selectors and combinators](/guides/Selectors/Selectors_and_combinators)
  - Overview of the different types of simple selectors and various combinators defined in the CSS selectors and the CSS pseudo modules.

- [CSS selector structure](/guides/Selectors/Selector_structure)
  - Explanation of the structure of CSS selectors and the terminologies introduced in the CSS selectors module, ranging from "simple selector" to "forgiving relative selector list".

- [Pseudo classes](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - Lists the pseudo-classes, selectors that allow the selection of elements based on state information that is not contained in the document tree, defined in the various CSS modules and HTML.

- [Using the `:target` pseudo-class in selectors](/guides/Selectors/Using_:target)
  - Learn how to use the `:target` pseudo-class to style the target element a URL's fragment identifier.

- [Privacy and the `:visited` selector](/guides/Selectors/Privacy_and_:visited)
  - Explores the style limitations set on the `:visited` class for user privacy.

- [CSS building blocks: CSS selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - Introduction to basic CSS selectors, including tutorials on [Type, class, and ID selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), [Attribute selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors), [Pseudo-classes and pseudo-elements](/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements), and [Combinators](/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators).

- [Learn: UI pseudo-classes](/en-US/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - Learn the different UI pseudo-classes available for styling forms in different states.

- [Selection and traversal on the DOM tree](/en-US/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
  - The selectors API enables using selectors in JavaScript to retrieve element nodes from the DOM.

## Related concepts

- `state()` pseudo-class
- [CSS nesting](/guides/Nesting) module
  - [`&` nesting selector](/en-US/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [CSS scoping](/guides/Scoping) module
  - `:host` pseudo-class
  - `:host()` pseudo-class
  - `:host-context()` pseudo-class
  - `:has-slotted` pseudo-class
  - `::slotted` pseudo-element

- [CSS overflow](/guides/Overflow) module
  - `::scroll-button()`
  - `::scroll-marker`
  - `::scroll-marker-group`
  - `:target-current`

- [CSS multi-column layout](/guides/Multicol_layout) module
  - `::column`

- [CSS paged media](/guides/Paged_media) module
  - `:left` pseudo-class
  - `:right` pseudo-class
  - `:first` pseudo-class
  - `:blank` pseudo-class

- [CSS pseudo-element module](/guides/Pseudo-elements) (representing entities not included in HTML)
  - `::after`
  - `::before`
  - `::file-selector-button`
  - `::first-letter`
  - `::first-line`
  - `::grammar-error`
  - `::marker`
  - `::placeholder`
  - `::selection`
  - `::spelling-error`
  - `::target-text`

- [CSS shadow parts module](/guides/Shadow_parts)
  - `::part` pseudo-element

- [CSS positioned layout module](/guides/Positioned_layout)
  - `::backdrop`

- Other [pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - `::cue`

- `@namespace` at-rule

- `!important`
- [Specificity](/guides/Cascade/Specificity)
- [Cascade](/guides/Cascade/Introduction)

- `Document.querySelector` method
- `Document.querySelectorAll` method
- `NodeList.forEach()` method

## Specifications

{{Specifications}}

## See also

- [CSS pseudo-element module](/guides/Pseudo-elements)
- [CSS cascading and inheritance module](/guides/Cascade)
- [CSS nesting module](/guides/Nesting)
- [Using shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
