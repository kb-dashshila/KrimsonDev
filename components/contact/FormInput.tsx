interface FormInputProps {
  placeholder: string;
  textarea?: boolean;
}

export default function FormInput({ placeholder, textarea }: FormInputProps) {
  const classes =
    "w-full rounded-xl border border-slate-700 bg-[#0b1437]/70 px-5 py-4 text-white outline-none transition focus:border-blue-500";

  if (textarea) {
    return <textarea rows={6} placeholder={placeholder} className={classes} />;
  }

  return <input placeholder={placeholder} className={classes} />;
}
