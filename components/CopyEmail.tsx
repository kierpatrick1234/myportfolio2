"use client";

import { useState } from "react";
import { Icon } from "./Icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="btn-line"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {}
      }}
    >
      {copied ? <Icon.check /> : <Icon.copy />} {copied ? "Copied" : "Copy"}
    </button>
  );
}
