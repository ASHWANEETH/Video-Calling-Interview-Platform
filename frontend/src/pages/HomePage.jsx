import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import toast from "react-hot-toast";
function HomePage() {
  return (
    <>
      <button
        className="btn btn-accent"
        onClick={() => toast.success("hey! suiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")}
      >
        Click me!
      </button>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </>
  );
}

export default HomePage;
