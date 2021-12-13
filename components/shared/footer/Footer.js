import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.leftWrapper}>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#coin">Coin</a>
                    </li>
                    <li>
                        <a href="#achievements">Achievements</a>
                    </li>
                    <li>
                        <a href="https://github.com/Piotrek-hub/recycletoearn-website">
                            Github Repo
                        </a>
                    </li>
                    <li>
                        <a href="https://bscscan.com/">BSCscan</a>
                    </li>
                </ul>
            </div>

            <div className={styles.background}>
                recycle<span>to</span>earn
            </div>
            <img
                src="/logoPurpleSaturated.png"
                alt="footerLogo"
                className={styles.rightBottomImg}
            />
        </footer>
    );
}
