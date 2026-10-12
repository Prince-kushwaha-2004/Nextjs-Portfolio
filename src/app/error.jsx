"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-5 text-center"
      style={{ background: "var(--bg-page)", color: "var(--text-primary)" }}
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{ background: "rgba(248,81,73,0.1)", color: "#f85149" }}
      >
        <AlertTriangle size={28} />
      </div>
      <h1 className="mt-6 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        style={{ background: "var(--accent)" }}
      >
        <RefreshCw size={14} />
        Try Again
      </button>
    </div>
  );
}
