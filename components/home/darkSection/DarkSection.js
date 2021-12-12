import useWindowWidth from 'hooks/useWindowWidth';
import styles from './darkSection.module.scss'

function DarkSection() {
    return (
        <div className={styles.wrapper}>
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
                    {/* <iframe src='https://my.spline.design/coin-f4858125f2d4d96d18de896dae90870a/'
                        loading="lazy"
                        frameborder='0'
                        width='100%'
                        height='100%'
                    ></iframe> */}
                    {/* <iframe src='https://my.spline.design/coin-8b032db318fa17a00a20045092ee961b/'
                        loading="lazy"
                        frameBorder='0'
                        width='100%'
                        height='100%'
                        overflow='scroll'
                    ></iframe> */}
                    <div className={styles.transparentBox}></div>
                </div>
                <div className={styles.coinInfo}>
                    <p className={styles.header}>Get our coin</p>
                    <p className={styles.description}>Monetize your content by charging your most loyal readers and reward them loyalty points. Give back to your loyal readers by granting them access to your pre-releases and sneak-peaks.</p>
                </div>
            </div>
            <div>

            </div>
        </div >
    );
}

export default DarkSection;
