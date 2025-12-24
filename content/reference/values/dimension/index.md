---
title: <dimension>
slug: Web/CSS/Reference/Values/dimension
page-type: css-type
browser-compat: css.types.dimension
sidebar: cssref
---

The **`<dimension>`** [CSS](/en-US/docs/Web/CSS) [data type](/reference/values/Data_types) represents a `&lt;number&gt;` with a unit attached to it, for example `10px`.

CSS uses dimensions to specify distances (`&lt;length&gt;`), durations (`&lt;time&gt;`), frequencies (`&lt;frequency&gt;`), resolutions (`resolution`), and other quantities.

## Syntax

The syntax of `<dimension>` is a `&lt;number&gt;` immediately followed by a unit which is an identifier. Unit identifiers are case insensitive.

## Examples

### Valid dimensions

```plain example-good
12px      12 pixels
1rem      1 rem
1.2pt     1.2 points
2200ms    2200 milliseconds
5s        5 seconds
200hz     200 Hertz
200Hz     200 Hertz (values are case insensitive)
```

### Invalid dimensions

```plain example-bad
12 px       The unit must come immediately after the number.
12"px"      Units are identifiers and therefore unquoted.
3sec        The seconds unit is abbreviated "s" not "sec".
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS data types](/reference/values/Data_types)
- [Learn to style HTML using CSS](/en-US/docs/Learn_web_development/Core/Styling_basics)
- CSS distances (`&lt;length&gt;`), durations (`&lt;time&gt;`), frequencies (`&lt;frequency&gt;`), and resolutions (`resolution`)
