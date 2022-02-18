import { useNavigate } from "react-router-dom";
import styles from "./StartPage.module.css";

export default function StartPage() {

  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <h1>Welcome to Extreme Trivia. Think you're a know-it-all? Prove it.</h1>
      <p>
        You only have 15 seconds to answer each question. 
        Answer 50 questions correctly to win.
      </p>
      <button onClick={() => navigate("/trivia")}>START GAME</button>
    </div>
  );
}
