---
title: :target-current
slug: Web/CSS/Reference/Selectors/:target-current
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.target-current
sidebar: cssref
---

{{SeeCompatTable}}

The **`:target-current`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) selects the **active** scroll marker — the scroll marker of a `scroll-marker-group` that is currently scrolled to. This [selector](/guides/Selectors) can be used to style the active navigation position within a scroll marker group.

> [!NOTE]
> The `:target-current` pseudo-class is only valid on `::scroll-marker` pseudo-elements and elements that have been designated as scroll markers using the `scroll-target-group` property.

## Syntax

```css
:target-current {
  /* ... */
}
```

## Examples

See [Creating CSS carousels](/guides/Overflow/Carousels) and `::scroll-marker` for complete examples that use the `:target-current` pseudo-class.

### Basic usage

```css
::scroll-marker {
  background-color: white;
}

::scroll-marker:target-current {
  background-color: black;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `scroll-marker-group`
- `scroll-target-group`
- `:target-before`, `:target-after`
- `::scroll-marker`
- `::scroll-marker-group`
- [Creating CSS carousels](/guides/Overflow/Carousels)
- [CSS overflow](/guides/Overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) via chrome.dev (2025)
