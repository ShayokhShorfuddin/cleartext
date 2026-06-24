"use client";

import { useRouter } from "next/navigation";

export function HeroCTAButton() {
  const router = useRouter();

  return (
    <div className="flex gap-x-2">
      {/* TODO: Need "build" icon */}
      <button
        type="button"
        onClick={() => {
          router.push("/build");
        }}
      >
        Build a file
      </button>

      <button
        type="button"
        onClick={() => {
          router.push("/validate");
        }}
      >
        Validate a file
      </button>
    </div>
  );
}
