import useWindowWidth from 'hooks/useWindowWidth';
import styles from './darkSection.module.scss';
import gsap, { Power4 } from 'gsap';
import { useEffect, useRef } from 'react';

function DarkSection() {
    const animationText = useRef(null)

    useEffect(() => {
        const observerOptions = {
            threshold: 1,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const tl = gsap.timeline();
                    setTimeout(() => {
                        // tl.fromTo(animationText.current, { transform: `translate(0)` }, { transform: `translateX(-200%)`, duration: 1, ease: Power4.easeInOut })
                    }, 500);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        observer.observe(animationText.current);
    }, []);

    return (
        <div className={styles.wrapper} id="coin">
            <div className={styles.absLines}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.wrapperTop}>
                <div className={styles.coinWrapper}>
                    <iframe src='https://my.spline.design/coin-8b032db318fa17a00a20045092ee961b/'
                        frameBorder='0'
                        width='100%'
                        height='100%'
                        overflow='scroll'
                    ></iframe>
                    <div className={styles.transparentBox}></div>
                </div>
                <div className={styles.coinInfo}>
                    <p className={styles.header}>Get our coin</p>
                    <p className={styles.description}>
                        Monetize your content by charging your most loyal readers and reward them
                        loyalty points. Give back to your loyal readers by granting them access to
                        your pre-releases and sneak-peaks.
                    </p>
                </div>
            </div>
            <div className={styles.bottomWrapper}>
                <div className={styles.animationText} ref={animationText}>
                    <p className={styles.headerAnimation}>Collect money on our card</p>
                    <p className={styles.descriptionAnimation}>
                        Monetize your content by charging your most loyal readers and reward them loyalty points.
                    </p>
                    {/* benefit */}
                </div>
                <div className={styles.photoWrapper}>
                    <img src="/card.png" />
                </div>
            </div>
        </div >
    );
}

export default DarkSection;
