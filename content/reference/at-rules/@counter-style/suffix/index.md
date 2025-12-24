---
title: suffix
slug: Web/CSS/Reference/At-rules/@counter-style/suffix
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.suffix
sidebar: cssref
---

The **`suffix`** descriptor of the `@counter-style` rule specifies content that will be added to the end of the marker representation.

## Syntax

```css
/* <symbol> value: string, image, or identifier  */
suffix: "";
suffix: ") ";
suffix: url("bullet.png");
```

### Values

The **`suffix`** descriptor takes as its value a single `<symbol>`:

- `<symbol>`
  - Specifies a `<symbol>` that is appended to the marker representation. It may be a `&lt;string&gt;`, `image`, or `&lt;custom-ident&gt;`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a suffix for a counter

#### HTML

```html
<ul class="choices">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>None of the above</li>
</ul>
```

#### CSS

```css
@counter-style options {
  system: fixed;
  symbols: A B C D;
  suffix: ") ";
}

.choices {
  list-style: options;
}
```

#### Result

{{ EmbedLiveSample('Setting_a_suffix_for_a_counter')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other `@counter-style` descriptors: `system`, `symbols`, `additive-symbols`, `negative`, `prefix`, `range`, `pad`, `speak-as`, and `fallback`
- `list-style`, `list-style-image`, `list-style-position`
- `symbols()`: the functional notation for creating anonymous counter styles
- [CSS counter styles](/guides/Counter_styles) module
- [CSS lists and counters](/guides/Lists) module
