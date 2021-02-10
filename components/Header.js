import styles from "./Header.module.css";

export default function Header() {
    return (<>
        <header className={styles.header}>
            <nav className={styles["header-logo-nav"]}>
                <a className={styles["header-logo"]} href="/">escapeoneone.</a>
            </nav>
            <nav>
                <a className={styles["header-menu-item"]} href="/projects">Projects</a>
            </nav>

        </header>
    </>)
}
