import { useNavigate, useLocation } from "react-router-dom";
import styles from "./EndPage.module.css";

export default function EndPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {location.state === 49 ? (
        <h1>You are a trivia master</h1>
      ) : (
        <h1>{`You got ${location.state ? location.state : "no"} ${
          location.state === 1 ? "question" : "questions"
        } right`}</h1>
      )}
      <button className={styles.button} onClick={() => navigate("/")}>
        NEW GAME
      </button>
    </div>
  );
}
