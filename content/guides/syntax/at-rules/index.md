---
title: At-rules
slug: Web/CSS/Guides/Syntax/At-rules
page-type: guide
spec-urls: https://drafts.csswg.org/css-syntax/
sidebar: cssref
---

**At-rules** are [CSS statements](/guides/Syntax/Introduction#css_statements) that instruct CSS how to behave. They begin with an at-sign, `@` (U+0040 COMMERCIAL AT), followed by an identifier. They include everything from the at-keyword up to the next semicolon, `;` (U+003B SEMICOLON), or the next [CSS block](/guides/Syntax/Introduction#css_declaration_blocks), whichever comes first.

At-rules are used to group and structure style rules and other at-rules, declare style information not directly associated with selected content, and manage syntactic constructs such as imports and namespaces keyword mappings.

## Syntax

The at-rule is defined in the [CSS syntax](/guides/Syntax) module, with different at-rules being defined in their respective modules. They generally take one of two forms depending on the specific rule and its purpose: statement at-rules and block at-rules, which can contain nested qualified rules, at-rules, or declarations.

### Statement at-rules

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

Statement at-rules end in a semicolon. There are several statement at-rules, designated by their identifiers, each with a different syntax:

- {{cssxref("@charset")}}
  - An algorithm (has the syntactic form of an at-rule, but isn't a definition) that determines the fallback character set used by the style sheet ([CSS Syntax](/guides/Syntax)).
- {{cssxref("@import")}}
  - Tells the CSS engine to include an external style sheet ([CSS cascading and inheritance](/guides/Cascade)).
- {{cssxref("@layer")}}
  - Defines the order of precedence in case of multiple cascade layers ([CSS cascading and inheritance](/guides/Cascade)). Also used as a [block at-rule](#layer_2) to define a layer's styles.
- {{cssxref("@namespace")}}
  - Defines a default namespace for a style sheet or a namespace prefix that a selector only matches if the namespace and other selector components match ([CSS namespaces](/guides/Namespaces)).

### Block at-rules

```css
@identifier (RULE) {
}
```

Block at-rules end in a `{}`-block that contain nested rules, other at-rules, or property or descriptor declarations.

- {{cssxref("@counter-style")}}
  - Define custom counter styles and extend predefined list styles ([CSS counter styles](/guides/Counter_styles)).
- {{cssxref("@container")}}
  - A conditional group rule that applies its content if the container meets the [`<container-condition>`](/en-US/docs/Web/CSS/Reference/At-rules/@container#container-condition)s ([CSS containment](/guides/Containment)).
- {{cssxref("@font-face")}}
  - Defines font resource locations, both local and external, along with the style characteristics for when those resources are used with a declared {{cssxref("font-family")}} ([CSS fonts](/guides/Fonts)).
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` and `@character-variant`)
  - Controls font display per font-family by defining font-specific alternates, or custom names, to feature indexes in {{cssxref("font-variant-alternates")}} in OpenType ([CSS fonts](/guides/Fonts)).
- {{cssxref("@keyframes")}} (and the `@-webkit-keyframes` alias)
  - Define a named animation by describing defining CSS styles for intermediate steps (or keyframes) in the animation sequence ([CSS animations](/guides/Animations)).
- {{cssxref("@layer")}}
  - Creates a named cascade layer with the CSS rules for that layer inside ([CSS cascading and inheritance](/guides/Cascade)). Also used as a [statement at-rule](#layer) to define the order of precedence in case of multiple cascade layers
- {{cssxref("@media")}}
  - A conditional group rule that applies its content if the device meets the criteria of the condition defined using a _media query_ ([CSS conditional rules](/guides/Conditional_rules)).
- {{cssxref("@page")}}
  - Specifies aspects of a page to be printed, such as its dimensions, orientation, and margins ([CSS paged media](/guides/Paged_media)).
- {{cssxref("@position-try")}}
  - Defines custom position options which can be used to define fallback positioning and alignment options for anchor-positioned elements ([CSS anchor positioning](/guides/Anchor_positioning)).
- {{cssxref("@property")}}
  - Defines a [CSS custom property](/guides/Cascading_variables/Using_custom_properties), allowing for property type checking and constraining, setting default values, and defining whether a custom property can inherit values or not ([CSS custom properties for cascading variables](/guides/Cascading_variables)).
- {{cssxref("@scope")}}
  - Defines a scope in which to apply them to selected elements and the styles to apply to the elements in that scope ([CSS cascading and inheritance](/guides/Cascade)).
- {{cssxref("@starting-style")}}
  - Define the starting property values for an element to transition from when the element receives its first style update, such as when transitioning from `display: none` ([CSS transitions](/guides/Transitions)).
- {{cssxref("@supports")}}
  - A conditional group rule applies its content if the browser supports the CSS features of the given condition ([CSS conditional rules](/guides/Conditional_rules)).
- {{cssxref("@view-transition")}}
  - Opts the current document into a [view transition](/en-US/docs/Web/API/View_Transition_API), and the destination document as well in the case of cross-document navigation transitions.

## Specifications

{{Specifications}}

## See also

- [CSS at-rules](/en-US/docs/Web/CSS/Reference/At-rules)
- [CSS at-rule functions](/en-US/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [Nesting at-rules](/guides/Nesting/At-rules)
- [CSS statements](/guides/Syntax/Introduction#css_statements)
- [CSSRule](/en-US/docs/Web/API/CSSRule) interface
- [CSS conditional rules](/guides/Conditional_rules) module
- [CSS syntax](/guides/Syntax/Introduction) module
- [Specificity](/guides/Cascade/Specificity)
- [Inheritance](/guides/Cascade/Inheritance)
