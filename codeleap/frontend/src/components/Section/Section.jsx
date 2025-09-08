import styles from "@/components/Section/section.module.css";

function Section({ children }) {
  return (
    <div className={styles["section"]}>
      <header className={styles["header"]}>CodeLeap Network</header>
      <div className={styles["main"]}>{children}</div>
    </div>
  );
}

export default Section;
