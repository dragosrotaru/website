import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { NAME, SITE_URL } from "./info";

const inter = Inter({ subsets: ["latin"] });

const AUTHOR = NAME;
const DESCRIPTION = "Personal Website";
const TITLE = AUTHOR;

const icons = ["icons/icon.png", "icons/tile.png"];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [AUTHOR, ...AUTHOR.split(" ")],
  openGraph: {
    title: TITLE,
    siteName: AUTHOR,
    description: DESCRIPTION,
    url: SITE_URL,

    type: "website",
    images: icons,
  },
  metadataBase: new URL(SITE_URL),
  twitter: {
    title: TITLE,
    creator: AUTHOR,
    description: DESCRIPTION,
    images: [],
  },
  authors: {
    url: SITE_URL,
    name: AUTHOR,
  },
  creator: AUTHOR,
  robots: "index, follow",
  themeColor: "#000000",
  colorScheme: "dark",
  applicationName: AUTHOR,
  verification: {},
  appleWebApp: {
    statusBarStyle: "black-translucent",
    capable: true,
    title: TITLE,
  },
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1.0",
  icons: icons,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QH54W7DVXV"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ window.dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-QH54W7DVXV');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        {/*  <Script
          async
          defer
          strategy="afterInteractive"
          src="https://client.ping.buzz/ping.min.js?widget_id=90185d3f-9909-4b6e-bbaa-5b9d861baa8e"
          id="huckleberry-ping-insert-script"
        ></Script> */}
      </body>
    </html>
  );
}
