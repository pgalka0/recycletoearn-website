import styles from "./coinInfo.module.scss";
import gsap, { Power4, Back } from "gsap";
import { useEffect, useRef } from "react";

const Web3 = require("web3");
function CoinInfo() {
    const greenBox = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 1,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const tl = gsap.timeline();
                    setTimeout(() => {
                        tl.fromTo(
                            [greenBox.current],
                            { width: 0 },
                            { width: `250px`, duration: 1, ease: Power4 }
                        );
                    }, 500);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        observer.observe(greenBox.current);
    }, []);
    return (
        <div className={styles.wrapper} id="about">
            <div className={styles.leftWrapper}>
                <img src="/logo.png" alt="" />
            </div>
            <div className={styles.rightWrapper}>
                <div className={styles.headerBox}>
                    <p className={styles.header}>
                        Recycle,
                        <div ref={greenBox}></div>
                    </p>
                    <p>earn money!</p>
                </div>
                <p className={styles.description}>{text}</p>
                <div className={styles.buttonsWrapper}>
                    <button className={styles.greenBtn}>Get started</button>
                    <button className={styles.grayBtn}>Get started</button>
                </div>
            </div>
        </div>
    );
}

export default CoinInfo;

//temponary
const text =
    "Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere.";
