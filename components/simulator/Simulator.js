import styles from "./simulator.module.scss";
import abi from "../../Contracts/abi.json";
import {userScored, contractAddress} from "../../Contracts/web3functions.js";

const Web3 = require("web3")

export default function SimulatorComponent(){

    const payForRecycle = () => {
        console.log("ADDESS: ", localStorage.getItem("address"))
        if(localStorage.getItem("address") !== "") {
            const address = localStorage.getItem("address");
            try {
                if (window.ethereum) {
                    window.web3 = new Web3(window.ethereum);
                } else if (window.web3) {
                    window.web3 = new Web3(window.web3.currentProvider);
                } else {
                    window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
                }

                const contract = new window.web3.eth.Contract(abi, contractAddress);

                userScored(contract, address, 10, "plastic");
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (

        <div className = {styles.container}>
            <button className = {styles.greenBtn} onClick = {payForRecycle}>Recycle a Plastic bottle</button>
        </div>
     )
}