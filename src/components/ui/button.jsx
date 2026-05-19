import React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-[#241d18] text-white hover:bg-[#3a3029]",
  ghost: "bg-transparent hover:bg-black/5",
  outline: "border border-[#241d18]/15 bg-transparent hover:bg-white",
};

const sizes = {
  default: "h-10 px-4 py-2",
  lg: "h-11 px-8",
};

export function Button({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
        variants[variant] || variants.default,
        sizes[size] || sizes.default,
        className
      )}
      {...props}
    />
  );
}
