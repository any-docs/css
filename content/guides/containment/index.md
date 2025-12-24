---
title: CSS containment
short-title: Containment
slug: Web/CSS/Guides/Containment
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-contain-2/
  - https://drafts.csswg.org/css-contain-3/
sidebar: cssref
---

The **CSS containment** module defines containment and container queries.

Containment enables the isolation of page subtrees from the rest of the DOM. The browser can then improve performance by optimizing the rendering of these independent parts.

Container queries are similar to dimension [media queries](/guides/Media_queries), except that the queries are based on the dimensions of a specific container element defined as a _containment context_, rather than on the dimensions of the viewport. Container queries enable querying a container's size, properties, and property values to conditionally apply CSS styles. When applying these conditional styles, you can use container query length units, which specify lengths relative to the dimensions of the query container. Additional properties are defined to enable establishing a specific element as a query container and giving it a specific name.

## Reference

### Properties

- `contain`
- `content-visibility`

### Events

- `contentvisibilityautostatechange`

### Interfaces

- `ContentVisibilityAutoStateChangeEvent`
  - `skipped` property
- `CSSContainerRule`
  - `CSSContainerRule.containerName`
  - `CSSContainerRule.containerQuery`

## Guides

- [CSS container queries](/guides/Containment/Container_queries)
  - A guide to using container queries with `@container`, including naming containment contexts.

- [Using CSS containment](/guides/Containment/Using)
  - Describes the basic aims of CSS containment and how to leverage `contain` and `content-visibility` for a better user experience.

- [Using container size and style queries](/guides/Containment/Container_size_and_style_queries)
  - A guide to writing container size and style queries with `@container`, including style queries for custom properties, query syntax and names, and nesting container queries.

## Related concepts

- [Layout and the containing block](/guides/Display/Containing_block)
- [Block formatting context](/guides/Display/Block_formatting_context)

- [CSS conditional rules](/guides/Conditional_rules) module
  - `@container` at-rule
  - `container` property
  - `container-name` property
  - `container-type` property

- [CSS media queries](/guides/Media_queries) module
  - `@media` at-rule
  - [CSS logical operators](/en-US/docs/Web/CSS/Reference/At-rules/@media#logical_operators) (`not`, `or`, and `and`)

- [CSS transitions](/guides/Transitions) module
  - `@starting-style` at-rule
  - `transition-behavior` property

- [CSS box sizing](/guides/Box_sizing) module
  - `aspect-ratio` property
  - `contain-intrinsic-size` shorthand property
  - `contain-intrinsic-inline-size` property
  - `contain-intrinsic-block-size` property
  - `contain-intrinsic-width` property
  - `contain-intrinsic-height` property

- [CSS counter styles](/guides/Counter_styles) module
  - [Using CSS counters](/guides/Counter_styles/Using_counters) guide

- [CSS nesting](/guides/Nesting) module
  - [CSS nesting at-rules](/guides/Nesting/At-rules) guide

## Specifications

{{Specifications}}

## See also

- [Using feature queries](/guides/Conditional_rules/Using_feature_queries)
- [Using CSS media queries](/guides/Media_queries/Using)
- [Understanding aspect ratios](/guides/Box_sizing/Aspect_ratios)
- `@supports` at-rule
