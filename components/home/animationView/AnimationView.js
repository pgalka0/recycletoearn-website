import styles from './animationView.module.scss'

function AnimationView() {
    return (
        <div className={styles.wrapper}>
            <img src="animationSvg.svg" alt="" />
        </div>
    );
}

export default AnimationView;