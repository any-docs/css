---
title: initial
slug: Web/CSS/Reference/Values/initial
page-type: css-keyword
browser-compat: css.types.global_keywords.initial
sidebar: cssref
---

The **`initial`** [CSS](/en-US/docs/Web/CSS) keyword applies the [initial (or default) value](/guides/Cascade/Property_value_processing#initial_value) of a property to an element. It can be applied to any CSS property, including the CSS shorthand property `all`. With `all` set to `initial`, all CSS properties can be restored to their respective initial values in one go instead of restoring each one separately.

On [inherited properties](/guides/Cascade/Inheritance#inherited_properties), the initial value may be unexpected. You should consider using the `inherit`, `unset`, `revert`, or `revert-layer` keywords instead.

## Examples

### Using initial to reset color for an element

#### HTML

```html
<p>
  <span>This text is red.</span>
  <em>This text is in the initial color (typically black).</em>
  <span>This is red again.</span>
</p>
```

#### CSS

```css
p {
  color: red;
}

em {
  color: initial;
}
```

#### Result

{{EmbedLiveSample('Using_initial_to_reset_color_for_an_element')}}

With the `initial` keyword in this example, `color` value on the `em` element is restored to the initial value of [`color`](/reference/properties/color#formal_definition), as defined in the specification.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Use the `inherit` keyword to make an element's property the same as its parent.
- Use the `revert` keyword to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).
- Use the `revert-layer` keyword to reset a property to the value established in a previous cascade layer.
- Use the `unset` keyword to set a property to its inherited value if it inherits or to its initial value if not.
- The `all` property lets you reset all properties to their initial, inherited, reverted, or unset state at once.
