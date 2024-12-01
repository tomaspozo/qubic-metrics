import { NavLink } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        buttonVariants({
          variant: "link",
          className: cn("font-light", isActive && "underline"),
        })
      }
    >
      {children}
    </NavLink>
  );
}
