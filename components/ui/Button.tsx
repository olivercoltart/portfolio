import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

interface Props {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:opacity-70",
  secondary: "border border-stroke text-foreground hover:bg-surface",
  ghost: "text-muted hover:text-foreground",
};

const base =
  "inline-flex items-center gap-2 px-5 py-3 text-label font-medium tracking-widest uppercase transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed";

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  type = "button",
  disabled,
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
