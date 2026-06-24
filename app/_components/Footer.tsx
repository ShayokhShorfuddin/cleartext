import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-10 py-4 border-t">
      <div className="flex gap-x-2 text-sm">
        <p className="font-medium">
          Cleartext<span className="text-green-600">.</span>
        </p>
        <p className="text-neutral-700">
          &copy; <span className="year">{new Date().getFullYear()}</span>{" "}
          Cleartext
        </p>
      </div>

      <BuiltWithPassion />

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

export function BuiltWithPassion() {
  return (
    <div className="flex justify-center items-center gap-x-1.5 text-sm">
      <p>
        Built with <span className="italic">passion</span> by{" "}
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/shayokh-shorfuddin/"}
          className="hover:underline underline-offset-4"
        >
          Shayokh
        </Link>
      </p>

      <LinkedInIcon />
    </div>
  );
}

function LinkedInIcon() {
  return (
    // TODO: This svg might need some A11y check or fixes. Check google accessibility to verify
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <title>LinkedIn icon</title>
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  );
}
