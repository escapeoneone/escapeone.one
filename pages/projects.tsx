import stylesHome from '../styles/Home.module.css'
import Head from 'next/head';
import Header from "../components/Header";
import styles from "../styles/Projects.module.css";
import HeaderItem from "../components/HeaderItem";
import Project from "../components/Project";

export default function Projects() {
    return (<>
        <Head>
            <title>Projects | escapeone.one</title>
            <link rel="icon" href="/favicon.png" />
        </Head>

        <Header />

        <div className={[stylesHome["main"], styles["main"]].join(" ")}>

            <Project 
            name="escapeone.one"
            github="escapeoneone/escapeone.one"
            web="https://escapeone.one"
            description="My awesome web site!"
            ></Project>

            <Project 
            name="Electik"
            github="bisma-company/electik"
            description="Open-source Web Browser!\n The project was made by the bisma team"
            ></Project>

        </div>
    </>)
}