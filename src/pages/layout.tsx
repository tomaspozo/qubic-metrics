import { Outlet } from "react-router-dom";

import { TopBar } from "@/components/top-bar";
import { Footer } from "@/components/footer";

export default function Layout() {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-6 max-w-8xl w-full">
        <TopBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
