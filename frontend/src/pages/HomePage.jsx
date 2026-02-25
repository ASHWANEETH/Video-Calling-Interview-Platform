import { Link } from "react-router";
import {
  ArrowRightIcon,
  ZapIcon,
  CircleCheckBigIcon,
  CodesandboxIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
function HomePage() {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* Navbar */}
      <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          {/* logo*/}
          <Link className="flex items-center gap-3 hover:scale-102 transition-transform duration-200">
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

          <SignInButton mode="modal">
            <button className="group px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl trasnsition-all duration-200 hover:scale-105 flex items-center gap-2">
              <span>Get Started</span>
              <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 md:gap-6 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="group badge badge-primary badge-lg rounded-xl">
              <ZapIcon className="size-4 group-hover:scale-110 group-hover:text-accent duration-100" />
              <span className="text-white">Real-time Collaboration</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Code Together,
              </span>
              <br />
              <span>Learn Together</span>
            </h1>

            <p className="text-l text-base-content/60 leading-relaxed max-w-l">
              The ultimate platform for collaborative coding interviews and pair
              programming. Connect face-to-face, code in real-time, and ace your
              technical interviews
            </p>

            {/*pills*/}
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-outline rounded-xl">
                <CircleCheckBigIcon className="size-4 text-accent" />
                <span className="font-semibold">Live Video Call</span>
              </div>
              <div className="badge badge-outline rounded-xl">
                <CircleCheckBigIcon className="size-4 text-accent" />
                <span className="font-semibold">Code Editor</span>
              </div>
              <div className="badge badge-outline rounded-xl">
                <CircleCheckBigIcon className="size-4 text-accent" />
                <span className="font-semibold">Multi-Language</span>
              </div>
            </div>

            <div>
              <SignInButton mode="modal">
                <button className="group px-6 py-3 bg-gradient-to-r from-accent to-primary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl trasnsition-all duration-200 hover:scale-102 flex items-center gap-2">
                  <span>Start Coding now</span>
                  <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </SignInButton>
            </div>
          </div>

          {/* Right Image */}
          <img
            src="/hero.png"
            alt="CodeCollab Img"
            className="w-full h-auto p-10"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
