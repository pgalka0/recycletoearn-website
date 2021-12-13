import Achievement from 'components/shared/achievement/Achievement';
import useWindowWidth from 'hooks/useWindowWidth';
import styles from './gridSection.module.scss'

function GridSection() {
    const nameOfPhoto = ['braz', 'srebro', 'zloto', 'platyna']
    const levelOfItem = ['BRONZE', 'SILVER', 'GOLD', 'PLATINIUM']
    const item = ['bio', 'pudelko', 'pucha', 'butla']
    const color = ['#C97850', '#C6C6C6', '#F9D773', 'linear-gradient(90deg, rgba(186,186,255,1) 0%, rgba(51,124,255,1) 100%);']

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftWrapper}>
                {item.map((item, j) => {
                    return (
                        nameOfPhoto.map((nameOfPhoto, index) => {
                            return (
                                <div className={styles.wrapperAchievement}>
                                    <div className={styles.circle} style={{ background: `${color[index]}` }}>
                                        <img src={`${item}/${nameOfPhoto}.png`} />
                                    </div>
                                    <div className={styles.info}>
                                        <span className={styles.rank}>{levelOfItem[index]}</span>
                                        <span className={styles.name}>Plastic master</span>
                                    </div>
                                    <span className={styles.level}>0/0</span>
                                </div>
                            )

                        })
                    )
                })}
            </div>
        </div>
    );
}

export default GridSection;


/* 
background: rgb(155,188,255);
background:
*/