import React from "react";
import styles from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className={styles.wrapper}>
            <Link href="/">
                <div className={styles.leftWrapper}>
                    <div className={styles.logoBox}>
                        <p>
                            recycle
                            <span>to</span>
                            earn
                        </p>
                    </div>
                </div>
            </Link>
        </nav>
    );
}
