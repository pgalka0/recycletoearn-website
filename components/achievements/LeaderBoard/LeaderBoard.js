import styles from "./leaderboard.module.scss";

function User(props) {
    return (
        <div className={styles.userBox}>
            <div className={styles.leftWrapper}>
                <div className={styles.position}>
                    <p>{props.position}</p>
                    <img src={`${props.image}`} alt="positionLogo" />
                </div>
                <div className={styles.username}>{props.username}</div>
            </div>
            <div className={styles.points}>{props.points}</div>
        </div>
    );
}

export default function LeaderBoard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topWrapper}>Leaderboard</div>
            <div className={styles.bottomWrapper}>
                <User image="leaderboard/plat.png" position="1" username="Mesi" points="183" />
                <User image="leaderboard/gold.png" position="2" username="Conrad" points="143" />
                <User image="leaderboard/silver.png" position="3" username="Ziku" points="123" />
                <User
                    image="leaderboard/default.png"
                    position="58"
                    username="USER (you)"
                    points="52"
                />
            </div>
        </div>
    );
}
