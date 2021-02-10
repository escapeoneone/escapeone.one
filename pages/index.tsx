import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | escapeone.one</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <div className={styles["main"]}>
        <h1 className={styles["title-text"]}>Hi! I'm escapeoneone</h1>
        <h5 className={styles["subtitle-text"]}>I is a TypeScript, React programmer</h5>
        <div className="intro-button-wrapper">
          <button className="button">VIEW MY WORKS</button></div>
      </div>

    </div>
  )
}
