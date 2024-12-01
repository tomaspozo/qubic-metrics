import { NavLink, useLocation } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const location = useLocation();
  return (
    <NavLink
      to={{
        pathname: href,
        search: location.search,
      }}
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
