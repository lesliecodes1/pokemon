import "../styles/globals.css";
import "@fontsource/inter";

export const metadata = {
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
