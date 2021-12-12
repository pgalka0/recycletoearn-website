import styles from "./leaderboard.module.scss";

function User(props) {
    return (
        <div className={styles.userBox}>
            <div className={styles.position}>{props.position}</div>
            <div className={styles.username}>{props.username}</div>
            <div className={styles.points}>{props.points}</div>
        </div>
    );
}

export default function LeaderBoard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topWrapper}>Leaderboard</div>
            <div className={styles.bottomWrapper}>
                <User position="1" username="Mesi" points="183" />
                <User position="2" username="Conrad" points="143" />
                <User position="3" username="Ziku" points="123" />
                <User position="15" username="USER (you)" points="52" />
            </div>
        </div>
    );
}
