import styles from "./statsboard.module.scss";
import LeaderBoard from "../LeaderBoard/LeaderBoard";

export default function StatsBoard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topWrapper}>
                <LeaderBoard />
            </div>
            <div className={styles.bottomWrapper}>
                <LeaderBoard />
            </div>
        </div>
    );
}
