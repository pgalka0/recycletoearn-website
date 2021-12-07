import styles from './choiceSection.module.scss'
import Link from 'next/link'
import { useEffect, useRef } from 'react';

function Choice({ header, buttonText, buttonLink, spanClass, btnClass }) {
    let fullHeader = header.split(/ +/);
    const lastWord = fullHeader[fullHeader.length - 1];

    fullHeader.pop()
    fullHeader = fullHeader.join(' ')

    return (
        <div className={styles.choiceWrapper}>
            <p className={styles.header}>
                {fullHeader} <span className={spanClass}>{lastWord}</span>
            </p>
            <div>
                <Link href={buttonLink}>
                    <button className={`${styles.btn} ${btnClass}`}>{buttonText}</button>
                </Link>
            </div>
        </div>
    )
}

function ChoiceSection() {
    return (
        <div className={styles.wrapper}>
            <Choice header="Make money from
            recycling" buttonText="Get started" buttonLink="#" spanClass={styles.blue} btnClass={styles.btnBlue} />
            <Choice header="Collect achievements 
            from recycling" buttonText="Get started" buttonLink="#" spanClass={styles.orange} btnClass={styles.btnOrange} />
            <Choice header="Read about 
            project" buttonText="Get started" buttonLink="#" spanClass={styles.purple} btnClass={styles.btnPurple} />
        </div>
    );
}

export default ChoiceSection;