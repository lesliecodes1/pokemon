import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "../../styles/characters.module.css";

const inter = Inter({ subsets: ["latin"] });

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
    <div>
      <html lang="en">
        <body>{children}</body>
        <Link legacyBehavior href="/">
          <a>Home</a>
        </Link>
      </html>
    </div>
  );
}
