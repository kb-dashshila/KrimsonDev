"use client";

import React, { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  textarea?: boolean;
  className?: string;
};

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ textarea, className = "", ...rest }, ref) => {
    const classes =
      "w-full rounded-xl border border-slate-700 bg-[#0b1437]/70 px-5 py-4 text-white outline-none transition focus:border-blue-500 " +
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
