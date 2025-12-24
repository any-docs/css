---
title: CSS ruby layout
short-title: Ruby layout
slug: Web/CSS/Guides/Ruby_layout
page-type: css-module
spec-urls: https://drafts.csswg.org/css-ruby/
sidebar: cssref
---

The **CSS ruby layout** module provides the rendering model and formatting controls related to the display of ruby annotations. Ruby annotations are a form of interlinear annotation, consisting of short runs of text alongside the base text. They are typically used in East Asian documents to indicate pronunciation or define meaning.

## Reference

### Properties

- `ruby-align`
- `ruby-position`

The CSS ruby layout module also introduces the `ruby-merge` and `ruby-overhang` properties. Currently, no browsers support these features.

### Display values

The CSS ruby layout module adds the following values to the `display` property:

- `ruby`
- `ruby-base`
- `ruby-text`
- `ruby-base-container`
- `ruby-text-container`

### Glossary terms

- {{Glossary("Ruby")}}

## Related concepts

- [CSS display](/guides/Display) module
  - `display`
  - `&lt;display-internal&gt;`
- [CSS text decoration](/guides/Text_decoration) module
  - `text-emphasis-color`
  - `text-emphasis-position`
  - `text-emphasis-style`
  - `text-emphasis` shorthand
- [HTML elements](/en-US/docs/Web/HTML/Reference/Elements)
  - {{HTMLElement("rb")}}
  - {{HTMLElement("rp")}}
  - {{HTMLElement("rt")}}
  - {{HTMLElement("rtc")}}
  - {{HTMLElement("ruby")}}

## Specifications

{{Specifications}}

## See also

- `direction`
- `unicode-bidi`
- `font-variant-east-asian`
- `:lang()`
- HTML [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute
