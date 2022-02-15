import { nanoid } from "nanoid";
import styles from "./Countdown.module.css"


export default function Countdown() { 
    console.log("countdown circle rendered");
    
    return (
        <div><span key={nanoid()} className={styles.dot}></span></div>
    )
}