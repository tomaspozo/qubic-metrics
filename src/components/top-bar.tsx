import { ThemeSwitcher } from "./theme-switcher";

export function TopBar() {
  return (
    <header className="w-full mx-auto">
      <div className="flex px-4 h-14 items-center justify-between rounded-xl bg-background/80 backdrop-blur-sm border shadow-sm">
        <span className="font-semibold">QubicMetrics</span>
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <nav className="flex items-center gap-0.5">
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}