import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";

export function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={href}
      className={buttonVariants({
        variant: "link",
        className: "font-light",
      })}
    >
      {children}
    </Link>
  );
}
