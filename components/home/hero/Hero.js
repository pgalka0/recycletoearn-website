import styles from './hero.module.scss'
import gsap, { Power4, Back } from 'gsap'
import { useEffect, useRef } from 'react';
const Web3 = require('web3')
import ABI from '../../abi.json';


function Hero() {
    const greenBox = useRef(null);
    const wrapper = useRef(null);

    

    const connectToMetamask = async () => { 
        if(typeof window.ethereum !== 'undefined') {
            let web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.enable();
                let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });;
                let mainAccountAddress = accounts[0];
                try {
                    const contractAddress = "0x5BFA8DB86bB98fa4c8d4B5413772F4516C127E1f";
                    let contract = new web3.eth.Contract(ABI, contractAddress);
                    console.log(contract)
                }catch(e) {
                    console.log(e)
                }
            }
            catch(e) {
                console.log(e);
            }
        }
        else {
            console.log('Install Metamask');
        }
    }

    useEffect(() => {
        const observerOptions = {
            threshold: 1,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const tl = gsap.timeline();
                    setTimeout(() => {
                        tl.fromTo([greenBox.current], { width: 0 }, { width: `250px`, duration: 1, ease: Power4 });
                    }, 500);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions,
        );

        observer.observe(wrapper.current);
    }, [])
    return (
        <div className={styles.wrapper} ref={wrapper}>
            <div className={styles.leftWrapper}>
                <div className={styles.headerBox}>
                    <p className={styles.header}>Recycle,
                        <div ref={greenBox}></div>
                    </p>
                    <p>earn money!</p>
                </div>
                <p className={styles.description}>{text}</p>
                <div className={styles.buttonsWrapper}>
                    <button className={styles.greenBtn} onClick = {connectToMetamask}>Get started</button>
                    <button className={styles.grayBtn}>Get started</button>
                </div>
            </div>
            <div className={styles.rightWrapper}>
                <div className={styles.rBox}></div>
            </div>
        </div>
    );
}

export default Hero;

//temponary
const text = "Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere."