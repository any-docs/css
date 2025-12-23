---
title: CSS values and units
short-title: Values and units
slug: Web/CSS/Guides/Values_and_units
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-values-3/
  - https://drafts.csswg.org/css-values-4/
  - https://drafts.csswg.org/css-values-5/
sidebar: cssref
---

Every CSS declaration consists of a property/value pair. The value can take various forms depending on the property, such as a single integer, keyword, function, or a combination of different items; some values have units, while others do not. Every property also accepts the CSS-wide values. The CSS values and units module defines the data types — values and units — that CSS properties accept. This module also defines the CSS value definition syntax, or formal grammar, used to define the set of valid values for every CSS property and function.

> [!NOTE]
> This page introduces a CSS module. To find an exhaustive list of all values, types, and functions defined by CSS specifications, see the [values](/reference/values) reference page.

## Reference

### Properties

- {{cssxref("interpolate-size")}}

### Functions

- {{cssxref("abs()")}}
- {{cssxref("acos()")}}
- {{cssxref("asin()")}}
- {{cssxref("atan()")}}
- {{cssxref("atan2()")}}
- {{cssxref("attr()")}}
- {{cssxref("calc()")}}
- {{cssxref("calc-size()")}}
- {{cssxref("clamp()")}}
- {{cssxref("cos()")}}
- {{cssxref("exp()")}}
- {{cssxref("hypot()")}}
- {{cssxref("ident()")}}
- {{cssxref("if()")}}
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("progress()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sibling-count()")}}
- {{cssxref("sibling-index()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url_function", "url()")}}

The CSS values and units module also introduces the `calc-mix()`, `crossorigin()`, `first-valid()`, `integrity()`, `random()`, `random-item()`, `referrerpolicy()`, `src()`, `type()`, and `toggle()` functions. Currently, no browsers support these features.

### Data types

- {{cssxref("angle-percentage")}}
- {{cssxref("angle")}}
- [`<attr-name>`](/reference/values/attr#attr-name)
- [`<attr-type>`](/reference/values/attr#attr-type)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{glossary("NaN")}})
- [`<calc-size-basis>`](/reference/values/calc-size#calc-size-basis)
- {{cssxref("calc-sum")}}
- {{cssxref("custom-ident")}}
- {{cssxref("dashed-ident")}}
- {{cssxref("dimension")}}
- {{cssxref("easing-function")}}
- {{cssxref("ident")}}
- {{cssxref("integer")}}
- {{cssxref("length-percentage")}}
- {{cssxref("length")}}
- {{cssxref("number")}}
- {{cssxref("percentage")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("ratio")}}
- {{cssxref("resolution")}}
- [`<rounding-strategy>`](/reference/values/round#rounding-strategy) (`down`, `up`, `to-zero`)
- {{cssxref("string")}}
- [`<syntax>`](/guides/Syntax/Introduction)
- {{cssxref("time-percentage")}}
- {{cssxref("time")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- [`<url-modifier>`](/reference/values/url_function#url-modifier)

The CSS values and units module also introduces the {{cssxref("frequency")}} and {{cssxref("frequency-percentage")}} data types. Currently, no browsers support these features.

#### Units

- [`%` (percentage)](/reference/values/percentage)
- [`cap`](/reference/values/length#cap)
- [`ch`](/reference/values/length#ch)
- [`cm`](/reference/values/length#cm)
- [`deg`](/reference/values/angle#deg)
- [`dpcm`](/reference/values/resolution#dpcm)
- [`dpi`](/reference/values/resolution#dpi)
- [`dppx`](/reference/values/resolution#dppx)
- [`dvb`](/reference/values/length#vb)
- [`dvh`](/reference/values/length#vh)
- [`dvi`](/reference/values/length#vi)
- [`dvmax`](/reference/values/length#vmax)
- [`dvmin`](/reference/values/length#vmin)
- [`dvw`](/reference/values/length#vw)
- [`em`](/reference/values/length#em)
- [`ex`](/reference/values/length#ex)
- [`grad`](/reference/values/angle#grad)
- [`Hz`](/reference/values/frequency#hz)
- [`ic`](/reference/values/length#ic)
- [`in`](/reference/values/length#in)
- [`kHz`](/reference/values/frequency#khz)
- [`lh`](/reference/values/length#lh)
- [`lvb`](/reference/values/length#vb)
- [`lvh`](/reference/values/length#vh)
- [`lvi`](/reference/values/length#vi)
- [`lvmax`](/reference/values/length#vmax)
- [`lvmin`](/reference/values/length#vmin)
- [`lvw`](/reference/values/length#vw)
- [`mm`](/reference/values/length#mm)
- [`ms`](/reference/values/time#ms)
- [`pc`](/reference/values/length#pc)
- [`pt`](/reference/values/length#pt)
- [`px`](/reference/values/length#px)
- [`Q`](/reference/values/length#q)
- [`rad`](/reference/values/angle#rad)
- [`rcap`](/reference/values/length#rcap)
- [`rch`](/reference/values/length#rch)
- [`rem`](/reference/values/length#rem)
- [`rex`](/reference/values/length#rex)
- [`ric`](/reference/values/length#ric)
- [`rlh`](/reference/values/length#rlh)
- [`s`](/reference/values/time#s)
- [`svb`](/reference/values/length#vb)
- [`svh`](/reference/values/length#vh)
- [`svi`](/reference/values/length#vi)
- [`svmax`](/reference/values/length#vmax)
- [`svmin`](/reference/values/length#vmin)
- [`svw`](/reference/values/length#vw)
- [`turn`](/reference/values/angle#turn)
- [`vb`](/reference/values/length#vb)
- [`vh`](/reference/values/length#vh)
- [`vi`](/reference/values/length#vi)
- [`vmax`](/reference/values/length#vmax)
- [`vmin`](/reference/values/length#vmin)
- [`vw`](/reference/values/length#vw)
- [`x`](/reference/values/resolution#x)

[Flex units](/guides/Values_and_units/Numeric_data_types#flex_units) (`fr`) and [container units](/guides/Values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`) are defined in the [CSS grid layout](/guides/Grid_layout) and [CSS conditional rules](/guides/Conditional_rules) modules, respectively.

#### Unit categorizations

- [Absolute length units](/guides/Values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Angle units](/guides/Values_and_units/Numeric_data_types#angle_units) (`deg`, `grad`, `rad`, `turn`)
- [Default viewport units](/reference/values/length#default_viewport_units) (`vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Dynamic viewport units](/reference/values/length#dynamic_viewport_units) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Frequency units](/guides/Values_and_units/Numeric_data_types#frequency_units) (`Hz`, `kHz`)
- [Large viewport-percentage units](/reference/values/length#large_viewport_units) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Local font-relative length units](/guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`)
- [Physical units](/guides/Values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Relative length units](/guides/Values_and_units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Resolution units](/guides/Values_and_units/Numeric_data_types#resolution_units) (`dpcm`, `dpi` , `dppx`, `x`)
- [Root font-relative length units](/guides/Values_and_units/Numeric_data_types#root_font-relative_lengths) (`rcap`, `rch`, `rem`, `rex`, `ric`, `rlh`)
- [Small viewport-percentage unit](/reference/values/length#small_viewport_units) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Time units](/guides/Values_and_units/Numeric_data_types#time_units) (`ms`, `s`)
- [Viewport units](/guides/Values_and_units/Numeric_data_types#viewport_units) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Visual angle unit](/guides/Values_and_units/Numeric_data_types#absolute_length_units) (`px`)

### Key concepts

- {{glossary("Advance measure")}}
- [Bracketed range notation](/guides/Values_and_units/Value_definition_syntax#bracketed_range_notation_minmax)
- [Component value combinators](/guides/Values_and_units/Value_definition_syntax#component_value_combinators)
- [CSS-wide keywords](/reference/values/Data_types#css-wide_keywords)
- {{glossary("Device pixel")}}
- [Functional notation](/reference/values/Functions)
- {{glossary("Identifier")}}
- {{glossary("Interpolation")}}
- {{glossary("Keyword")}}
- [Math function](/guides/Values_and_units/Using_math_functions)
- [Numeric data types](/guides/Values_and_units/Numeric_data_types)
- {{glossary("Origin")}}
- {{glossary("Pixel")}}
- [Textual data types](/guides/Values_and_units/Textual_data_types)
- {{glossary("URL")}}
- [Value definition syntax](/guides/Values_and_units/Value_definition_syntax)

## Guides

- [CSS data types](/reference/values/Data_types)
  - Introduction to CSS data types that define typical values accepted by CSS properties and functions.

- [Numeric data types](/guides/Values_and_units/Numeric_data_types)
  - Overview of the numeric data types, including integers, numbers, percentages, and dimensions, along with relative and absolute dimensions, angles, and time units.

- [Textual data types](/guides/Values_and_units/Textual_data_types)
  - Overview of the textual data types, including pre-defined keyword values, global CSS keyword values, and URLs.

- [CSS value functions](/reference/values/Functions)
  - Overview of the CSS statements that invoke special data processing or calculations to return a CSS value for a CSS property.

- [Using CSS math functions](/guides/Values_and_units/Using_math_functions)
  - The CSS math functions that allow a property value to be written as a mathematical expression.

- [Value definition syntax](/guides/Values_and_units/Value_definition_syntax)
  - The formal grammar used to define the set of valid values for CSS properties and functions.

- [Using CSS typed arithmetic](/guides/Values_and_units/Using_typed_arithmetic)
  - An explanation of CSS typed arithmetic behavior and use cases enabled by it.

- [Learn: Values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - A look at some of the most frequently used value types, what they are, and how they work.

- [CSS value serialization](/en-US/docs/Web/API/CSS_Object_Model/CSS_value_serialization)
  - How [CSSOM APIs](/en-US/docs/Web/API/CSS_Object_Model) serialize color and other values into standardized string representations.

## Related

- [CSS cascading and inheritance](/guides/Cascade) module
  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- [CSS grid layout](/guides/Grid_layout) module
  - {{cssxref("&lt;flex&gt;")}}
  - [Flex units](/guides/Values_and_units/Numeric_data_types#flex_units) (`fr`)

- [CSS conditional rules](/guides/Conditional_rules) module
  - [Container units](/guides/Values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`)

- [CSS colors](/guides/Colors) module
  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/reference/values/color_value/color-mix)

- [CSS images](/guides/Images) module
  - {{cssxref("image")}}
  - {{cssxref("gradient")}}

## Specifications

{{Specifications}}

## See also

- [CSS syntax](/guides/Syntax) module
- [CSS selectors](/guides/Selectors) module
