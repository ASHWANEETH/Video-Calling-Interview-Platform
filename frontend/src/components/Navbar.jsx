import { Link, useLocation } from "react-router";
import {
  CodesandboxIcon,
  BookOpenIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();
  // console.log(location)
  const isActive = (path) => {
    return path === location.pathname;
  };
  return (
    <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* logo*/}
        <Link
          to={"/"}
          className="flex items-center gap-3 hover:scale-102 transition-transform duration-200"
        >
          <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
            <CodesandboxIcon className="size-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl bg-white bg-clip-text text-transparent font-mono">
              Code Collab
            </span>
            <span className="text-xs text-base-content/60">
              Video Calling Interview Platform
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-1">
          {/* problems */}
          <Link
            to={"/problems"}
            className={`px-4 py-2 rounded-lg transition-all duration-200 text-white ${isActive("/problems") ? "bg-accent/80" : "bg-primary/20 hover:bg-accent/50"}`}
          >
            <div className="flex items-center gap-2">
              <BookOpenIcon className="size-4" />
              <span className="font-medium hidden sm:inline">Problems</span>
            </div>
          </Link>
          {/* dashboard */}
          <Link
            to={"/dashboard"}
            className={`px-4 py-2 rounded-lg transition-all duration-200 text-white ${isActive("/dashboard") ? "bg-accent/80" : "bg-primary/20 hover:bg-accent/50"}`}
          >
            <div className="flex items-center gap-2">
              <LayoutDashboardIcon className="size-4" />
              <span className="font-medium hidden sm:inline">Dashboard</span>
            </div>
          </Link>
          <div className="ml-4 mt-2">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
