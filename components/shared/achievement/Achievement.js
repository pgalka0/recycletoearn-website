import styles from "./achievement.module.scss";

export default function Achievement(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.circle} style={{ backgroundColor: `${props.color}` }}>
                <img src={`/${props.icon}`} alt={props.name} />
            </div>
            <div className={styles.info}>
                <span className={styles.rank}>{props.rank}</span>
                <span className={styles.name}>{props.name}</span>
            </div>
            <span className={styles.level}>{props.level}</span>
        </div>
    );
}
