import { useEffect, useRef } from 'react';
import styles from './hero.module.scss'
import gsap, { Power4 } from 'gsap'

function Hero() {
    const purpleBox = useRef(null)
    const wrapper = useRef(null)

    useEffect(() => {
        const observerOptions = {
            threshold: 1,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const tl = gsap.timeline();
                    setTimeout(() => {
                        tl.fromTo([purpleBox.current], { width: 0 }, { width: `250px`, duration: 1, ease: Power4 });
                    }, 500);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions,
        );

        observer.observe(wrapper.current);
    }, [])
    return (
        <div className={styles.wrapper} ref={wrapper}>
            <img src="/logoPurpleSaturated.png" alt="" className={styles.rightImg} />
            <img src="/logoPurpleSaturated.png" alt="" className={styles.topCenterImg} />
            <img src="/logoPurpleSaturated.png" alt="" className={styles.bottomCenterImg} />
            <div className={styles.leftWrapper}>
                <div className={styles.headerBox}>
                    <p className={styles.header}>Recycle,
                        <div ref={purpleBox}></div>
                    </p>
                    <p>earn money!</p>
                </div>
                <p className={styles.description}>{text}</p>
                <div className={styles.buttonsWrapper}>
                    <button className={styles.purpleBtn}>Get started</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;

//temponary
const text = "Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere."