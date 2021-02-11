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
            <nav>
                <HeaderItem href="dorepl" text="dorepl"></HeaderItem>
                <HeaderItem href="blog" text="Blog"></HeaderItem>
                <HeaderItem href="projects" text="My projects"></HeaderItem>
            </nav>

        </header>
    </>)
}
