---
title: prefix
slug: Web/CSS/Reference/At-rules/@counter-style/prefix
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.prefix
sidebar: cssref
---

The {{cssxref('@counter-style')}} rule's **`prefix`** descriptor specifies content that will be added to the beginning of the counter's marker representation.

When the counter value is negative, the `prefix` comes before the negative sign and any other `<symbol>`s added by the `negative` descriptor.

## Syntax

```css
/* <symbol> value: string, image, or identifier */
prefix: "»";
prefix: "Page ";
prefix: url("bullet.png");
```

### Values

The **`prefix`** descriptor takes as its value a single `<symbol>`:

- `<symbol>`
  - Specifies a `<symbol>` — a `&lt;string&gt;`, `image`, or `&lt;custom-ident&gt;` — that is prepended to the marker representation.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Adding a prefix to a counter

In this example, each counter number is prefixed by "Book " (with a space) and followed by a colon (`:`). The colon is added with the `suffix` descriptor.

#### HTML

```html
<ol class="books">
  <li>Flamer, by Mike Curato</li>
  <li>Gender Queer: A Memoir, by Maia Kobabe</li>
  <li>Tricks, by Ellen Hopkins</li>
  <li>The Handmaid's Tale: The Graphic Novel, by Margaret Atwood</li>
  <li>Crank, by Ellen Hopkins</li>
</ol>
```

#### CSS

```css
@counter-style books {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: "Book ";
  suffix: ": ";
}

.books {
  list-style: books;
  padding-left: 15ch;
}
```

#### Result

{{ EmbedLiveSample('Adding_a_prefix_to_a_counter') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other `@counter-style` descriptors: `system`, `symbols`, `additive-symbols`, `negative`, `suffix`, `range`, `pad`, `speak-as`, and `fallback`
- `list-style`, `list-style-image`, `list-style-position`
- `symbols()`: the functional notation for creating anonymous counter styles
- [CSS counter styles](/guides/Counter_styles) module
- [CSS lists and counters](/guides/Lists) module
