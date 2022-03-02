import styles from "../components/NavBar.module.css";

export default function NavBar() {
  return (
    <div>
      <nav className={styles.nav}>
        <a href={"/"} className={styles.navLogo}>
          Extreme Trivia
        </a>
        <a href={"/"} className={styles.about}>
          About
        </a>
      </nav>
    </div>
  );
}
