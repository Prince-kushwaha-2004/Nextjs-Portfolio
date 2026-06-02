import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prince's Portfolio",
  description: "Prince's Portfolio Portfolio Website",
  metadataBase: new URL('https://princekushwaha.tech'),
  keywords: [
    "Prince Kushwaha",
    "Prince Kushwaha Portfolio",
    "Prince Kushwaha Portfolio Website",
    "Prince Kushwaha Portfolio Website",
  ],
  verification: {
    google: '8lVzECKNzw0ZbFmxTEuU1o6Nnw6xIMhSiDe8-vqXtpY',
  },
  authors: [{ name: "Prince Kushwaha" }],
  creator: "Prince Kushwaha",
  publisher: "Prince Kushwaha",
  category: "education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prince's Portfolio",
    description: "Prince's Portfolio",
    images: [
      {
        url: '/logo/icon.png',
        width: 1200,
        height: 630,
        alt: "Prince's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince's Portfolio",
    description: "Portfolio Website",
    images: ['/logo/icon.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-black">
      <head>
        <link rel="icon" href="/logo/icon.png" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <Toaster
          toastOptions={{
            style: {
              background: '#08151d',
              color: '#fff',
            },
          }}
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
