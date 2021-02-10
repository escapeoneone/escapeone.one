import styles from "./Header.module.css";
import Head from 'next/head';
import Header from "../components/Header";

export default function Projects() {
    return (<>
        <Head>
            <title>Projects | escapeone.one</title>
            <link rel="icon" href="/favicon.png" />
        </Head>

        <Header />
    </>)
}