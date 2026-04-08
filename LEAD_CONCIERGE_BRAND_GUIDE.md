# Lead Concierge Brand Guide

**Last Updated:** March 28, 2026  
**Version:** 1.0

---

## Brand Overview

Lead Concierge is an AI-powered lead management service for home service businesses. The brand communicates **speed, automation, professionalism, and revenue growth** through modern, gradient-rich design with smooth animations.

---

## Color Palette

### Primary Brand Colors

**Blue Gradient Series** - Represents trust, technology, and professionalism
- `#eff6ff` - Blue-50 - Light backgrounds, subtle accents
- `#dbeafe` - Blue-100 - Borders, light panels
- `#3b82f6` - Blue-500 - Interactive elements
- `#2563eb` - Blue-600 - **PRIMARY BRAND COLOR** - Main CTAs, key buttons
- `#1d4ed8` - Blue-700 - Gradient midpoints
- `#1e40af` - Blue-800 - Deep gradient stops
- `#1e3a8a` - Blue-900 - Dark gradient bases

**Purple Accent Series** - Represents innovation and premium service
- `#faf5ff` - Purple-50 - Subtle backgrounds
- `#9333ea` - Purple-600 - Accent elements
- `#7e22ce` - Purple-700 - Gradient transitions
- `#6b21a8` - Purple-800 - **SECONDARY BRAND COLOR** - Gradient endpoints

### Signature Gradients

**Hero Gradient** (Primary Brand Gradient)
```css
background: linear-gradient(to bottom right, #2563eb, #1d4ed8, #6b21a8);
/* Tailwind: from-blue-600 via-blue-700 to-purple-800 */
```

**Premium Panel Gradient**
```css
background: linear-gradient(to bottom right, #2563eb, #7e22ce);
/* Tailwind: from-blue-600 to-purple-700 */
```

**Button Gradient**
```css
background: linear-gradient(to right, #3b82f6, #9333ea);
/* Tailwind: from-blue-500 to-purple-600 */
```

**Subtle Background Gradient**
```css
background: linear-gradient(to bottom right, #f9fafb, #eff6ff);
/* Tailwind: from-gray-50 to-blue-50 */
```

**Calculator Panel Gradient**
```css
background: linear-gradient(to bottom right, #eff6ff, #faf5ff);
/* Tailwind: from-blue-50 to-purple-50 */
```

### Supporting Colors

**Neutral Grays** - Text and backgrounds
- `#f9fafb` - Gray-50 - Section backgrounds
- `#4b5563` - Gray-600 - Secondary text
- `#374151` - Gray-700 - Body text
- `#111827` - Gray-900 - Headlines, dark gradients

**Slates** - Calculator and form elements
- `#e2e8f0` - Slate-200 - Input backgrounds, dividers
- `#475569` - Slate-600 - Labels, secondary text
- `#0f172a` - Slate-900 - Strong headlines

**Status Colors**
- `#dc2626` - Red-600 - Negative indicators (X icons)
- `#ef4444` - Red-500 - Error states
- `#fee2e2` - Red-100 - Error backgrounds
- `#86efac` - Green-300 - Positive indicators (checkmarks)

---

## Typography

### Font Family
**System Font Stack** (Default)
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Type Scale

**Display/Hero Headlines**
```css
font-size: 3rem - 3.5rem; /* text-4xl to text-5xl */
font-weight: 700; /* font-bold */
line-height: 1.2;
color: #0f172a; /* slate-900 */
```

**Section Headlines**
```css
font-size: 2.25rem - 3rem; /* text-4xl */
font-weight: 700; /* font-bold */
color: #111827; /* gray-900 */
```

**Subheadings**
```css
font-size: 1.5rem - 2rem; /* text-2xl */
font-weight: 600; /* font-semibold */
```

**Body Large**
```css
font-size: 1.25rem; /* text-xl */
font-weight: 400;
color: #475569; /* slate-600 */
```

**Body Regular**
```css
font-size: 1rem - 1.125rem; /* text-base to text-lg */
font-weight: 400;
color: #374151; /* gray-700 */
```

**Small Text**
```css
font-size: 0.875rem; /* text-sm */
font-weight: 500; /* font-medium */
```

---

## Spacing & Layout

### Container Widths
- **Max Width:** `max-w-7xl` (1280px)
- **Content Max Width:** `max-w-5xl` (1024px)
- **Text Max Width:** `max-w-3xl` (768px)

### Section Padding
- **Standard Section:** `py-20` (5rem top/bottom)
- **Hero Section:** `py-20` (5rem top/bottom) - Intentionally shorter for immediate engagement
- **Horizontal Padding:** `px-6` (1.5rem)

### Component Spacing
- **Card Padding:** `p-8` (2rem)
- **Card Gap:** `gap-8` (2rem between grid items)
- **Content Spacing:** `mb-4` to `mb-16` depending on hierarchy

### Border Radius
- **Cards:** `rounded-2xl` to `rounded-3xl` (16px - 24px)
- **Buttons:** `rounded-xl` (12px)
- **Small Elements:** `rounded-lg` (8px)
- **Circular Elements:** `rounded-full`

---

## Component Patterns

### Primary CTA Button
```jsx
<button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
  Get Started Free
</button>
```

### Secondary CTA Button
```jsx
<button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors">
  Call Now
</button>
```

### Premium Card/Panel
```jsx
<div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-xl text-white">
  {/* Premium content */}
</div>
```

### Light Card
```jsx
<div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
  {/* Standard content */}
</div>
```

### Subtle Background Card
```jsx
<div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-lg">
  {/* Calculator/form content */}
</div>
```

### Section Background (Alternating)
```jsx
// Light section
<section className="py-20 bg-gray-50">

// Gradient section
<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">

// Dark gradient section
<section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
```

---

## Animation Principles

### Library
**Motion (formerly Framer Motion)** - `motion` package
```jsx
import { motion } from "motion/react";
```

### Standard Animations

**Fade In + Slide Up**
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

**Staggered Delays**
```jsx
transition={{ duration: 0.6, delay: 0.2 }}
transition={{ duration: 0.6, delay: 0.4 }}
```

**Slide from Left**
```jsx
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}
```

**Slide from Right**
```jsx
initial={{ opacity: 0, x: 20 }}
whileInView={{ opacity: 1, x: 0 }}
```

**Hover Effects**
```jsx
// Buttons
className="hover:shadow-2xl hover:scale-105 transition-all duration-300"

// Cards
className="hover:shadow-xl transition-shadow duration-300"
```

### Animation Timing
- **Standard Duration:** `duration-300` (0.3s)
- **Content Reveals:** `duration: 0.6` (600ms)
- **Smooth Transitions:** `transition-all`

---

## Icons

### Library
**Lucide React** - `lucide-react` package

### Common Icons
- **Phone:** `<Phone />` - Call-to-action buttons
- **Check:** `<Check />` - Positive indicators, feature lists
- **X:** `<X />` - Negative indicators, problems
- **ChevronDown:** `<ChevronDown />` - Accordions, dropdowns
- **Zap:** `<Zap />` - Speed/automation features
- **Target:** `<Target />` - Qualification/precision
- **Calendar:** `<Calendar />` - Booking features
- **TrendingUp:** `<TrendingUp />` - Revenue/growth
- **Clock:** `<Clock />` - Time-saving features
- **MessageSquare:** `<MessageSquare />` - AI engagement

### Icon Sizing
- **Small:** `w-4 h-4` or `w-5 h-5`
- **Medium:** `w-6 h-6`
- **Large:** `w-8 h-8` or `w-12 h-12`

---

## Form Design

### Input Fields
```jsx
<input
  type="text"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  placeholder="Your name"
/>
```

### Textarea
```jsx
<textarea
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
  rows={4}
  placeholder="Your message"
/>
```

### Submit Button
```jsx
<button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300">
  Submit Form
</button>
```

### Range Slider
```jsx
<input
  type="range"
  className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:cursor-pointer"
/>
```

---

## Content Patterns

### Headlines (Voice & Tone)
- **Direct and benefit-focused**
- **Challenge assumptions**: "Most businesses don't have a lead problem."
- **Quantify value**: "See How Much Revenue You're Losing"
- **Action-oriented**: "Get Started Free Today"

### Body Copy
- **Conversational but professional**
- **Problem-first, solution-second**
- **Use concrete examples from home services industry**
- **Focus on automation and time-saving**

### Call-to-Action Copy
- **Primary CTA**: "Get Started Free" / "Book a Demo"
- **Secondary CTA**: "Call Now" / "Schedule a Call"
- **Tertiary**: "Learn More" / "See How It Works"

---

## Layout Patterns

### Two-Column Comparison
```jsx
<div className="grid md:grid-cols-2 gap-8">
  {/* Negative side */}
  <div className="bg-white border-2 border-red-100">
    <X icon /> Problem
  </div>
  
  {/* Positive side */}
  <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
    <Check icon /> Solution
  </div>
</div>
```

### Three-Column Services
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Service cards */}
</div>
```

### Calculator Layout (Two-Panel)
```jsx
<div className="grid lg:grid-cols-2 gap-8">
  {/* Left: Inputs */}
  <div className="bg-gradient-to-br from-blue-50 to-purple-50">
    {/* Sliders & controls */}
  </div>
  
  {/* Right: Results */}
  <div className="bg-white">
    {/* Calculated metrics */}
  </div>
</div>
```

---

## Shadows

### Card Shadows
- **Standard Card:** `shadow-lg`
- **Premium/Elevated Card:** `shadow-xl`
- **Hover State:** `hover:shadow-2xl`

### Button Shadows
- **Resting:** No shadow or subtle `shadow`
- **Hover:** `hover:shadow-xl` or `hover:shadow-2xl`

---

## Responsive Design

### Breakpoints (Tailwind defaults)
- **Mobile:** < 640px (default)
- **Tablet:** `md:` ≥ 768px
- **Desktop:** `lg:` ≥ 1024px
- **Large Desktop:** `xl:` ≥ 1280px

### Responsive Patterns
```jsx
// Typography
className="text-3xl md:text-4xl lg:text-5xl"

// Grid
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"

// Padding
className="px-4 md:px-6 lg:px-8"

// Spacing
className="py-12 md:py-16 lg:py-20"
```

---

## Accessibility

### Contrast Requirements
- All text meets WCAG AA standards
- White text on gradient backgrounds (blue-600 to purple-800) passes contrast
- Gray-700 and darker for body text on white backgrounds

### Focus States
- All interactive elements have visible focus states
- `focus:ring-2 focus:ring-blue-500` for form inputs
- `focus:outline-none focus:ring-2 focus:ring-white` for buttons on dark backgrounds

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- `<section>` for major content blocks
- `<button>` for interactive elements
- Labels for form inputs

---

## Brand Assets

### Logo
*To be added - currently text-based "Lead Concierge"*

### Tagline
"AI-Powered Lead Management for Home Service Businesses"

### Key Messaging
1. **Speed**: "Instant engagement with every lead"
2. **Automation**: "AI handles leads 24/7"
3. **Revenue**: "Recover lost revenue from missed leads"
4. **Simplicity**: "Set it and forget it"

---

## Technical Stack

### Core Framework
- **React 18.3.1**
- **Tailwind CSS 4.1.12**
- **Motion (Framer Motion) 12.23.24**
- **Vite 6.3.5**

### Icon Library
- **Lucide React 0.487.0**

### Component Libraries
- **Radix UI** (accessible primitives)
- **Shadcn/ui patterns** (customized)

---

## File Structure

```
/src
  /app
    /components
      - Hero.tsx
      - ProblemSolution.tsx
      - RevenueCalculator.tsx
      - HowItWorks.tsx
      - Services.tsx
      - ValueProp.tsx
      - FAQ.tsx
      - FinalCTA.tsx
    - App.tsx
  /styles
    - theme.css (design tokens)
    - index.css
    - tailwind.css
    - fonts.css
```

---

## Usage Examples

### Creating a New Landing Page Section
```jsx
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function NewSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Your Headline Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your supporting text here.
          </p>
        </motion.div>
        
        {/* Content grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cards with brand styling */}
        </div>
      </div>
    </section>
  );
}
```

### Creating a CTA Component
```jsx
export function BrandCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
        Get Started Free
      </button>
      <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors">
        Call Now: (555) 123-4567
      </button>
    </div>
  );
}
```

---

## Change Log

### Version 1.0 - March 28, 2026
- Initial brand guide creation
- Documented existing Lead Concierge website design system
- Established color palette, typography, and component patterns
- Created animation and layout guidelines

---

## Notes for Designers & Developers

1. **Always use the signature blue-to-purple gradients** for premium/featured content
2. **Maintain the 20-40-20 stagger pattern** for animations (0.2s, 0.4s delays)
3. **Keep hero sections shorter** (py-20) to drive immediate engagement
4. **Use Motion for all animations** - smooth, professional feel
5. **Alternate section backgrounds** (white, gray-50, gradient) for visual rhythm
6. **All CTAs should use gradient buttons** with hover scale effects
7. **Red is only for "problem" states** - never use for positive messaging
8. **Green-300 for checkmarks only** - not a primary brand color

---

**Questions?** Reference this guide for all Lead Concierge brand implementations.
