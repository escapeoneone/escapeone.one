import styles from "./Header.module.css";
import HeaderItem from "./HeaderItem";

export default function Header() {
    return (<>
        <header className={styles.header}>
            <nav className={styles["header-logo-nav"]}>
                <a className={styles["header-logo"]} href="/">escapeoneone.</a>
            </nav>
            <nav>
                <HeaderItem href="projects" text="My projects"></HeaderItem>
            </nav>

        </header>
    </>)
}
