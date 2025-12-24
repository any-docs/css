---
title: min-height
slug: Web/CSS/Reference/Properties/min-height
page-type: css-property
browser-compat: css.properties.min-height
sidebar: cssref
---

The **`min-height`** [CSS](/en-US/docs/Web/CSS) property sets the minimum height of an element. It prevents the [used value](/guides/Cascade/Property_value_processing#used_value) of the `height` property from becoming smaller than the value specified for `min-height`.

{{InteractiveExample("CSS Demo: min-height")}}

```css interactive-example-choice
min-height: 150px;
```

```css interactive-example-choice
min-height: 7em;
```

```css interactive-example-choice
min-height: 75%;
```

```css interactive-example-choice
min-height: 10px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the minimum height. <br />If there is
    more content than the minimum the box will grow to the height needed by the
    content.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: white;
}
```

The element's height is set to the value of `min-height` whenever `min-height` is larger than `max-height` or `height`.

## Syntax

```css
/* <length> value */
min-height: 3.5em;
min-height: anchor-size(height);
min-height: anchor-size(--my-anchor block, 200px);

/* <percentage> value */
min-height: 10%;

/* Keyword values */
min-height: max-content;
min-height: min-content;
min-height: fit-content;
min-height: fit-content(20em);
min-height: stretch;

/* Global values */
min-height: inherit;
min-height: initial;
min-height: revert;
min-height: revert-layer;
min-height: unset;
```

### Values

- `&lt;length&gt;`
  - Defines the `min-height` as an absolute value.
- `&lt;percentage&gt;`
  - Defines the `min-height` as a percentage of the containing block's height.
- `auto`
  - The browser will calculate and select a `min-height` for the specified element.
- `max-content`
  - The intrinsic preferred `min-height`.
- `min-content`
  - The intrinsic minimum `min-height`.
- `fit-content`
  - Use the available space, but not more than [max-content](/reference/values/max-content), i.e., `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/reference/values/fit-content_function)
  - Uses the `fit-content` formula with the available space replaced by the specified argument, i.e., `min(max-content, max(min-content, argument))`.
- `stretch`
  - Limits the minimum height of the element's [margin box](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) to the height of its [containing block](/guides/Display/Containing_block#identifying_the_containing_block). It attempts to make the margin box fill the available space in the containing block, so in a way behaving similar to `100%` but applying the resulting size to the margin box rather than the box determined by [box-sizing](/reference/properties/box-sizing).

    > [!NOTE]
    > To check aliases used by browsers for the `stretch` value and its implementation status, see the [Browser compatibility](#browser_compatibility) section.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting min-height

```css
table {
  min-height: 75%;
}

form {
  min-height: 0;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `max-height`
- `height`
- `min-inline-size`
- `min-block-size`
- `box-sizing`
- [Introduction to the CSS box model](/guides/Box_model/Introduction) guide
- [CSS box model](/guides/Box_model) module
