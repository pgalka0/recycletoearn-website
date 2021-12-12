import { useEffect, useRef } from "react";
import styles from "./achievementsSection.module.scss";
import gsap, { Power4 } from "gsap";
import Achievement from "../../shared/achievement/Achievement";

function AchievementsSection() {
    const blueBox = useRef(null);
    const wrapper = useRef(null);

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
                            [blueBox.current],
                            { width: 0 },
                            { width: `200px`, duration: 1, ease: Power4 }
                        );
                    }, 500);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        observer.observe(blueBox.current);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerWrapper}>
                <p className={styles.headerBox}>
                    <div className={styles.header}>
                        Collect <div ref={blueBox}></div>
                    </div>
                    <p>achievements!</p>
                </p>
                <p className={styles.main}>
                    Monetize your content by charging your most loyal readers and reward them
                    loyalty points. Give back to your loyal readers by granting them access to your
                    pre-releases and sneak-peaks.
                </p>
            </div>

            <div className={styles.mainBox}>
                <div className={styles.leftWrapper}>
                    <Achievement
                        icon="butla/zloto.png"
                        rank="GOLD"
                        name="Plastic Master"
                        level="17/30"
                        color="#F9D773"
                    />
                    <Achievement
                        icon="pucha/srebro.png"
                        rank="SILVER"
                        name="Plastic Master"
                        level="4/30"
                        color="#C6C6C6"
                    />
                    <Achievement
                        icon="pudelko/braz.png"
                        rank="BRONZE"
                        name="Plastic Master"
                        level="22/30"
                        color="#C97850"
                    />
                </div>
                <div className={styles.rightWrapper}>
                    <div className={styles.whiteLine}></div>
                    <div className={styles.headerBoxRight}>
                        <p>Earn points by</p>
                        <p>recycling!</p>
                    </div>
                    <p className={styles.description}>{text}</p>
                    <div className={styles.buttonWrapper}>
                        <button>Get started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AchievementsSection;

const text =
    "Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere.";
