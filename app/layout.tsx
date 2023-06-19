import "../styles/globals.css";
import "@fontsource/inter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokemon Lovers",
  description: "Created by Leslie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
