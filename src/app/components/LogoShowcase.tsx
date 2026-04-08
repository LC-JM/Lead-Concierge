/**
 * LEAD CONCIERGE LOGO SHOWCASE
 * 
 * Display all logo variations and use cases
 */

import { motion } from "motion/react";
import {
  LeadConciergeLogo,
  LeadConciergeLogoMinimal,
  LeadConciergeLogoBadge,
  LeadConciergeLogoShield,
  LeadConciergeLogoCircuit,
} from "./LeadConciergeLogo";

export function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Lead Concierge Logo System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional logo designs following the Lead Concierge brand guidelines
          </p>
        </motion.div>

        {/* Primary Logo - Full */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Primary Logo</h2>
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-100">
            <div className="flex flex-col items-center gap-8">
              <LeadConciergeLogo variant="full" size="xl" animate />
              <div className="grid md:grid-cols-3 gap-8 w-full">
                <div className="flex flex-col items-center gap-4">
                  <LeadConciergeLogo variant="full" size="lg" />
                  <span className="text-sm text-gray-600">Large</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <LeadConciergeLogo variant="full" size="md" />
                  <span className="text-sm text-gray-600">Medium</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <LeadConciergeLogo variant="full" size="sm" />
                  <span className="text-sm text-gray-600">Small</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Logo Variants */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Logo Variants</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Icon Only */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Icon Only</h3>
              <div className="flex items-center justify-center gap-6 mb-4">
                <LeadConciergeLogo variant="icon" size="xl" />
                <LeadConciergeLogo variant="icon" size="lg" />
                <LeadConciergeLogo variant="icon" size="md" />
                <LeadConciergeLogo variant="icon" size="sm" />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Perfect for app icons, favicons, and tight spaces
              </p>
            </div>

            {/* Text Only */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Text Only</h3>
              <div className="flex flex-col items-center gap-4">
                <LeadConciergeLogo variant="text" size="lg" />
                <LeadConciergeLogo variant="text" size="md" />
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                Use when icon is already present or in text-heavy contexts
              </p>
            </div>
          </div>
        </motion.section>

        {/* Alternative Designs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Alternative Designs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Minimal */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="flex flex-col items-center gap-4">
                <LeadConciergeLogoMinimal size="lg" />
                <h3 className="text-lg font-semibold text-gray-900">Minimal</h3>
                <p className="text-sm text-gray-600 text-center">
                  "LC" monogram for compact spaces
                </p>
              </div>
            </div>

            {/* Badge */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="flex flex-col items-center gap-4">
                <LeadConciergeLogoBadge size="lg" />
                <h3 className="text-lg font-semibold text-gray-900">Badge</h3>
                <p className="text-sm text-gray-600 text-center">
                  Butler concierge service icon
                </p>
              </div>
            </div>

            {/* Shield */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="flex flex-col items-center gap-4">
                <LeadConciergeLogoShield size="lg" />
                <h3 className="text-lg font-semibold text-gray-900">Shield</h3>
                <p className="text-sm text-gray-600 text-center">
                  Trust and reliability focused
                </p>
              </div>
            </div>

            {/* Circuit */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="flex flex-col items-center gap-4">
                <LeadConciergeLogoCircuit size="lg" />
                <h3 className="text-lg font-semibold text-gray-900">Circuit</h3>
                <p className="text-sm text-gray-600 text-center">
                  Tech/automation emphasis
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Dark Backgrounds */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            On Dark Backgrounds
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Brand Gradient Background */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 rounded-3xl p-12 shadow-xl">
              <div className="flex flex-col items-center gap-8">
                <LeadConciergeLogo variant="full" size="lg" />
                <p className="text-white text-center text-sm">
                  Primary logo on brand gradient
                </p>
              </div>
            </div>

            {/* Dark Gray Background */}
            <div className="bg-gray-900 rounded-3xl p-12 shadow-xl">
              <div className="flex flex-col items-center gap-8">
                <LeadConciergeLogo variant="full" size="lg" />
                <p className="text-white text-center text-sm">
                  Primary logo on dark background
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Usage Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Usage Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <span className="text-green-600">✓</span> Do
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Use the primary logo on white or light backgrounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Maintain clear space around the logo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Use icon-only version for small sizes (under 100px)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Keep the gradient colors consistent with brand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Use alternative designs for specific contexts (badges, icons)</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <span className="text-red-600">✗</span> Don't
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Change the gradient colors or direction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Stretch or distort the logo proportions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Place on busy backgrounds that reduce legibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Add effects like drop shadows or outlines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Use outdated or modified versions</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Component Usage Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Component Usage
          </h2>
          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`// Import the logo components
import { LeadConciergeLogo } from "./components/LeadConciergeLogo";

// Primary logo (full with text)
<LeadConciergeLogo variant="full" size="lg" animate />

// Icon only (for nav, favicon)
<LeadConciergeLogo variant="icon" size="md" />

// Text only (when icon is present)
<LeadConciergeLogo variant="text" size="md" />

// Alternative designs
import {
  LeadConciergeLogoMinimal,
  LeadConciergeLogoBadge,
  LeadConciergeLogoShield,
  LeadConciergeLogoCircuit,
} from "./components/LeadConciergeLogo";

<LeadConciergeLogoMinimal size="lg" />
<LeadConciergeLogoBadge size="md" />
<LeadConciergeLogoShield size="lg" />
<LeadConciergeLogoCircuit size="md" />`}</code>
            </pre>
          </div>
        </motion.section>
      </div>
    </div>
  );
}