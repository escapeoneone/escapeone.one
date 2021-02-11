import Link from 'next/link'
import Header from "../components/Header";
import HeaderItem from "../components/HeaderItem";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styles404 from '../styles/404.module.css'
import { Typewriter } from 'react-typewriting-effect'

export default function FourOhFour() {
    return <>
        <Head>
            <title>404 | escapeone.one</title>
            <link rel="icon" href="/favicon.png" />
        </Head>

        <Header />

        <div className={styles["main"]}>
            <div style={{background: "white"}}>
                <Typewriter string='404' className={styles["title-text"] + " " + styles404["title"]} delay={80} stopBlinkinOnComplete={true} />
            </div>
            <Typewriter string='Sorry, the server has not found that page' className={styles["subtitle-text"] + " " + styles404["subtitle"]} delay={80} />
            <div className={styles["button"]}>
                <HeaderItem text="Home" href=""></HeaderItem>
            </div>
        </div>
    </>
}