import { Icons } from "./icons";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";

export function TopBar() {
  return (
    <header className="w-full mx-auto">
      <div className="w-full flex px-4 h-14 items-center justify-between rounded-xl bg-background/80 backdrop-blur-sm border shadow-sm">
        <span className="font-semibold">QubicMetrics</span>
        <div className="flex flex-1 items-center gap-2 justify-end">
          <nav className="flex items-center gap-0.5">
            <a
              href="https://github.com/tomaspozo/qubic-metrics"
              target="_blank"
            >
              <Button variant="ghost" className="h-8 w-8 px-0">
                <Icons.gitHub />
              </Button>
            </a>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}
