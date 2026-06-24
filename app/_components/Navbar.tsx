import { Moon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header>
      <nav className="flex justify-between px-10 py-4 border-b">
        {/* Logo */}
        <p>Cleartext</p>

        {/* Links */}
        <div className="flex items-center gap-x-5 text-sm text-neutral-700">
          <Link href={"/build"}>Builder</Link>
          <Link href={"/validate"}>Validator</Link>
          <Link href={"/spec-guide"}>Spec Guide</Link>
        </div>

        {/* Light/dark mode toggle icon*/}
        {/* TODO: Implement  Light/dark mode toggle*/}
        <Moon strokeWidth={1.5} />
      </nav>
    </header>
  );
}
