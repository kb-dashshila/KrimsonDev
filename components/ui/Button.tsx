"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  className?: string;
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-3 rounded-xl font-semibold transition-transform duration-150";

  const variants =
    variant === "primary"
      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
      : "bg-transparent text-[color:var(--text-primary)] border border-theme";

  return (
    <button {...rest} className={`${base} ${variants} ${className}`.trim()}>
      {children}
    </button>
  );
}
