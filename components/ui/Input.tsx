"use client";

import React, { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  textarea?: boolean;
  className?: string;
};

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ textarea, className = "", ...rest }, ref) => {
    const classes =
      "w-full rounded-xl border border-theme bg-[color:var(--input-bg)] px-5 py-4 text-[color:var(--text-primary)] outline-none transition focus:border-[color:var(--primary)] " +
      className;

    if (textarea) {
      return (
        <textarea
          ref={ref as any}
          rows={6}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={classes}
        />
      );
    }

    return (
      <input
        ref={ref as any}
        {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        className={classes}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
