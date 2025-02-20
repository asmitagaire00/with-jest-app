import Head from "next/head";
import styles from "@/pages/index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Link href="/home/about">
            <p>This is /pages/home/index.js</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
