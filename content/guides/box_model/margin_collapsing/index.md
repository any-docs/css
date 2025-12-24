---
title: Mastering margin collapsing
short-title: Margin collapsing
slug: Web/CSS/Guides/Box_model/Margin_collapsing
page-type: guide
sidebar: cssref
---

The [top](/reference/properties/margin-top) and [bottom](/reference/properties/margin-bottom) margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as **margin collapsing**. Note that the margins of [floating](/reference/properties/float) and [absolutely positioned](/reference/properties/position#types_of_positioning) elements never collapse.

Margin collapsing occurs in three basic cases:

- Adjacent siblings
  - The margins of adjacent siblings are collapsed (except when the latter sibling needs to be [cleared](/reference/properties/clear) past floats).
- No content separating parent and descendants
  - The vertical margins between a parent block and its descendants can collapse. This happens when there is no separating content between them. Specifically, this occurs in two main cases:
    - The `margin-top` of a parent collapses with the `margin-top` of its first in-flow descendant unless the parent has a `border-top` , `padding-top` , contains any inline content (such as text), or has _[clearance](/reference/properties/clear)_ applied.
    - The `margin-bottom` of a parent collapses with the `margin-bottom` of its last in-flow descendant unless the parent has a defined `height` or `min-height`, a `border-bottom`, or `padding-bottom`.

    In both cases, creating a new [block formatting context](/guides/Display/Block_formatting_context) on the parent will also prevent its margins from collapsing with its children.

- Empty blocks
  - If there is no border, padding, inline content, `height`, or `min-height` to separate a block's `margin-top` from its `margin-bottom`, then its top and bottom margins collapse.

Some things to note:

- More complex margin collapsing (of more than two margins) occurs when the above cases are combined.
- These rules apply even to margins that are zero, so the margin of a descendant ends up outside its parent (according to the rules above) whether or not the parent's margin is zero.
- When negative margins are involved, the size of the collapsed margin is the sum of the largest positive margin and the smallest (most negative) negative margin.
- When all margins are negative, the size of the collapsed margin is the smallest (most negative) margin. This applies to both adjacent elements and nested elements.
- Collapsing margins is only relevant in the vertical direction.
- Margins don't collapse in a container with `display` set to `flex` or `grid`.

## Examples

### HTML

```html
<p>The bottom margin of this paragraph is collapsed …</p>
<p>
  … with the top margin of this paragraph, yielding a margin of
  <code>1.2rem</code> in between.
</p>

<div>
  This parent element contains two paragraphs!
  <p>
    This paragraph has a <code>.4rem</code> margin between it and the text
    above.
  </p>
  <p>
    My bottom margin collapses with my parent, yielding a bottom margin of
    <code>2rem</code>.
  </p>
</div>

<p>I am <code>2rem</code> below the element above.</p>
```

### CSS

```css
div {
  margin: 2rem 0;
  background: lavender;
}

p {
  margin: 0.4rem 0 1.2rem 0;
  background: yellow;
}
```

### Result

{{EmbedLiveSample('Examples', 'auto', 350)}}

## See also

- [CSS box model](/guides/Box_model) module
- [Introduction to the CSS box model](/guides/Box_model/Introduction)
- CSS key concepts:
  - [CSS syntax](/guides/Syntax/Introduction)
  - [At-rules](/guides/Syntax/At-rules)
  - [Comments](/guides/Syntax/Comments)
  - [Specificity](/guides/Cascade/Specificity)
  - [Inheritance](/guides/Cascade/Inheritance)
  - [Layout modes](/en-US/docs/Glossary/Layout_mode)
  - [Visual formatting model](/guides/Display/Visual_formatting_model)
  - Values:
    - [Initial values](/guides/Cascade/Property_value_processing#initial_value)
    - [Computed values](/guides/Cascade/Property_value_processing#computed_value)
    - [Used values](/guides/Cascade/Property_value_processing#used_value)
    - [Actual values](/guides/Cascade/Property_value_processing#actual_value)
  - [Value definition syntax](/guides/Values_and_units/Value_definition_syntax)
  - [Shorthand properties](/guides/Cascade/Shorthand_properties)
  - {{glossary("Replaced elements")}}
