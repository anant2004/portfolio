import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode;
  label: string;
}

export function Badge({ icon, label, className, ...props }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-2 rounded-full border border-emerald-400 
      bg-black/60 px-4 py-1.5 text-emerald-400 text-base font-medium
      hover:bg-emerald-400 hover:text-black transition-colors ${className}
      `}
      {...props}
    >
      {icon}
      {label}
    </span>
  );
}
