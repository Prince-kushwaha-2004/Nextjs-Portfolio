import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "Prince Kushwaha | Full Stack Developer",
  description:
    "Prince Kushwaha — Full Stack Developer specializing in React, Next.js, Node.js, and Django.",
  metadataBase: new URL("https://princekushwaha.tech"),
  keywords: ["Prince Kushwaha", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Prince Kushwaha" }],
  creator: "Prince Kushwaha",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Prince Kushwaha | Full Stack Developer",
    description: "Full Stack Developer — React, Next.js, Node.js, Django.",
    images: [{ url: "/logo/icon.png", width: 1200, height: 630, alt: "Prince's Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Kushwaha",
    images: ["/logo/icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo/icon.png" sizes="any" />
      </head>
      <body className={`${sans.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(18, 10, 36, 0.88)",
              backdropFilter: "blur(16px)",
              color: "#f5eeff",
              border: "1px solid rgba(168, 85, 247, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 16px rgba(168, 85, 247, 0.2)",
              borderRadius: "14px",
              fontSize: "0.85rem",
              fontFamily: "var(--font-sans)",
            },
          }}
        />
      </body>
    </html>
  );
}
