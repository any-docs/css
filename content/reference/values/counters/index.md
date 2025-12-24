---
title: counters()
slug: Web/CSS/Reference/Values/counters
page-type: css-function
browser-compat: css.types.counters
sidebar: cssref
---

The **`counters()`** [CSS](/en-US/docs/Web/CSS) [function](/reference/values/Functions) enables combining markers when nesting counters. The function returns a string that concatenates the current values of the named and nested counters, if any are present, with the string provided. The third, optional parameter enables defining the list style.

The `counters()` function is generally used within [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) through the `content` property, but theoretically, it can be used wherever a `string` value is supported.

The `counters()` function has two forms: `counters(<name>, <string>)` and `counters(<name>, <string>, <style>)`. The generated text is the value of all counters with the given `<name>`, arranged from the outermost to the innermost, and separated by the specified `<string>`. The counters are rendered in the `<style>` indicated, defaulting to `decimal` if no `<style>` is specified.

{{InteractiveExample("CSS Demo: counters()", "tabbed-standard")}}

```css interactive-example
ol {
  counter-reset: index;
  list-style-type: none;
}

li::before {
  counter-increment: index;
  content: counters(index, ".", decimal) " ";
}
```

```html interactive-example
<ol>
  <li>Mars</li>
  <li>
    Saturn
    <ol>
      <li>Mimas</li>
      <li>Enceladus</li>
      <li>
        <ol>
          <li>Voyager</li>
          <li>Cassini</li>
        </ol>
      </li>
      <li>Tethys</li>
    </ol>
  </li>
  <li>
    Uranus
    <ol>
      <li>Titania</li>
    </ol>
  </li>
</ol>
```

## Syntax

```css
/* Basic usage  - style defaults to decimal */
counters(counter-name, '.');

/* changing the counter display */
counters(counter-name, '-', upper-roman)
```

A [counter](/guides/Counter_styles/Using_counters) has no visible effect by itself. The `counters()` function (and `counter()` function) is what makes it useful by returning developer-defined content.

### Values

The `counters()` function accepts two or three parameters. The first parameter is the `<counter-name>`. The second parameter is the concatenator `<string>`. The optional third parameter is the `<counter-style>`.

- `<counter-name>`
  - A `&lt;custom-ident&gt;` identifying the counters, which is the same case-sensitive name used for the `counter-reset` and `counter-increment` properties. The name cannot start with two dashes and can't be `none`, `unset`, `initial`, or `inherit`. Alternatively, for inline, single-use counters, the `symbols` function can be used instead of a named counter in [browsers that support `symbols()`](/reference/values/symbols#browser_compatibility).
- `&lt;string&gt;`
  - Any number of text characters. Non-Latin characters must be encoded using their Unicode escape sequences: for example, `\000A9` represents the copyright symbol.
- `<counter-style>`
  - A counter style name or a [`symbols()`](/reference/values/symbols) function. The counter style name can be a predefined style such as numeric, alphabetic, or symbolic, a complex longhand predefined style such as East Asian or Ethiopic, or another [predefined counter style](/guides/Counter_styles). If omitted, the counter-style defaults to decimal.

The return value is a string containing all the values of all the counters in the element's CSS counters set named `<counter-name>` in the counter style defined by `<counter-style>` (or decimal, if omitted). The return string is sorted in outermost-first to innermost-last order, joined by the `<string>` specified.

> [!NOTE]
> For information about non-concatenated counters, see the `counter()` function, which omits the `<string>` as a parameter.

## Formal syntax

{{CSSSyntax}}

## Examples

### Comparing default counter value to uppercase roman numerals

This example includes two `counters()` functions: one with `<counter-style>` set and the other defaulting to `decimal`.

#### HTML

```html
<ol>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
  <li>
    <ol>
      <li></li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::marker {
  content:
    counters(listCounter, ".", upper-roman) ") ";
}
li::before {
  content:
    counters(listCounter, ".") " == "
    counters(listCounter, ".", lower-roman);
}
```

#### Result

{{EmbedLiveSample("Comparing default counter value to uppercase roman numerals", "100%", 270)}}

### Comparing decimal-leading-zero counter value to lowercase letters

This example includes three `counters()` functions, each with different `<string>` and `<counter-style>` values.

#### HTML

```html
<ol>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
  <li>
    <ol>
      <li></li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::marker {
  content:
    counters(count, "-", decimal-leading-zero) ") ";
}
li::before {
  content:
    counters(count, "~", upper-alpha) " == "
    counters(count,  "*", lower-alpha);
}
```

#### Result

{{EmbedLiveSample("Comparing decimal-leading-zero counter value to lowercase letters", "100%", 270)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Counters](/guides/Counter_styles/Using_counters)
- `counter-set` property
- `counter-reset` property
- `counter-increment` property
- `@counter-style` at-rule
- CSS [`counter()`](/reference/values/counter) function
- `::marker` pseudo-element
- [CSS lists and counters](/guides/Lists) module
- [CSS counter styles](/guides/Counter_styles) module
- [CSS generated content](/guides/Generated_content) module
