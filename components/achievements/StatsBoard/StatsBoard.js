import styles from "./statsboard.module.scss";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Nav from "components/achievements/nav/Nav";

export default function StatsBoard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainWrapper}>
                <div className={styles.bottomWrapper}>
                    <LeaderBoard />
                </div>
            </div>
        </div>
    );
}
