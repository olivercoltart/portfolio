interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block px-2 py-0.5 font-mono text-label tracking-wide border border-stroke text-muted ${className}`}
    >
      {children}
    </span>
  );
}
