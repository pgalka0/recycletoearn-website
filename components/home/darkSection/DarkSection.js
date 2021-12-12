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
                    {/* <iframe src='https://my.spline.design/untitled-30a5cc0c152ce2391ff24831bfc824bf/' frameBorder='0' width='100%' height='100%'></iframe>  */}
                    {/* <img src="/tempCoin.svg" alt="" /> */}
                    {/* {useWindowWidth() > 1280 ?
                        <iframe src='https://my.spline.design/untitled-30a5cc0c152ce2391ff24831bfc824bf/' frameborder='0'></iframe>
                        :
                        <iframe src='https://my.spline.design/coin-9015c408e58ea4fc922c6a97233c07cd/' frameborder='0' width='100%' height='100%'></iframe>
                    } */}
                    <iframe src='https://my.spline.design/coin-9015c408e58ea4fc922c6a97233c07cd/' frameborder='0' width='100%' height='100%'></iframe>
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
