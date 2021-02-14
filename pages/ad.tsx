import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import HeaderItem from "../components/HeaderItem";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ads | escapeone.one</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <div className={styles["main"]}>
        <h1 className={styles["title-text"]}>This is the test of Google AdSense</h1>
      </div>

    </div>
  )
}
