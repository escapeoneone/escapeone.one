import Link from "next/link";
import styles from "./HeaderItem.module.css";

export default function HeaderItem(props) {
    return (<>
        <Link href={"/" + props.href}>
            <a className={styles["header-menu-item"]}>{props.text}</a>
        </Link>
    </>);
}
