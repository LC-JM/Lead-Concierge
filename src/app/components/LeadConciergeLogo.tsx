/**
 * LEAD CONCIERGE LOGO COMPONENT
 * 
 * Professional logo designs using the Lead Concierge brand gradient.
 * Multiple variants available for different use cases.
 * 
 * Reference: /LEAD_CONCIERGE_BRAND_GUIDE.md
 */

import { motion } from "motion/react";

interface LogoProps {
  variant?: "full" | "icon" | "text";
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
  className?: string;
}

export function LeadConciergeLogo({
  variant = "full",
  size = "md",
  animate = false,
  className = "",
}: LogoProps) {
  // Size configurations
  const sizes = {
    sm: {
      icon: "w-8 h-8",
      text: "text-xl",
      gap: "gap-2",
    },
    md: {
      icon: "w-12 h-12",
      text: "text-2xl",
      gap: "gap-3",
    },
    lg: {
      icon: "w-16 h-16",
      text: "text-4xl",
      gap: "gap-4",
    },
    xl: {
      icon: "w-24 h-24",
      text: "text-5xl",
      gap: "gap-6",
    },
  };

  const LogoIcon = () => (
    <svg
      className={sizes[size].icon}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient Definition */}
      <defs>
        <linearGradient
          id="leadConciergeLogo"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
      </defs>

      {/* Letter "L" + Chat Bubble Concept */}
      {/* Main "L" shape representing "Lead" */}
      <path
        d="M20 15 L20 75 L45 75"
        stroke="url(#leadConciergeLogo)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Chat/Message bubble representing AI conversation */}
      <circle
        cx="70"
        cy="40"
        r="22"
        fill="url(#leadConciergeLogo)"
        opacity="0.9"
      />

      {/* AI dots inside bubble (representing active conversation) */}
      <circle cx="62" cy="40" r="3" fill="white" />
      <circle cx="70" cy="40" r="3" fill="white" />
      <circle cx="78" cy="40" r="3" fill="white" />

      {/* Small notification dot (representing 24/7 active) */}
      <circle cx="85" cy="25" r="6" fill="#9333ea" />
      <circle cx="85" cy="25" r="4" fill="white" />
    </svg>
  );

  const LogoText = () => (
    <div className="flex flex-col leading-tight">
      <span
        className={`${sizes[size].text} font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 bg-clip-text text-transparent`}
      >
        Lead Concierge
      </span>
      {size !== "sm" && (
        <span className="text-sm text-gray-600 font-medium">
          AI-Powered Lead Management
        </span>
      )}
    </div>
  );

  const renderLogo = () => {
    switch (variant) {
      case "icon":
        return <LogoIcon />;
      case "text":
        return <LogoText />;
      case "full":
      default:
        return (
          <div className={`flex items-center ${sizes[size].gap}`}>
            <LogoIcon />
            <LogoText />
          </div>
        );
    }
  };

  const logo = <div className={className}>{renderLogo()}</div>;

  if (!animate) return logo;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {logo}
    </motion.div>
  );
}

/**
 * ALTERNATE LOGO DESIGNS
 * Additional concepts for different use cases
 */

interface AlternateLogoProps {
  design?: "minimal" | "badge" | "shield" | "circuit";
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Minimal Letter Mark - "LC" monogram
 */
export function LeadConciergeLogoMinimal({
  size = "md",
  className = "",
}: Omit<AlternateLogoProps, "design">) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <svg
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="lcMinimalGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
      </defs>

      {/* Rounded square background */}
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="16"
        fill="url(#lcMinimalGradient)"
      />

      {/* "LC" letterform in white */}
      <path
        d="M25 30 L25 70 L40 70 M55 30 Q75 30 75 45 Q75 60 55 60"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Badge Style - Premium seal design
 */
export function LeadConciergeLogoBadge({
  size = "md",
  className = "",
}: Omit<AlternateLogoProps, "design">) {
  const sizes = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <svg
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="lcBadgeGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      {/* Outer badge circle */}
      <circle cx="60" cy="60" r="55" fill="url(#lcBadgeGradient)" />
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Butler Silhouette */}
      {/* Head */}
      <circle cx="60" cy="44" r="14" fill="white" />
      
      {/* Shoulders and formal jacket */}
      <path
        d="M 60 58 L 46 62 L 46 86 L 50 90 L 70 90 L 74 86 L 74 62 Z"
        fill="white"
      />
      
      {/* Bow tie */}
      <path
        d="M 52 60 L 50 62 L 52 64 L 60 62 L 68 64 L 70 62 L 68 60 L 60 62 Z"
        fill="#2563eb"
      />
      
      {/* Lapels detail */}
      <line x1="52" y1="66" x2="56" y2="86" stroke="#2563eb" strokeWidth="1.5" />
      <line x1="68" y1="66" x2="64" y2="86" stroke="#2563eb" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Shield Style - Security/Trust emphasis
 */
export function LeadConciergeLogoShield({
  size = "md",
  className = "",
}: Omit<AlternateLogoProps, "design">) {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  };

  return (
    <svg
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="lcShieldGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
      </defs>

      {/* Shield shape */}
      <path
        d="M50 10 L85 25 L85 55 Q85 90 50 110 Q15 90 15 55 L15 25 Z"
        fill="url(#lcShieldGradient)"
      />

      {/* Checkmark */}
      <path
        d="M35 55 L45 68 L68 38"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Circuit/Tech Style - Emphasizes AI/automation
 */
export function LeadConciergeLogoCircuit({
  size = "md",
  className = "",
}: Omit<AlternateLogoProps, "design">) {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  };

  return (
    <svg
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="lcCircuitGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
      </defs>

      {/* Central processor/chip */}
      <rect
        x="35"
        y="35"
        width="30"
        height="30"
        rx="4"
        fill="url(#lcCircuitGradient)"
      />

      {/* Circuit lines emanating outward */}
      <line
        x1="50"
        y1="35"
        x2="50"
        y2="15"
        stroke="url(#lcCircuitGradient)"
        strokeWidth="3"
      />
      <circle cx="50" cy="12" r="4" fill="#3b82f6" />

      <line
        x1="65"
        y1="50"
        x2="85"
        y2="50"
        stroke="url(#lcCircuitGradient)"
        strokeWidth="3"
      />
      <circle cx="88" cy="50" r="4" fill="#9333ea" />

      <line
        x1="50"
        y1="65"
        x2="50"
        y2="85"
        stroke="url(#lcCircuitGradient)"
        strokeWidth="3"
      />
      <circle cx="50" cy="88" r="4" fill="#6b21a8" />

      <line
        x1="35"
        y1="50"
        x2="15"
        y2="50"
        stroke="url(#lcCircuitGradient)"
        strokeWidth="3"
      />
      <circle cx="12" cy="50" r="4" fill="#2563eb" />

      {/* Inner detail */}
      <circle cx="50" cy="50" r="8" fill="white" />
      <circle cx="50" cy="50" r="4" fill="#2563eb" />
    </svg>
  );
}