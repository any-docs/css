---
title: ::cue
slug: Web/CSS/Reference/Selectors/::cue
page-type: css-pseudo-element
browser-compat: css.selectors.cue
sidebar: cssref
---

The **`::cue`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) matches [WebVTT](/en-US/docs/Web/API/WebVTT_API) cues within a selected element.
This can be used to [style captions and other cues](/en-US/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in media with VTT tracks.

{{InteractiveExample("CSS Demo: ::cue", "tabbed-shorter")}}

```css interactive-example
video {
  width: 100%;
}

video::cue {
  font-size: 1rem;
  color: yellow;
}

::cue(u) {
  color: red;
}
```

```html interactive-example
<video controls src="/shared-assets/videos/friday.mp4">
  <track
    default
    kind="captions"
    srclang="en"
    src="/shared-assets/misc/friday.vtt" />
  Sorry, your browser doesn't support embedded videos.
</video>
```

The properties are applied to the entire set of cues as if they were a single unit. The only exception is that `background` and its longhand properties apply to each cue individually, to avoid creating boxes and obscuring unexpectedly large areas of the media.

In the example above, the `::cue(u)` selector selects all the [`<u>`](/en-US/docs/Web/HTML/Reference/Elements/u) elements inside [the cue text](https://github.com/mdn/shared-assets/blob/main/misc/friday.vtt).

## Syntax

```css
::cue | ::cue(<selector>) {
  /* ... */
}
```

## Permitted properties

Rules whose selectors include this element may only use the following CSS properties:

- `background`
- `background-attachment`
- `background-clip`
- `background-color`
- `background-image`
- `background-origin`
- `background-position`
- `background-repeat`
- `background-size`
- `color`
- `font`
- `font-family`
- `font-size`
- `font-stretch`
- `font-style`
- `font-variant`
- `font-weight`
- `line-height`
- `opacity`
- `outline`
- `outline-color`
- `outline-style`
- `outline-width`
- `ruby-position`
- `text-combine-upright`
- `text-decoration`
- `text-decoration-color`
- `text-decoration-line`
- `text-decoration-style`
- `text-decoration-thickness`
- `text-shadow`
- `visibility`
- `white-space`

## Examples

### Styling WebVTT cues as white-on-black

The following CSS sets the cue style so that the text is white and the background is a translucent black box.

```css
::cue {
  color: white;
  background-color: rgb(0 0 0 / 60%);
}
```

### Styling WebVTT internal node objects

Cue text can include _internal node objects_ as the tags (similar to HTML elements) `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>`, and `<lang>`.
The `::cue()` selector can be used to apply styles to content inside these tags to customize how the WebVTT track is displayed.
Consider the following cue text that uses the `<u>` tag to underline some text:

```plain
00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the <u>lord of the universe</u> in?
```

The following CSS rule customizes the text inside the `<u>` tag with a color and a [text-decoration](/reference/properties/text-decoration):

```css
::cue(u) {
  color: red;
  text-decoration: wavy overline lime;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Video Tracks Format (WebVTT)](/en-US/docs/Web/API/WebVTT_API)
- {{HTMLElement("track")}}, {{HTMLElement("video")}}
