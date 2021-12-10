import styles from './achievementsSection.module.scss'

function AchievementsSection() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftWrapper}>
                <div className={styles.achievementsBox}>
                    <img src="/butla/zloto.png" alt="" />
                    <div className={styles.circle}></div>
                    <p className={styles.boxHeader}>Bronze paper master</p>

                </div>
                <div className={styles.achievementsBox}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.achievementsBox}>
                    <div className={styles.circle}></div>
                </div>
            </div>
            <div className={styles.rightWrapper}>
                <div className={styles.whiteLine}></div>
                <p className={styles.header}>Earn points by <br></br>recycling!</p>
                <p className={styles.description}>Monetize your content by charging your most loyal readers and reward them loyalty points. Give back to your loyal readers by granting them access to your pre-releases and sneak-peaks.</p>
            </div>
        </div >
    );
}

export default AchievementsSection;