import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";



export const metadata: Metadata = {
  title: "CyberLearn",
  description: "Learn internet safety topics with the help of an AI tutor.",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
