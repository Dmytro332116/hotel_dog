---
name: Warm Haven System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#434842'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747871'
  outline-variant: '#c3c8bf'
  surface-tint: '#50634e'
  primary: '#243624'
  on-primary: '#ffffff'
  primary-container: '#3a4d39'
  on-primary-container: '#a7bda4'
  inverse-primary: '#b7cdb2'
  secondary: '#7d562d'
  on-secondary: '#ffffff'
  secondary-container: '#ffca98'
  on-secondary-container: '#7a532a'
  tertiary: '#33322f'
  on-tertiary: '#ffffff'
  tertiary-container: '#494845'
  on-tertiary-container: '#bab7b2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e9ce'
  primary-fixed-dim: '#b7cdb2'
  on-primary-fixed: '#0e1f0f'
  on-primary-fixed-variant: '#394b38'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f0bd8b'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#623f18'
  tertiary-fixed: '#e6e2dd'
  tertiary-fixed-dim: '#c9c6c1'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#484743'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is built to evoke a "home away from home" feeling for premium pet care. It balances the precision of high-end hospitality with the organic warmth of a cozy residence. The brand personality is nurturing, dependable, and sophisticated.

The visual style is **Contemporary Organic**. It moves away from clinical, cold tech aesthetics in favor of soft textures, earthy tones, and generous white space. This approach establishes immediate trust with pet owners by prioritizing comfort and high-touch service over automation.

## Colors
The palette is grounded in nature to promote a sense of calm and safety.
- **Primary (Forest Green):** Used for hero backgrounds, footer sections, and heavy-weight accents to provide a sense of stability and luxury.
- **Secondary (Muted Gold/Terracotta):** Reserved exclusively for primary Calls to Action (CTAs) and vital interactive elements to ensure high visibility without visual fatigue.
- **Background (Soft Beige):** Replaces pure white to reduce eye strain and enhance the "warmth" of the digital environment.
- **Text (Dark Charcoal):** High-contrast for accessibility, but softer than pure black to maintain the organic feel.

## Typography
Plus Jakarta Sans is utilized for its modern, friendly, and geometric characteristics. 
- **Headlines:** Use tight letter spacing and high weights (600-700) to create a bold, editorial look.
- **Body Text:** Uses a generous 1.6 line-height to ensure legibility and a relaxed reading pace.
- **Labels:** Used for buttons and navigation items, prioritizing clarity and a slight tracking increase for better scanability in uppercase or small-caps contexts.

## Layout & Spacing
This design system employs a **Fluid Grid** with a fixed maximum container width. 
- **Grid:** A 12-column system is used for desktop, collapsing to 4 columns for mobile.
- **Rhythm:** An 8px base unit governs all padding and margins to ensure a consistent vertical rhythm.
- **White Space:** Intentional "breathing room" (section margins of 80px-120px) is used to separate different service offerings, preventing the UI from feeling cluttered or overwhelming.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Ambient Shadows** rather than stark borders.
- **Card Surfaces:** Use a subtle white or high-brightness beige background against the main beige floor.
- **Shadows:** Use large blur radii (20px+) with low opacity (5-8%) and a slight tint of the primary green or warm brown to avoid "dirty" grey shadows.
- **Interactive Depth:** Buttons should transition from a flat state to a slightly deeper shadow on hover to mimic a physical press.

## Shapes
The shape language is defined by large, inviting radii.
- **Cards & Images:** Use `rounded-lg` (1rem) or `rounded-xl` (1.5rem) to reinforce the friendly, safe vibe.
- **Buttons:** Fully pill-shaped or highly rounded (`rounded-lg`) to encourage interaction and feel "soft" to the touch.
- **Icons:** Thin, monoline art icons with rounded terminals are preferred to match the weight of the typography.

## Components
- **Buttons:** Primary buttons use the secondary gold color with dark text. Secondary buttons use a transparent background with a thin `1px` border in the primary green.
- **Cards:** Cards should feature a slight lift on hover. Product or room cards include a full-width image at the top with a `16px` inner padding for text content.
- **Input Fields:** Fields use the secondary background color (#F7F3EE) but with a slightly darker stroke (5% darker) to define boundaries. Focus states use the primary forest green for the border.
- **Chips/Badges:** Small, pill-shaped indicators for "Available" or "Premium" status using low-saturation versions of the primary color.
- **Testimonial Sliders:** White cards with soft shadows, featuring a circular avatar and a 5-star rating component in the secondary gold color.