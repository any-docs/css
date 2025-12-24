---
title: CSS paged media
short-title: Paged media
slug: Web/CSS/Guides/Paged_media
page-type: css-module
spec-urls: https://drafts.csswg.org/css-page/
sidebar: cssref
---

The **CSS paged media** module defines the properties that control the presentation of content for print or any other media that splits content into discrete pages. It allows you to set page breaks, control printable areas, and style left and right pages differently.

The CSS paged media module specifies how pages are generated and laid out to hold fragmented content in a paged presentation, including content that is printed or represented as a print preview. The module defines functionality for controlling page margins, size, orientation, and headers and footers. It extends [generated content](/guides/Generated_content) to provide functionality for generating page numbers and running headers and footers.

The process of paginating content into generated pages and controlling breaks inside elements is covered in the [CSS fragmentation module](/guides/Fragmentation).

## Reference

### Properties

- `page`

### At-rules and descriptors

- `@page`
  - `page-orientation` descriptor
  - `size` descriptor
  - [Margin descriptors](/reference/properties/margin)
- [Margin at-rules](/en-US/docs/Web/CSS/Reference/At-rules/@page#margin_at-rules)

The CSS paged media module also introduces the `bleeds` and `marks` descriptors of the `@page` at-rule. Currently, no browsers support these features.

### Pseudo-classes

- `:blank`
- `:first`
- `:left`
- `:right`

## Guides

- [Printing](/guides/Media_queries/Printing)
  - Tips and techniques for helping improve web content printer output.

## Related concepts

- [CSS fragmentation](/guides/Fragmentation) module
  - `break-after` property
  - `break-before` property
  - `break-inside` property
  - `orphans` property
  - `widows` property

## Specifications

{{Specifications}}

## See also

- [CSS fragmentation](/guides/Fragmentation) module
- [CSS media queries](/guides/Media_queries) module
