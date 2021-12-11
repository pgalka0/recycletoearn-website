import React from "react";
import styles from "./nav.module.scss";
import { Fade as Hamburger } from "hamburger-react";
import useWindowWidth from "hooks/useWindowWidth";

import { useState } from "react";

export default function Nav() {
    const [isOpen, setOpen] = useState();

    return (
        <nav className={styles.wrapper}>
            <div className={styles.leftWrapper}>
                <div className={styles.logoBox}>
                    <img src="logoPurpleSaturated.png" alt="logo" />
                    <p>
                        recycle
                        <span>to</span>
                        earn
                    </p>
                </div>
            </div>
            <div className={styles.rightWrapper}>
                {useWindowWidth() > 1280 ? (
                    <div className={styles.menuBox}>
                        <span>
                            <a href="#">Home</a>
                        </span>
                        <span>
                            <a href="#">Coin</a>
                        </span>
                        <span>
                            <a href="#">Achievements</a>
                        </span>
                        <span>
                            <a href="#">About</a>
                        </span>
                    </div>
                ) : (
                    <>
                        <div style={{ zIndex: "5" }}>
                            <Hamburger
                                color={isOpen ? "#fff" : "#000"}
                                onToggle={(toggled) => {
                                    if (toggled) {
                                        setOpen("active");
                                    } else {
                                        setOpen();
                                    }
                                }}
                            />
                        </div>

                        <div
                            className={`${styles.menuBoxMobile} ${isOpen && styles.menuBoxMobileActive
                                }`}
                        >
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Coin</a>
                                </li>
                                <li>
                                    <a href="#">Achievements</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li className="social-links">
                                    <a href="">
                                        <img src="/social-media/facebook-icon.svg" alt="Facebook" />
                                    </a>
                                    <a href="">
                                        <img src="/social-media/twitter-icon.svg" alt="Twitter" />
                                    </a>
                                    <a href="">
                                        <img src="/social-media/telegram-icon.svg" alt="Telegram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
}