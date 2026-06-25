"use client";

import { Code } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeroCTAButton() {
  const router = useRouter();

  return (
    <div className="flex gap-x-3">
      <button
        type="button"
        onClick={() => {
          router.push("/build");
        }}
        className="bg-dark-green text-white px-5.5 py-2 rounded-xs text-sm font-medium hover:cursor-pointer"
      >
        Build a file
        <Code className="inline ml-1.5" size={16} />
      </button>

      <button
        type="button"
        onClick={() => {
          router.push("/validate");
        }}
        className="border border-neutral-300 hover:border-dark-green px-5.5 py-2 rounded-xs text-sm font-medium hover:cursor-pointer"
      >
        Validate a file
      </button>
    </div>
  );
}
