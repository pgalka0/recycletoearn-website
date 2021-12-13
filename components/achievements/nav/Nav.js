import React from "react";
import styles from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className={styles.wrapper}>
            <div className={styles.leftWrapper}>
                <Link href="/">
                    <div className={styles.logoBox}>
                        <img src="logoPurpleSaturated.png" alt="logo" />
                        <p>
                            recycle
                            <span>to</span>
                            earn
                        </p>
                    </div>
                </Link>
            </div>
            <div className={styles.rightWrapper}>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
