import { useNavigate, useLocation } from "react-router-dom";
import styles from "./EndPage.module.css"

export default function EndPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {location.state === 49 ? (
        <h1>YOU ARE THE TRIVIA MASTER.</h1>
      ) : (
        <p className={styles.p}>{`you got ${location.state ? location.state : "no"} ${
          location.state === 1 ? "question" : "questions"
        } right.`}</p>
      )}
      <button className={styles.button} onClick={() => navigate("/")}>new game</button>
    </div>
  );
}
