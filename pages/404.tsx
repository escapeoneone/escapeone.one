import Link from 'next/link'
import Header from "../components/Header";
import HeaderItem from "../components/HeaderItem";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styles404 from '../styles/404.module.css'

export default function FourOhFour() {
    return <>
        <Head>
            <title>404 | escapeone.one</title>
            <link rel="icon" href="/favicon.png" />
        </Head>

        <Header />

        <div className={styles["main"]}>
            <div style={{background: "white"}}>
                <h1 className={styles["title-text"] + " " + styles404["title"]}>404</h1>
            </div>
            <h5 className={styles["subtitle-text"] + " " + styles404["subtitle"]}>Sorry, server not found this page</h5>
            <div className={styles["button"]}>
                <HeaderItem text="Home" className="rainbow-animated" href=""></HeaderItem>
            </div>
        </div>
    </>
}