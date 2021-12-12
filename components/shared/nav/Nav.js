import React from "react";
import styles from "./nav.module.scss";
import { Fade as Hamburger } from "hamburger-react";
import useWindowWidth from "hooks/useWindowWidth";

import { useState } from "react";

function Menu() {
    return (
        <ul className={styles.menu}>
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
        </ul>
    );
}

function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={styles.hamburgerMenu}>
            <div className={`${styles.hamburger} ${isOpen && styles.hamburgerActive} `}>
                <Hamburger
                    rounded
                    toggled={isOpen}
                    color={isOpen ? "#fff" : "#2d3748"}
                    onToggle={(toggled) => {
                        if (toggled) setOpen(true);
                        else setOpen(false);
                    }}
                />
            </div>

            <div className={`${styles.menuBoxMobile} ${isOpen && styles.menuBoxMobileActive}`}>
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
                </ul>
            </div>
        </div>
    );
}

export default function Nav() {
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
                {useWindowWidth() > 1280 ? <Menu /> : <HamburgerMenu />}
            </div>
        </nav>
    );
}
