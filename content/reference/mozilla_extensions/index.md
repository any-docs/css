---
title: Firefox (-moz-) vendor-prefixed CSS extensions
slug: Web/CSS/Reference/Mozilla_extensions
page-type: landing-page
status:
  - non-standard
sidebar: cssref
---

A {{glossary("vendor prefix")}} is used to indicate that a feature is specific to a certain browser.
Firefox supports several extensions to [CSS](/en-US/docs/Web/CSS), which are prefixed with `-moz-`.

## -moz-prefixed properties without standard equivalents

> [!NOTE]
> These extensions are mostly experimental or deprecated but kept for backward compatibility.
> You should avoid using them on production websites.

- `-moz-float-edge` {{deprecated_inline}}
- `-moz-force-broken-image-icon` {{deprecated_inline}}: Use `alt` text instead.
- `-moz-orient`
- `-moz-osx-font-smoothing`: A similar `font-smooth` equivalent exists.
- `-moz-user-focus` {{deprecated_inline}}
- `-moz-user-input` {{deprecated_inline}}
- `-moz-user-modify`: A non-prefixed `user-modify` equivalent exists, but the HTML [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) attribute is recommended instead.

## -moz-prefixed properties with standard equivalents

The following properties were implemented first using the `-moz-` vendor prefix, but are now supported in Firefox using the standard (non-prefixed) syntax.
Support for the prefixed version is typically dropped eventually, so use the standard property instead.

### A

- `-moz-animation` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-animation-delay` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-animation-direction` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-animation-duration` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-animation-fill-mode` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-animation-iteration-count` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-animation-name` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-animation-play-state` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-animation-timing-function` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-appearance`: The prefixed version of `appearance` is still supported.

### B

- `-moz-backface-visibility` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-background-clip` {{deprecated_inline}}: Not supported; use `background-clip`.
- `-moz-background-origin` {{deprecated_inline}}: Not supported; use `background-origin`.
- `-moz-box-align` {{deprecated_inline}}: Use [CSS flexbox](/guides/Flexible_box_layout) with `align-items`.
- `-moz-background-inline-policy` {{deprecated_inline}}: Not supported; use `box-decoration-break`.
- `-moz-box-direction` {{deprecated_inline}}: Use [CSS flexbox](/guides/Flexible_box_layout) with `flex-direction`.
- `-moz-box-flex` {{deprecated_inline}}: Use [CSS flexbox](/guides/Flexible_box_layout) with `flex-grow`.
- `-moz-box-ordinal-group` {{deprecated_inline}}: Use [CSS flexbox](/guides/Flexible_box_layout) with `order`.
- `-moz-box-orient` {{deprecated_inline}}: Use [CSS flexbox](/guides/Flexible_box_layout) with `flex-direction`.
- `-moz-box-pack` {{deprecated_inline}}: Use [CSS flexbox](/guides/Flexible_box_layout) with `justify-content`.
- `-moz-background-size` {{deprecated_inline}}: Not supported; use `background-size`.
- `-moz-border-end` {{deprecated_inline}}: Not supported; use `border-inline-end`.
- `-moz-border-end-color` {{deprecated_inline}}: Not supported; use `border-inline-end-color`.
- `-moz-border-end-style` {{deprecated_inline}}: Not supported; use `border-inline-end-style`.
- `-moz-border-end-width` {{deprecated_inline}}: Not supported; use `border-inline-end-width`.
- `-moz-border-image` {{deprecated_inline}}: Not supported; use `border-inline-end-width`.
- `-moz-border-start` {{deprecated_inline}}: Not supported; use `border-inline-start`.
- `-moz-border-start-color` {{deprecated_inline}}: Not supported; use `border-inline-start-color`.
- `-moz-border-start-style` {{deprecated_inline}}: Not supported; use `border-inline-start-style`.
- `-moz-border-start-width` {{deprecated_inline}}: Not supported; use `border-inline-start-width`.
- `-moz-box-sizing` {{deprecated_inline}}: Prefixed version still supported.

### C

- `-moz-column-count` {{deprecated_inline}}: Not supported; use `column-count`.
- `-moz-column-fill` {{deprecated_inline}}: Not supported; use `column-fill`.
- `-moz-column-gap` {{deprecated_inline}}: Not supported; use `column-gap`.
- `-moz-column-width` {{deprecated_inline}}: Not supported; use `column-width`.
- `-moz-column-rule` {{deprecated_inline}}: Not supported; use `column-rule`.
- `-moz-column-rule-width` {{deprecated_inline}}: Not supported; use `column-rule-width`.
- `-moz-column-rule-style` {{deprecated_inline}}: Not supported; use `column-rule-style`.
- `-moz-column-rule-color` {{deprecated_inline}}: Not supported; use `column-rule-color`.

### F–M

- `-moz-font-feature-settings` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-font-language-override` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-hyphens` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-margin-end` {{deprecated_inline}}: Not supported; use `margin-inline-end`.
- `-moz-margin-start` {{deprecated_inline}}: Not supported; use `margin-inline-start`.

### O-P

- `-moz-opacity` {{deprecated_inline}}: Not supported; use `opacity`.
- `-moz-outline` {{deprecated_inline}}: Not supported; use `outline`.
- `-moz-outline-color` {{deprecated_inline}}: Not supported; use `outline-color`.
- `-moz-outline-offset` {{deprecated_inline}}: Not supported; use `outline-offset`.
- `-moz-outline-style` {{deprecated_inline}}: Not supported; use `outline-style`.
- `-moz-outline-width` {{deprecated_inline}}: Not supported; use `outline-width`.
- `-moz-padding-end` {{deprecated_inline}}: Not supported; use `padding-inline-end`.
- `-moz-padding-start` {{deprecated_inline}}: Not supported; use `padding-inline-start`.
- `-moz-perspective` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-perspective-origin` {{deprecated_inline}}: Prefixed version still supported.

### T–Z

- `-moz-tab-size`: Use `tab-size`
- `-moz-text-align-last` {{deprecated_inline}}: Not supported; use `text-align-last`.
- `-moz-text-decoration-color` {{deprecated_inline}}: Not supported; use `text-decoration-color`.
- `-moz-text-decoration-line` {{deprecated_inline}}: Not supported; use `text-decoration-line`.
- `-moz-text-decoration-style` {{deprecated_inline}}: Not supported; use `text-decoration-style`.
- `-moz-text-size-adjust`: See `text-size-adjust` {{Experimental_Inline}}.
- `-moz-transform` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-transform-origin` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-transform-style` {{deprecated_inline}}: Prefixed version still supported.
- `-moz-transition` {{deprecated_inline}}: Not supported; use `transition`.
- `-moz-transition-delay` {{deprecated_inline}}: Not supported; use `transition-delay`.
- `-moz-transition-duration` {{deprecated_inline}}: Not supported; use `transition-duration`.
- `-moz-transition-property` {{deprecated_inline}}: Not supported; use `transition-property`.
- `-moz-transition-timing-function` {{deprecated_inline}}: Not supported; use `transition-timing-function`.
- `-moz-user-select`: Use `user-select`.

## -moz-prefixed property values

### Global values

- `-moz-initial`: See `initial`.

### background-image

**Property:** `background-image`

- `-moz-linear-gradient` {{deprecated_inline}}: Use `gradient/linear-gradient`.
- `-moz-radial-gradient` {{deprecated_inline}}: Use `gradient/radial-gradient`.
- `-moz-element` {{deprecated_inline}}: Use `element`.
- `-moz-image-rect` {{deprecated_inline}}

### order-style and outline-style

**Properties:** `border-style` and `outline-style`.

- `-moz-bg-inset` {{deprecated_inline}}
- `-moz-bg-outset` {{deprecated_inline}}
- `-moz-bg-solid` {{deprecated_inline}}

### &lt;color&gt; keywords

**Type:** `&lt;color&gt;`

- `-moz-activehyperlinktext`
- `-moz-hyperlinktext`
- `-moz-visitedhyperlinktext`
- `-moz-buttonhoverface`
- `-moz-buttonhovertext`
- `-moz-default-background-color`
- `-moz-default-color`
- `-moz-cellhighlight`
- `-moz-cellhighlighttext`
- `-moz-field`
- `-moz-fieldtext`
- `-moz-dialog`
- `-moz-dialogtext`
- `-moz-menuhover`
- `-moz-menuhovertext`

### empty-cells

**Property:** `empty-cells`

- `-moz-show-background` (default value in quirks mode)

### font-family

**Property:** `font-family`

- `-moz-fixed`

### image-rendering

**Property:** `image-rendering`

- `-moz-crisp-edges` {{deprecated_inline}}: Use [`crisp-edges`](/reference/properties/image-rendering#crisp-edges).

### &lt;length&gt;

**Type:** `&lt;length&gt;`

- `-moz-calc`{{deprecated_inline}}: Use `calc`.

### list-style-type

**Property:** `list-style-type`

Several vendor-prefixed values for `list-style-type` are now supported as standard values without a `-moz-` prefix, except for those in the following list.
See [Browser Compatibility](/reference/properties/list-style-type#browser_compatibility) for details.

- `-moz-ethiopic-halehame`
- `-moz-ethiopic-halehame-am`
- `-moz-ethiopic-halehame-ti-er`
- `-moz-ethiopic-halehame-ti-et`
- `-moz-hangul`
- `-moz-hangul-consonant`
- `-moz-urdu`

### text-align

**Property:** `text-align`

- `-moz-center` {{deprecated_inline}}: Use `text-align: center`.
- `-moz-left` {{deprecated_inline}}: Use `text-align: left`.
- `-moz-right` {{deprecated_inline}}: Use `text-align: right`.

### width, min-width, and max-width

**Properties:** `width`, `min-width`, and `max-width`

- `-moz-min-content`: See `min-content`.
- `-moz-fit-content`: See `fit-content`.
- `-moz-max-content`: See `max-content`.
- `-moz-available`: See [`stretch`](/reference/properties/width#stretch).

## Pseudo-classes

- `:-moz-any` {{deprecated_inline}}: Use `:is`.
- `:-moz-any-link` {{deprecated_inline}}: Use `:any-link`.
- `:-moz-broken` {{deprecated_inline}}
- `:-moz-drag-over`
- `:-moz-first-node`
- `:-moz-full-screen` {{deprecated_inline}}: Not supported; use `:fullscreen`.
- `:-moz-full-screen-ancestor` {{deprecated_inline}}: Not supported; use `:fullscreen`.
- `:-moz-handler-blocked`
- `:-moz-handler-crashed`
- `:-moz-handler-disabled`
- `:-moz-last-node`
- `:-moz-loading`
- `:-moz-locale-dir(ltr)`
- `:-moz-locale-dir(rtl)`
- `:-moz-native-anonymous`
- `:-moz-placeholder` {{deprecated_inline}}: Use `:placeholder-shown`.
- `:-moz-only-whitespace`
- `:-moz-read-only` {{deprecated_inline}}: Use `:read-only`.
- `:-moz-read-write` {{deprecated_inline}}: Use `:read-write`.
- `:-moz-submit-invalid`: See `:invalid`.
- `:-moz-suppressed`
- `:-moz-ui-invalid` {{deprecated_inline}}: Use `:user-invalid`.
- `:-moz-ui-valid` {{deprecated_inline}}: Use `:user-valid`.
- `:-moz-user-disabled`
- `:-moz-window-inactive`

## Pseudo-elements

- `::-moz-canvas`
- `::-moz-cell-content`
- `::-moz-color-swatch`
- `::-moz-focus-inner`
- `::-moz-focus-outer`
- `::-moz-inline-table`
- `::-moz-list-bullet`
- `::-moz-list-number`
- `::-moz-meter-bar`
- `::-moz-pagebreak`
- `::-moz-pagecontent`
- `::-moz-placeholder` {{deprecated_inline}}: Use `::placeholder`.
- `::-moz-progress-bar`
- `::-moz-range-progress`
- `::-moz-range-thumb`
- `::-moz-range-track`
- `::-moz-scrolled-canvas`
- `::-moz-scrolled-content`
- `::-moz-selection` {{deprecated_inline}}: Use `::selection`.
- `::-moz-svg-foreign-content`
- `::-moz-table`
- `::-moz-table-cell`
- `::-moz-table-column`
- `::-moz-table-column-group`
- `::-moz-table-outer`
- `::-moz-table-row`
- `::-moz-table-row-group`
- `::-moz-viewport`
- `::-moz-viewport-scroll`

## At-rules

- `@-moz-document`

## Media features

- `-moz-device-pixel-ratio` {{deprecated_inline}}
- `-moz-platform`
- `-moz-windows-glass`

## Other

- `-moz-alt-content`: See [Firefox bug 11011](https://bugzil.la/11011)

## See also

- [WebKit (-webkit-) vendor-prefixed CSS extensions](/en-US/docs/Web/CSS/Reference/Webkit_extensions)
- {{glossary("Vendor Prefix")}} glossary entry
