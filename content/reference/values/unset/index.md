---
title: unset
slug: Web/CSS/Reference/Values/unset
page-type: css-keyword
browser-compat: css.types.global_keywords.unset
sidebar: cssref
---

The **`unset`** [CSS](/en-US/docs/Web/CSS) keyword resets a property to its inherited value if the property naturally inherits from its parent, and to its [initial value](/guides/Cascade/Property_value_processing#initial_value) if not. In other words, it behaves like the `inherit` keyword in the first case, when the property is an [inherited property](/guides/Cascade/Inheritance#inherited_properties), and like the `initial` keyword in the second case, when the property is a [non-inherited property](/guides/Cascade/Inheritance#non-inherited_properties).

**`unset`** can be applied to any CSS property, including the CSS shorthand property `all`.

## Examples

### Color

[`color`](/reference/properties/color#formal_definition) is an inherited property.

#### HTML

```html
<p>This text is red.</p>
<div class="foo">
  <p>This text is also red.</p>
</div>
<div class="bar">
  <p>This text is green (default inherited value).</p>
</div>
```

#### CSS

```css
.foo {
  color: blue;
}

.bar {
  color: green;
}

p {
  color: red;
}

.bar p {
  color: unset;
}
```

#### Result

{{ EmbedLiveSample('Color') }}

### Border

[`border`](/reference/properties/border#formal_definition) is a non-inherited property.

#### HTML

```html
<p>This text has a red border.</p>
<div>
  <p>This text has a red border.</p>
</div>
<div class="bar">
  <p>This text has a black border (initial default, not inherited).</p>
</div>
```

#### CSS

```css
div {
  border: 1px solid green;
}

p {
  border: 1px solid red;
}

.bar p {
  border-color: unset;
}
```

#### Result

{{ EmbedLiveSample('Border', 'auto', 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Use the `initial` keyword to set a property to its initial value.
- Use the `inherit` keyword to make an element's property the same as its parent.
- Use the `revert` keyword to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).
- Use the `revert-layer` keyword to reset a property to the value established in a previous cascade layer.
- The `all` property lets you reset all properties to their initial, inherited, reverted, or unset state at once.
