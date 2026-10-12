import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-5 text-center"
      style={{ background: "var(--bg-page)", color: "var(--text-primary)" }}
    >
      <p
        className="text-8xl font-bold select-none"
        style={{ color: "var(--bg-muted)", fontFamily: "'JetBrains Mono', monospace" }}
      >
        404
      </p>
      <h1 className="mt-2 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm" style={{ color: "var(--text-muted)" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        style={{ background: "var(--accent)" }}
      >
        <Home size={14} />
        Back to Home
      </Link>
    </div>
  );
}
