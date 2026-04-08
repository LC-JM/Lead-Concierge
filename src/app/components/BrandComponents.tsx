/**
 * LEAD CONCIERGE BRAND COMPONENTS
 * 
 * Reusable, brand-consistent components that maintain
 * the Lead Concierge visual identity across all materials.
 * 
 * Reference: /LEAD_CONCIERGE_BRAND_GUIDE.md
 */

import { motion } from "motion/react";
import { ReactNode } from "react";

/* ============================================
   BUTTONS
   ============================================ */

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * Primary CTA Button
 * Use for main conversion actions (Get Started, Book Demo, etc.)
 */
export function BrandButtonPrimary({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

/**
 * Secondary CTA Button
 * Use for secondary actions (Call Now, Contact, etc.)
 */
export function BrandButtonSecondary({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

/* ============================================
   CARDS & PANELS
   ============================================ */

interface CardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

/**
 * Premium Gradient Card
 * Use for featured content, "with system" comparisons, value props
 */
export function BrandCardPremium({ children, className = "", animate = true, delay = 0 }: CardProps) {
  const card = (
    <div className={`bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-xl text-white ${className}`}>
      {children}
    </div>
  );

  if (!animate) return card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {card}
    </motion.div>
  );
}

/**
 * Light Card
 * Use for standard content, service descriptions, feature lists
 */
export function BrandCardLight({ children, className = "", animate = true, delay = 0 }: CardProps) {
  const card = (
    <div className={`bg-white rounded-2xl p-8 shadow-lg border border-blue-100 ${className}`}>
      {children}
    </div>
  );

  if (!animate) return card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {card}
    </motion.div>
  );
}

/**
 * Subtle Gradient Card
 * Use for calculators, forms, interactive elements
 */
export function BrandCardSubtle({ children, className = "", animate = true, delay = 0 }: CardProps) {
  const card = (
    <div className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-lg ${className}`}>
      {children}
    </div>
  );

  if (!animate) return card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {card}
    </motion.div>
  );
}

/* ============================================
   SECTIONS & CONTAINERS
   ============================================ */

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "white" | "light" | "gradient" | "gradient-dark";
}

/**
 * Brand Section Container
 * Standard section wrapper with appropriate backgrounds
 */
export function BrandSection({ children, className = "", variant = "white" }: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    light: "bg-gray-50",
    gradient: "bg-gradient-to-br from-gray-50 to-blue-50",
    "gradient-dark": "bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white",
  };

  return (
    <section className={`py-20 ${backgrounds[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

/**
 * Section Header
 * Standard section title + description pattern
 */
interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  animate?: boolean;
}

export function BrandSectionHeader({ title, description, className = "", animate = true }: SectionHeaderProps) {
  const header = (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      {description && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>}
    </div>
  );

  if (!animate) return header;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {header}
    </motion.div>
  );
}

/* ============================================
   FORM ELEMENTS
   ============================================ */

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

/**
 * Brand Text Input
 * Standard form input with brand styling
 */
export function BrandInput({ type = "text", placeholder, value, onChange, className = "", required = false }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    />
  );
}

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
  required?: boolean;
}

/**
 * Brand Textarea
 * Standard textarea with brand styling
 */
export function BrandTextarea({ placeholder, value, onChange, className = "", rows = 4, required = false }: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${className}`}
    />
  );
}

/* ============================================
   ANIMATIONS
   ============================================ */

/**
 * Standard Motion Container
 * Use for most animated elements
 */
interface MotionContainerProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function BrandMotionContainer({ children, delay = 0, direction = "up", className = "" }: MotionContainerProps) {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   CTA GROUPS
   ============================================ */

/**
 * Standard CTA Button Group
 * Primary + Secondary button combination
 */
interface CTAGroupProps {
  primaryText: string;
  secondaryText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

export function BrandCTAGroup({ primaryText, secondaryText, onPrimaryClick, onSecondaryClick, className = "" }: CTAGroupProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
      <BrandButtonPrimary onClick={onPrimaryClick}>{primaryText}</BrandButtonPrimary>
      <BrandButtonSecondary onClick={onSecondaryClick}>{secondaryText}</BrandButtonSecondary>
    </div>
  );
}
