# How to Use the Lead Concierge Brand System

This guide explains how to create new materials for Lead Concierge while maintaining brand consistency.

---

## Quick Reference

When creating **anything** for Lead Concierge, you have three resources:

1. **`/LEAD_CONCIERGE_BRAND_GUIDE.md`** - Complete visual identity documentation
2. **`/src/styles/theme.css`** - CSS design tokens (colors, spacing, gradients)
3. **`/src/app/components/BrandComponents.tsx`** - Pre-built React components

---

## For AI Assistants / Developers

When asked to create something for Lead Concierge, follow this workflow:

### Step 1: Reference the Brand Guide
```
"I need to create [X] for Lead Concierge. Let me check the brand guide first."
```

Read `/LEAD_CONCIERGE_BRAND_GUIDE.md` to understand:
- Color palette and gradients
- Typography hierarchy
- Component patterns
- Animation principles
- Brand voice/tone

### Step 2: Use Design Tokens

Import the CSS variables from `/src/styles/theme.css`:

```css
/* Use Lead Concierge brand tokens */
background: var(--lc-gradient-hero);
color: var(--lc-blue-600);
padding: var(--lc-section-padding-y);
border-radius: var(--lc-radius-card-lg);
```

All tokens are prefixed with `--lc-` for easy identification.

### Step 3: Use Brand Components (React)

Import pre-built components from `/src/app/components/BrandComponents.tsx`:

```tsx
import {
  BrandButtonPrimary,
  BrandButtonSecondary,
  BrandCardPremium,
  BrandCardLight,
  BrandSection,
  BrandSectionHeader,
  BrandCTAGroup
} from "./components/BrandComponents";

function MyNewSection() {
  return (
    <BrandSection variant="gradient">
      <BrandSectionHeader
        title="Your Headline Here"
        description="Your supporting text"
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        <BrandCardLight>
          {/* Your content */}
        </BrandCardLight>
      </div>
      
      <BrandCTAGroup
        primaryText="Get Started Free"
        secondaryText="Call Now"
      />
    </BrandSection>
  );
}
```

---

## Common Use Cases

### Creating a New Landing Page Section

```tsx
import { BrandSection, BrandSectionHeader, BrandCardLight } from "./components/BrandComponents";
import { motion } from "motion/react";

export function NewFeatureSection() {
  return (
    <BrandSection variant="light">
      <BrandSectionHeader
        title="Your Section Title"
        description="Brief description of what this section covers"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Use brand cards */}
        <BrandCardLight animate delay={0.2}>
          <h3 className="text-2xl font-semibold mb-4">Feature 1</h3>
          <p className="text-gray-700">Description here</p>
        </BrandCardLight>
      </div>
    </BrandSection>
  );
}
```

### Creating a CTA Section

```tsx
import { BrandSection, BrandButtonPrimary, BrandButtonSecondary } from "./components/BrandComponents";

export function CTASection() {
  return (
    <BrandSection variant="gradient-dark">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join hundreds of home service businesses using Lead Concierge.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BrandButtonPrimary>Get Started Free</BrandButtonPrimary>
          <BrandButtonSecondary>Schedule a Demo</BrandButtonSecondary>
        </div>
      </div>
    </BrandSection>
  );
}
```

### Creating a Form

```tsx
import { BrandInput, BrandTextarea, BrandButtonPrimary } from "./components/BrandComponents";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  return (
    <form className="max-w-lg mx-auto space-y-4">
      <BrandInput
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      
      <BrandInput
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      
      <BrandTextarea
        placeholder="Tell us about your business"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        rows={5}
      />
      
      <BrandButtonPrimary className="w-full">
        Submit
      </BrandButtonPrimary>
    </form>
  );
}
```

### Creating Custom Components (Following Brand)

If you need a custom component not in BrandComponents.tsx:

```tsx
import { motion } from "motion/react";

export function CustomComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-xl text-white"
    >
      {/* Brand-consistent styling:
          - Blue to purple gradient
          - rounded-2xl (1rem border radius)
          - p-8 (2rem padding)
          - shadow-xl
          - White text on gradient
      */}
      <h3 className="text-2xl font-semibold mb-4">Custom Feature</h3>
      <p className="text-lg">Description with proper hierarchy</p>
    </motion.div>
  );
}
```

---

## Using CSS Design Tokens

When writing custom CSS, use the Lead Concierge tokens:

```css
.custom-element {
  /* Colors */
  background: var(--lc-blue-600);
  color: var(--lc-gray-900);
  
  /* Gradients */
  background: var(--lc-gradient-hero);
  
  /* Spacing */
  padding: var(--lc-card-padding);
  gap: var(--lc-card-gap);
  
  /* Border Radius */
  border-radius: var(--lc-radius-card-lg);
  
  /* Animations */
  transition-duration: var(--lc-transition-fast);
}
```

### Available CSS Variables

**Colors:**
- `--lc-blue-50` through `--lc-blue-900`
- `--lc-purple-50` through `--lc-purple-800`
- `--lc-gray-50` through `--lc-gray-900`
- `--lc-slate-200`, `--lc-slate-600`, `--lc-slate-900`
- `--lc-red-100`, `--lc-red-500`, `--lc-red-600`
- `--lc-green-300`

**Gradients:**
- `--lc-gradient-hero` (blue-600 → blue-700 → purple-800)
- `--lc-gradient-premium` (blue-600 → purple-700)
- `--lc-gradient-button` (blue-500 → purple-600)
- `--lc-gradient-subtle-bg` (gray-50 → blue-50)
- `--lc-gradient-calculator` (blue-50 → purple-50)

**Spacing:**
- `--lc-section-padding-y` (5rem / py-20)
- `--lc-container-padding-x` (1.5rem / px-6)
- `--lc-card-padding` (2rem / p-8)
- `--lc-card-gap` (2rem / gap-8)

**Border Radius:**
- `--lc-radius-card-sm` (1rem / rounded-2xl)
- `--lc-radius-card-lg` (1.5rem / rounded-3xl)
- `--lc-radius-button` (0.75rem / rounded-xl)
- `--lc-radius-input` (0.5rem / rounded-lg)

**Animation:**
- `--lc-transition-fast` (300ms)
- `--lc-transition-medium` (600ms)
- `--lc-animation-delay-1` (0.2s)
- `--lc-animation-delay-2` (0.4s)

---

## Example Prompts for AI

### Good Prompts ✅

> "Create a new pricing section for Lead Concierge using the brand guide."

> "I need a testimonials section for Lead Concierge. Use BrandCardLight components and follow the brand animation patterns."

> "Build an email template for Lead Concierge that matches the landing page gradient style."

> "Create a blog post header component for Lead Concierge following the brand typography hierarchy."

### What the AI Will Do

1. ✅ Read `/LEAD_CONCIERGE_BRAND_GUIDE.md`
2. ✅ Use colors from the documented palette
3. ✅ Import and use components from `BrandComponents.tsx`
4. ✅ Apply brand-consistent animations (Motion with 0.6s duration, 0.2s/0.4s delays)
5. ✅ Use proper gradients (blue → purple)
6. ✅ Follow spacing patterns (py-20, px-6, gap-8)
7. ✅ Match brand voice (direct, benefit-focused, quantified value)

---

## For Non-Developers (Designers, Marketers)

### Using the Brand Guide

When creating materials in design tools (Figma, Canva, etc.):

1. **Open `/LEAD_CONCIERGE_BRAND_GUIDE.md`**
2. **Copy exact color codes** from the "Color Palette" section
3. **Use the documented gradients** - they're provided in CSS format you can translate to your tool
4. **Follow typography hierarchy** - sizes and weights are all documented
5. **Reference component patterns** for layout inspiration

### Brand Colors Quick Reference

**Primary Brand Blue:** `#2563eb`  
**Secondary Brand Purple:** `#6b21a8`  

**Main Gradient (Hero):**
- Start: `#2563eb` (blue)
- Middle: `#1d4ed8` (darker blue)
- End: `#6b21a8` (purple)
- Direction: Diagonal (top-left to bottom-right)

**Button Gradient:**
- Start: `#3b82f6` (lighter blue)
- End: `#9333ea` (lighter purple)
- Direction: Left to right

### Headlines & Copy

**Voice:**
- Direct and benefit-focused
- Challenge assumptions ("Most businesses don't have a lead problem")
- Quantify value ("See How Much Revenue You're Losing")
- Action-oriented ("Get Started Free Today")

**Key Phrases:**
- "AI-powered lead management"
- "Instant engagement"
- "Recover lost revenue"
- "24/7 automated follow-up"
- "Home service businesses"

---

## Maintaining Brand Consistency

### ✅ DO:
- Use the documented blue-to-purple gradients
- Apply smooth animations (0.6s duration)
- Use brand component patterns
- Follow the typography hierarchy
- Maintain white space (py-20, px-6)
- Use rounded corners (rounded-2xl, rounded-3xl)
- Reference real hex codes from the guide

### ❌ DON'T:
- Introduce new colors without updating the brand guide
- Use different gradient directions
- Skip animations on important elements
- Use red or green as primary colors (they're status-only)
- Use small border radius (too sharp for brand)
- Ignore the documented spacing system
- Create buttons without hover effects

---

## Updating the Brand System

If you need to evolve the brand:

1. **Update the Brand Guide First** (`/LEAD_CONCIERGE_BRAND_GUIDE.md`)
2. **Add new tokens** to `/src/styles/theme.css` with `--lc-` prefix
3. **Create reusable components** in `/src/app/components/BrandComponents.tsx`
4. **Document the change** in the brand guide changelog
5. **Update this guide** if the workflow changes

---

## Testing Brand Consistency

Ask yourself:

- [ ] Does this use the documented blue-purple gradient palette?
- [ ] Are animations smooth and consistent (0.6s duration)?
- [ ] Does the typography match the hierarchy (4xl/5xl for headlines)?
- [ ] Are spacing patterns consistent (py-20 sections, p-8 cards)?
- [ ] Does the voice sound like Lead Concierge (direct, value-focused)?
- [ ] Would this fit seamlessly next to the existing landing page?

If all ✅, you're on brand!

---

## Getting Help

**For Developers:**
- Check `/LEAD_CONCIERGE_BRAND_GUIDE.md` → "Component Patterns" section
- Import from `BrandComponents.tsx`
- Use CSS tokens from `theme.css`

**For AI:**
- "Reference the Lead Concierge brand guide and create [X]"
- "Use BrandComponents for this Lead Concierge feature"
- "Follow Lead Concierge design tokens for this page"

**For Designers:**
- Open `/LEAD_CONCIERGE_BRAND_GUIDE.md`
- Copy exact colors and gradients
- Follow documented patterns

---

**The golden rule:** When in doubt, check the brand guide first, then look at the existing landing page components as examples.
