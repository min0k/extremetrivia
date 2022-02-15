import { nanoid } from "nanoid";
import styles from "./Countdown.module.css";

export default function Countdown() {
  return (
    <div>
      <span key={nanoid()} className={styles.dot}></span>
    </div>
  );
}
