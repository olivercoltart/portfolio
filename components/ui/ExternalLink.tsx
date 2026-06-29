interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  showArrow?: boolean;
}

export default function ExternalLink({
  href,
  children,
  showArrow = true,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
      {showArrow && <span aria-hidden="true"> ↗</span>}
    </a>
  );
}
