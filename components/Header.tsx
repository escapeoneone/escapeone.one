import styles from "./Header.module.css";
import HeaderItem from "./HeaderItem";
import Link from "next/link";

export default function Header() {
    return (<>
        <header className={styles.header}>
            <nav className={styles["header-logo-nav"]}>
                <Link href="/">
                    <a className={styles["header-logo"]}>escapeoneone</a>
                </Link>
            </nav>
            <nav className={styles["nav"]}>
                <HeaderItem /*href="blog"*/ text="Blog (not work)"></HeaderItem>
                <HeaderItem href="projects" text="Projects"></HeaderItem>
            </nav>

        </header>
    </>)
}
