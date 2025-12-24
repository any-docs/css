---
title: ::grammar-error
slug: Web/CSS/Reference/Selectors/::grammar-error
page-type: css-pseudo-element
browser-compat: css.selectors.grammar-error
sidebar: cssref
---

The **`::grammar-error`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) represents a text segment which the {{glossary("user agent")}} has flagged as grammatically incorrect.

The `::grammar-error` pseudo-element follows a special inheritance model common to all highlight pseudo-elements. For more details on how this inheritance works, see the [Highlight pseudo-elements inheritance](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance) section.

## Allowable properties

Only a small subset of CSS properties can be used in a rule with `::grammar-error` in its selector:

- `color`
- `background-color`
- `cursor`
- `caret-color`
- `outline` and its longhands
- `text-decoration` and its associated properties
- `text-emphasis-color`
- `text-shadow`

## Syntax

```css
::grammar-error {
  /* ... */
}
```

## Examples

### Basic document grammar check

In this example, eventual supporting browsers should highlight any flagged grammatical errors with the styles shown.

#### HTML

```html
<p contenteditable spellcheck="true">
  My friends is coming to the party tonight.
</p>
```

#### CSS

```css
::grammar-error {
  text-decoration: underline red;
  color: red;
}
```

#### Result

{{EmbedLiveSample('Basic_document_grammar_check', '100%', 60)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `::spelling-error`
- `text-decoration-line`
