---
title: ::marker
slug: Web/CSS/Reference/Selectors/::marker
page-type: css-pseudo-element
browser-compat: css.selectors.marker
sidebar: cssref
---

The **`::marker`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) selects the marker box of a list item, which typically contains a bullet or number. It works on any element or pseudo-element set to [`display: list-item`](/reference/properties/display), such as the {{HTMLElement("li")}} and {{HTMLElement("summary")}} elements.

{{InteractiveExample("CSS Demo: ::marker", "tabbed-shorter")}}

```css interactive-example
li::marker {
  content: "✝ ";
  font-size: 1.2em;
}
```

```html interactive-example
<p>Group known as Mercury Seven:</p>
<ul>
  <li>Malcolm Scott Carpenter</li>
  <li>Leroy Gordon (Gordo) Cooper Jr.</li>
  <li>John Herschel Glenn Jr.</li>
  <li>Virgil Ivan (Gus) Grissom</li>
  <li>Walter Marty (Wally) Schirra Jr.</li>
  <li>Alan Bartlett Shepard Jr.</li>
  <li>Donald Kent (Deke) Slayton</li>
</ul>
```

## Allowable properties

The `::marker` pseudo-element supports a limited number of CSS properties, including:

- All [animation](/guides/Animations#properties) and [transition](/guides/Transitions#properties) properties
- All [font properties](/guides/Fonts)
- `color`
- `content`
- `counter-increment`, `counter-reset`, and `counter-set`
- `quotes`
- `text-combine-upright`, `unicode-bidi`, and `direction`
- `white-space`

> [!NOTE]
> The specification states that additional CSS properties may be supported in the future.

## Syntax

```css
::marker {
  /* ... */
}
```

## Examples

### HTML

```html
<ul>
  <li>Peaches</li>
  <li>Apples</li>
  <li>Plums</li>
</ul>
```

### CSS

```css
ul li::marker {
  color: red;
  font-size: 1.5em;
}
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML elements that have marker boxes by default: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}
- [CSS generated content](/guides/Generated_content) module
- [CSS lists and counters](/guides/Lists) module
- [CSS counter styles](/guides/Counter_styles) module
