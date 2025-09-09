import styles from "@/components/InputCard/inputcard.module.css";
import Button from "@/components/Button/Button";

function InputCard({ title, children, border, link }) {
  return (
    <>
      {border ? (
        <div className={styles["card"]} style={{ border: "none" }}>
          <h1 className={styles["title"]}>{title}</h1>
          <div className={styles["inputContent"]}>{children}</div>
          <Button link={"dashboard"}>ENTER</Button>
        </div>
      ) : (
        <div className={styles["card"]}>
          <h1 className={styles["title"]}>{title}</h1>
          <div className={styles["inputContent"]}>{children}</div>
          <Button link={link}>Create</Button>
        </div>
      )}
    </>
  );
}

export default InputCard;
