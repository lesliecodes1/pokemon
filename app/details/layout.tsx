import "@fontsource/inter";
import Link from "next/link";
import styles from "../../styles/page.module.css";

export const metadata = {
  title: "Details",
  description: "Created by Leslie",
};

export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
      <Link legacyBehavior href="/">
          <a className={styles.fancy}>
            <span className={styles.topkey}></span>
            <span className={styles.text}>Return</span>
            <span className={styles.bottomkey1}></span>
            <span className={styles.bottomkey2}></span>
          </a>
        </Link>
      </div>
      <div>{children}</div>
      <div>
        <Link legacyBehavior href="/">
          <a className={styles.fancy}>
            <span className={styles.topkey}></span>
            <span className={styles.text}>Home</span>
            <span className={styles.bottomkey1}></span>
            <span className={styles.bottomkey2}></span>
          </a>
        </Link>
      </div>
    </div>
  );
}
