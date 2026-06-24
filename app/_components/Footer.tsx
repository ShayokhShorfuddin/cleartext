import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-10 py-3 border-t">
      <div className="flex gap-x-2 text-sm">
        <p className="font-medium">
          Cleartext<span className="text-green-600">.</span>
        </p>
        <p className="text-neutral-700">
          &copy; <span className="year">{new Date().getFullYear()}</span>{" "}
          Cleartext
        </p>
      </div>

      {/* TODO: Needs more work here */}
      <div className="flex items-center gap-x-5 text-sm text-neutral-700">
        <Link href={"/build"} className="hover:underline underline-offset-4">
          Builder
        </Link>
        <Link href={"/validate"} className="hover:underline underline-offset-4">
          Validator
        </Link>
        <Link
          href={"/spec-guide"}
          className="hover:underline underline-offset-4"
        >
          Spec Guide
        </Link>
        <Link
          target="_blank"
          href={"https://github.com/ShayokhShorfuddin/cleartext"}
          className="hover:underline underline-offset-4"
        >
          GitHub Repo
        </Link>
        <Link
          target="_blank"
          href={
            "https://github.com/ShayokhShorfuddin/cleartext/blob/main/LICENSE.txt"
          }
          className="hover:underline underline-offset-4"
        >
          License
        </Link>
      </div>
    </footer>
  );
}
