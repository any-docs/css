---
title: CSS scrollbars styling
short-title: Scrollbars styling
slug: Web/CSS/Guides/Scrollbars_styling
page-type: css-module
spec-urls: https://drafts.csswg.org/css-scrollbars/
sidebar: cssref
---

The **CSS scrollbars styling** module defines properties that you can use for visual styling of scrollbars. You can customize the width of the scrollbar as required. You can also customize the color of the scrollbar _track_, which is the background of the scrollbar, and the color of the scrollbar _thumb_, which is the draggable handle of the scrollbar.

## Scrollbar styling in action

This example defines a thin scrollbar with a red thumb and an orange track. To view the thumb, you will need to scroll the text. After the scrollbar is visible, hover over it to see the track.

```css hidden
.poem {
  width: 300px;
  height: 100px;
  border: 1px solid;
}
```

```css
.poem {
  overflow: scroll;
  scrollbar-color: red orange;
  scrollbar-width: thin;
}
```

```html hidden
<blockquote class="poem">
  <h3>A Small Needful Fact</h3>
  <pre>
Is that Eric Garner worked
for some time for the Parks and Rec.
Horticultural Department, which means,
perhaps, that with his very large hands,
perhaps, in all likelihood,
he put gently into the earth
some plants which, most likely,
some of them, in all likelihood,
continue to grow, continue
to do what such plants do, like house
and feed small and necessary creatures,
like being pleasant to touch and smell,
like converting sunlight
into food, like making it easier
for us to breathe.
</pre
  >
  <p>
    - <a href="https://onbeing.org/poetry/a-small-needful-fact/">Ross Gay</a>
  </p>
</blockquote>
```

{{EmbedLiveSample("Scrollbar_styling_in_action")}}

> [!NOTE]
> When customizing scrollbars, ensure that the thumb and track have enough contrast with the surrounding background. Also ensure that the scrollbar hit area is large enough for people who use touch input.

## Reference

### CSS properties

- `scrollbar-width`
- `scrollbar-color`

## Related concepts

- `overflow-block` CSS property
- `overflow-inline` CSS property
- `overflow-x` CSS property
- `overflow-y` CSS property
- `overflow` CSS shorthand property
- `overflow-clip-margin` CSS property
- `scrollbar-gutter` CSS property
- `scroll-behavior` CSS property
- `scroll-margin` CSS shorthand property
- `scroll-padding` CSS shorthand property
- `scroll-snap-align` CSS property
- `scroll-snap-stop` CSS property
- `scroll-snap-type` CSS property
- `::-webkit-scrollbar` pseudo-element
- {{glossary("scroll container")}} glossary term
- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA role

## Specifications

{{Specifications}}

## See also

- {{cssxref('scroll-timeline')}}, {{cssxref('scroll-timeline-axis')}}, {{cssxref('scroll-timeline-name')}}
- [CSS overflow](/guides/Overflow) module
- [CSS scroll snap](/guides/Scroll_snap) module
