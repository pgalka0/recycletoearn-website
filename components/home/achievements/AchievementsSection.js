import styles from "./achievementsSection.module.scss";
import Achievement from "../../shared/achievement/Achievement";

function AchievementsSection() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftWrapper}>
                <Achievement
                    icon="butla/zloto.png"
                    rank="GOLD"
                    name="Plastic Master"
                    level="2/30"
                />
                <Achievement
                    icon="butla/zloto.png"
                    rank="GOLD"
                    name="Plastic Master"
                    level="2/30"
                />
                <Achievement
                    icon="butla/zloto.png"
                    rank="GOLD"
                    name="Plastic Master"
                    level="2/30"
                />
            </div>
            <div className={styles.rightWrapper}>
                <div className={styles.whiteLine}></div>
                <p className={styles.header}>
                    Earn points by <br></br>recycling!
                </p>
                <p className={styles.description}>
                    Monetize your content by charging your most loyal readers and reward them
                    loyalty points. Give back to your loyal readers by granting them access to your
                    pre-releases and sneak-peaks.
                </p>
            </div>
        </div>
    );
}

export default AchievementsSection;