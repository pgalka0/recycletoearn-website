import React from "react";
import styles from "./nav.module.scss";
import { Fade as Hamburger } from "hamburger-react";
import useWindowWidth from "hooks/useWindowWidth";
import Link from "next/link";

import { useState } from "react";

function Menu() {
    return (
        <ul className={styles.menu}>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
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
        </ul>
    );
}

function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={styles.hamburgerMenu} id="home">
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
                        <Link href="/" onClick={() => setOpen(false)}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <a href="#about" onClick={() => setOpen(false)}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#coin" onClick={() => setOpen(false)}>
                            Coin
                        </a>
                    </li>
                    <li>
                        <a href="#achievements" onClick={() => setOpen(false)}>
                            Achievements
                        </a>
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
