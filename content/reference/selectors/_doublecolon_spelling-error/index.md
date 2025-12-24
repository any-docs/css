---
title: ::spelling-error
slug: Web/CSS/Reference/Selectors/::spelling-error
page-type: css-pseudo-element
browser-compat: css.selectors.spelling-error
sidebar: cssref
---

The **`::spelling-error`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) represents a text segment which the {{glossary("user agent")}} has flagged as incorrectly spelled.

The `::spelling-error` pseudo-element follows a special inheritance model common to all highlight pseudo-elements. For more details on how this inheritance works, see the [Highlight pseudo-elements inheritance](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance) section.

## Allowable properties

Only a small subset of CSS properties can be used in a rule with `::spelling-error` in its selector:

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
::spelling-error {
  /* ... */
}
```

## Examples

### Basic document spell check

In this example, eventual supporting browsers should highlight any flagged spelling errors with the styles shown.

#### HTML

```html
<p contenteditable spellcheck="true">
  My friends are coegdfgfddffbgning to the party tonight.
</p>
```

#### CSS

```css
::spelling-error {
  text-decoration: wavy red underline;
}
```

#### Result

{{EmbedLiveSample('Basic_document_spell_check', '100%', 60)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `::grammar-error`
- `text-decoration-line`
