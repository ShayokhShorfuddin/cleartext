import { Moon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between px-10 py-3 border-b">
        {/* Logo */}
        <p className="font-medium text-lg">
          Cleartext<span className="text-green-600">.</span>
        </p>

        {/* Links */}
        <div className="flex items-center gap-x-5 text-sm text-neutral-700">
          <Link href={"/build"} className="hover:underline underline-offset-4">
            Builder
          </Link>
          <Link
            href={"/validate"}
            className="hover:underline underline-offset-4"
          >
            Validator
          </Link>
          <Link
            href={"/spec-guide"}
            className="hover:underline underline-offset-4"
          >
            Spec Guide
          </Link>
        </div>

        {/* Light/dark mode toggle icon*/}
        {/* TODO: Implement  Light/dark mode toggle*/}
        <Moon strokeWidth={1.5} size={20} />
      </nav>
    </header>
  );
}
