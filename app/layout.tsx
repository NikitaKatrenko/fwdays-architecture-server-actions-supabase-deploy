import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "FwDaysArchitecture",
  description: "Chapter 1, lesson 2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
