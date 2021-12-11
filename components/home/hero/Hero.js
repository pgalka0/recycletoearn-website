import { useEffect, useRef, useState } from "react";
import styles from "./hero.module.scss";
import gsap, { Power4 } from "gsap";
import { handleMetamaskConnection, addUser, readUsers } from '../../../Contracts/web3functions'
import abi from '../../../Contracts/abi.json';
const Web3 = require("web3")

function Hero() {
    const purpleBox = useRef(null);
    const wrapper = useRef(null);
    const [account, setAccount] = useState("");
    const [users, setUsers] = useState([]);



    useEffect(() => {
        // Check for Web3 
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }

        const contractAddress = '0x53401A0Ce8BA6572b629a6F9F1271AF46a73cF35';

        const contract = new window.web3.eth.Contract(abi, contractAddress);
    }, [account])

    useEffect(() => {
        const observerOptions = {
            threshold: 1,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const tl = gsap.timeline();
                    setTimeout(() => {
                        tl.fromTo(
                            [purpleBox.current],
                            { width: 0 },
                            { width: `250px`, duration: 1, ease: Power4 }
                        );
                    }, 500);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        observer.observe(wrapper.current);
    }, []);
    return (
        <div className={styles.wrapper} ref={wrapper}>
            <img src="/logoPurpleSaturated.png" alt="" className={styles.rightImg} />
            <img src="/logoPurpleSaturated.png" alt="" className={styles.topCenterImg} />
            <img src="/logoPurpleSaturated.png" alt="" className={styles.bottomCenterImg} />
            <div className={styles.leftWrapper}>
                <div className={styles.headerBox}>
                    <p className={styles.header}>
                        Recycle,
                        <div ref={purpleBox}></div>
                    </p>
                    <p>earn money!</p>
                </div>
                <p className={styles.description}>{text}</p>
                <div className={styles.buttonsWrapper}>
                    <button
                        className={styles.purpleBtn}
                        onClick={() => { handleMetamaskConnection(window, setAccount) }}
                    >Connect To Metamask</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;

//temponary
const text =
    "Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere.";
