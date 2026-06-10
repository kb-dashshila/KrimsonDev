interface FormInputProps {
  placeholder: string;
  textarea?: boolean;
}

export default function FormInput({ placeholder, textarea }: FormInputProps) {
  const classes =
    "w-full rounded-xl border border-theme bg-[color:var(--input-bg)] px-5 py-4 text-[color:var(--text-primary)] outline-none transition focus:border-[color:var(--primary)]";

  if (textarea) {
    return <textarea rows={6} placeholder={placeholder} className={classes} />;
  }

  return <input placeholder={placeholder} className={classes} />;
}
