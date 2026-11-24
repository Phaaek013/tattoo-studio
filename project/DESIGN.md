---
name: Pk'House Studio
description: A tattoo studio set up as a cordel stall at the feira, one black ink on cheap folheto papers.
colors:
  ink: "#1b1612"
  ink-soft: "#3a2f26"
  gema: "#f2c53d"
  chiclete: "#f4a9bf"
  limao: "#bcd96a"
  anil: "#86b6de"
  tangerina: "#f39d5c"
  jornal: "#f1ece0"
  pino: "#b8864f"
  wash-carmim: "#c8324f"
  erro: "#8f1d17"
typography:
  display:
    fontFamily: "Alfa Slab One, Rockwell, serif"
    fontSize: "clamp(3.6rem, min(9vw, 13vh), 6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Alfa Slab One, Rockwell, serif"
    fontSize: "clamp(3.2rem, 10vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Alfa Slab One, Rockwell, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.1
  lead:
    fontFamily: "Vollkorn, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Vollkorn, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Vollkorn, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.3
  button:
    fontFamily: "Alfa Slab One, Rockwell, serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.01em"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  gutter: "24px"
  section: "clamp(80px, 12vw, 140px)"
components:
  button-carimbo:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.gema}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.6rem 1rem"
  button-topo:
    backgroundColor: "{colors.gema}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.55rem 1.1rem 0.6rem"
  button-topo-hover:
    backgroundColor: "{colors.jornal}"
  button-seta:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "46px"
  button-seta-hover:
    backgroundColor: "{colors.ink}"
  chip-ficha:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "7px 13px 8px"
  chip-ficha-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.jornal}"
  input-talao:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "8px 2px"
  card-talao:
    backgroundColor: "{colors.jornal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 4vw, 40px)"
  nav-topo:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.jornal}"
    height: "60px"
---

# Design System: Pk'House Studio

## Overview

**Creative North Star: "The Cordel Stall"**

The studio is a folheto stall at the feira. Every section is a whole sheet of cheap coloured paper with visible grain, and everything printed on it is one black ink, pulled from a hand-cut block: edges bite, solids drop out in specks, tone comes only from gouged lines and hatching. Styles hang as small woodcut folhetos on a barbante string held by wooden pregadores, and taking one off the string is how an order starts.

Density is low and declarative: one monumental woodtype word or phrase per section, a sturdy book serif for everything read, and generous paper around both. Colour lives in the paper, never in the ink. The only exception in the shipped work is a translucent carmine wash multiplied under the aquarela print. Depth is physical paper: sheets lift and hang with soft drop shadows, nothing glows, nothing is rounded.

Confirmed rejection (from the direction contract): the black-page-with-orange-accent tattoo template and the photo grid.

**Key Characteristics:**
- Whole-section paper fields (gema, chiclete, limão, anil, tangerina, jornal) carrying an SVG fractal-noise grain.
- One ink (#1b1612) for all type, line, rule and solid; tone by cut line, never by grey fill.
- Heavy slab woodtype display (Alfa Slab One) roughened by an SVG displacement-and-speckle filter; Vollkorn for text.
- Square corners everywhere; rules are 2-3px ink lines.
- Paper physics: soft hanging shadows, a damped swing on the varal, a stamp that lands with a short scale-down.

## Colors

Five saturated folheto papers and one newsprint off-white, all printed with a single warm black ink.

### Primary
- **Prensa Black** (ink): the one ink. All text, every rule and border, the carimbo button body, the header and footer bars, every woodcut print. Also the selection background and focus ring.

### Secondary
- **Gema Yellow** (gema): the house paper. The cover field, the header CTA, the brand mark on the black bars, footer links, scrollbar track. The default `--paper` value.

### Tertiary
- **Chiclete Pink** (chiclete), **Limão Green** (limao), **Anil Blue** (anil), **Tangerina Orange** (tangerina): section and folheto papers. Limão is "Como funciona", tangerina is "Cuidados", anil is "Encomende"; the styles section and each folheto take the paper assigned to their style. Anil also prints the perforation dots along the top of the talão.
- **Carmim Wash** (wash-carmim): the only colour allowed near ink, as a 0.55-opacity multiplied wash inside the aquarela print, set per paper (chiclete and tangerina) so it stays visible.

### Neutral
- **Jornal Newsprint** (jornal): the inner sheet. The open folheto and the order talão sit on it; it is the text colour on the black header and the selected-chip text.
- **Barbante Brown** (ink-soft): the varal string, the pregador spring.
- **Pregador Wood** (pino): the clothespin body only.
- **Erro Red** (erro): form error border and text, nothing else.

### Named Rules
**The One Ink Rule.** Ink is #1b1612 and nothing else. Tone inside a print comes from cuts (strokes in `var(--paper)`) and hatching, never from grey fills or tinted ink. Ink at partial alpha (`rgb(27 22 18 / 0.04-0.6)`) is allowed only for shadows, hover tints and the page fold rule, never for type.

**The Paper Is the Colour Rule.** Colour enters as a whole field of paper, not as an accent on a neutral page. A new section picks one of the five papers (or jornal for an inner sheet) and fills edge to edge with grain.

**The Paper Inherits Rule.** Prints and stamps cut back to `var(--paper)`, so whatever sits on a sheet reads correctly on that sheet.
## Typography

**Display Font:** Alfa Slab One (with Rockwell, serif)
**Body Font:** Vollkorn, variable 400-900 (with Georgia, serif)

**Character:** Cordel woodtype over a book face. The slab is loud, single-weight and always pressed through the `press` filter on big titles; Vollkorn does the reading, with italic carrying verse, captions and asides.

### Hierarchy
- **Display** (400, clamp(3.6rem, min(9vw, 13vh), 6rem), 0.9): the cover title only, broken by hand over two lines.
- **Headline** (400, clamp(3.2rem, 10vw, 6rem), 0.92): one per section ("O desenho é seu", "Encomende", the current style name).
- **Title** (400, 1.35-1.5rem): step names and care subheads, in the slab. Step numerals in the slab at 2.4rem.
- **Lead** (400, 1.2-1.3rem, 1.45): the one sentence under a headline, held to 26-38ch.
- **Body** (400, 1.125rem, 1.55): running text, list rows at 1.15rem.
- **Label** (700, 0.95-1rem): definition terms, form legends and labels, in Vollkorn bold, sentence case.
- **Verse** (italic, 1.15rem, 1.5): cordel sextilhas in the open folheto, set as broken lines.
- **Button** (slab 400, 1.05rem, 0.01em): stamp and header buttons.

### Named Rules
**The One Word Rule.** Each section gets one monumental slab line with real negative space around it; no second slab headline competes in the same field.

**The Woodtype Press Rule.** Display-size slab (cover title, section headlines, the style name, footer mark) runs through `filter: url(#press)`. Small slab (buttons, folheto titles) stays clean for legibility.

## Layout

Content sits in a single 1180px measure (`min(1180px, 100% - 48px)`); the open folheto narrows to 980px. Sections are full-bleed paper with vertical padding of clamp(80px, 12vw, 140px). Two-column grids are asymmetric (1fr / 1.05fr on the cover, 0.9fr / 1.1fr for styles, 0.8fr / 1.2fr for the order, 1fr / 1.25fr for care) with clamp(32px, 6vw, 88-96px) gaps. The process steps run four across, two under 1000px, one under 520px. The fixed header is 60px; anchors offset 64px.

At 820px and below every two-column grid stacks, the header nav hides (brand and CTA remain), the cover print moves above the title at up to 270px, and the varal becomes a 940px horizontal track with scroll-snap and a hidden scrollbar. The order folheto decoration is dropped on mobile and the order intro stops being sticky.

## Elevation & Depth

Depth is paper, not interface. Sheets that are physically separate from their field (folhetos, the open folheto, the talão, the carimbo) carry a soft, negatively spread drop shadow in ink alpha, as if lifted off the table or hanging. Fields themselves are flat. There is no glow, no blur background, no hard offset shadow.

### Shadow Vocabulary
- **Hanging folheto** (`box-shadow: 0 10px 18px -10px rgb(27 22 18 / 0.5)`): a folheto at rest on the string; hover `0 16px 22px -12px / 0.55`, chosen `0 18px 24px -12px / 0.6`.
- **Carimbo** (`box-shadow: 0 6px 14px -6px rgb(27 22 18 / 0.55)`): the stamp button; hover `0 12px 22px -8px / 0.6`.
- **Inner sheet** (`box-shadow: 0 24px 40px -24px rgb(27 22 18 / 0.6-0.65)`): the open folheto and the talão.

### Named Rules
**The Lifted Paper Rule.** Only a separate piece of paper casts a shadow, and the shadow always falls downward with negative spread. Fields, rules and text never do.

## Shapes

Square corners throughout (0px), including inputs, chips and scrollbar thumb; the only rounding is 1-2px on the pregador clothespin. Woodcut prints sit in a double frame (7px outer, 1.6px inner ink rules) inside a 200 by 200 block. Ink solids such as the carimbo and the selo are roughened by the `rough` displacement filter so their edges wobble like a cut block. Rules divide content: 2px ink lines over list rows and data pairs, 3px over process steps, a dashed 2px line before the order preview, a 1.5px 35%-ink fold between the two pages of the open folheto. The talão's top edge is a row of anil perforation dots.

## Components

### Buttons
- **Carimbo (primary):** a carved ink stamp. Slab type in the current paper colour on an ink block whose edge is roughened (`filter: url(#rough)` on a pseudo-element), padding 0.95rem 1.6rem 1rem, square. Hover lifts 2px and deepens the shadow; active drops 1px; easing `cubic-bezier(0.16, 1, 0.3, 1)` at 0.25s. May carry the selected style in Vollkorn semibold after a middle dot.
- **Topo button:** a flat gema block on the black header, ink slab text, padding 0.55rem 1.1rem 0.6rem; hover turns jornal.
- **Seta:** 46px square, 2px ink border, transparent; hover fills ink with the paper colour for the arrow. Arrows are 20px stroked SVG.
- **Link tinta:** ink text, semibold, 2px underline at 5px offset, 4px on hover.

### Chips
- **Ficha:** a radio styled as a printed ticket: 2px ink border, Vollkorn 600 at 1rem, padding 7px 13px 8px. Hover tints with 8% ink; checked inverts to ink with jornal text; keyboard focus gets the 3px ink ring.

### Cards / Containers
- **Talão and open folheto:** jornal sheets with grain, square, inner-sheet shadow, padding clamp(24px, 4vw, 40-48px). They reset `--paper` to jornal so prints inside cut correctly.

### Inputs / Fields
- **Style:** underline only: transparent background, 2px ink bottom border, square, body type at 1.1rem, padding 8px 2px. Placeholder is italic.
- **Focus:** the underline thickens to 3px and the field takes a 4% ink tint; no outline.
- **Error:** a block above the result with a 2px erro border and erro semibold text.

### Navigation
- **Topo:** a fixed 60px ink bar. Brand in gema slab at 1.5rem, nav links in jornal Vollkorn 500 with a gema underline on hover, gema CTA at the right. Focus rings switch to gema on black. Under 820px the links hide.

### Varal (signature)
The style selector is a barbante string (ink-soft 2.2px quadratic path) with seven 124px folhetos (112px on mobile) hung by pregadores, each on its own style's paper with its slab name and woodcut print. Each folheto swings on a damped spring driven by ambient sine "wind", scroll velocity and a pointer nudge, clamped to plus or minus 14 degrees; reduced motion disables it. The chosen folheto drops 14px, tilts 1.5 degrees and receives a rotated "Escolhido" selo, an ink stamp that lands with a 0.35s scale from 1.5 to 1. Focus draws a 3px dashed ink outline around the paper.

### Woodcut Print (signature)
Prints are inline SVG in a 200 by 200 block under the `ink` filter (displacement plus speckle knock-out). Ink is solid; cuts are strokes in `var(--paper)`. When a print changes it enters with `prensa`: 0.55s from 1.035 scale and 3px blur to rest.

## Do's and Don'ts

### Do:
- **Do** fill each section edge to edge with one folheto paper plus the grain, and print on it in ink only.
- **Do** build tone inside prints from cut strokes in `var(--paper)` and hatching, inside the double-ruled block under `filter: url(#ink)`.
- **Do** keep one slab headline per section, pressed through `#press`, with Vollkorn for all reading text.
- **Do** keep every corner square and divide content with 2-3px ink rules.
- **Do** give only separate sheets of paper a downward, negatively spread shadow in ink alpha.
- **Do** disable the varal swing, the stamp and the print entry under `prefers-reduced-motion`.

### Don't:
- **Don't** build the black page with an orange accent, or a photo grid of tattoos.
- **Don't** put colour inside the ink or use grey fills for tone; the carmine aquarela wash is the single exception.
- **Don't** round corners or soften rules into hairline greys.
- **Don't** use hard offset shadows, glows or glass; depth is paper lifting off paper.