import { NavItem } from "./nav-item";
import { ThemeSwitcher } from "./theme-switcher";

export function TopBar() {
  return (
    <header className="w-full mx-auto">
      <div className="w-full flex px-4 h-14 items-center justify-between rounded-xl bg-background/80 backdrop-blur-sm border shadow-sm">
        <span className="font-semibold">QubicMetrics</span>
        <div className="flex flex-1 items-center gap-2 justify-end">
          <nav className="flex items-center gap-0.5">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/open-source">Open Source</NavItem>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}
