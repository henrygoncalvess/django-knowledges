import styles from "@/components/InputCard/inputcard.module.css";

function InputCard({ title, children, button, border, width, alertClass }) {
  const withoutBorder = {
    border: "none",
    width,
  };

  return (
    <>
      <div
        className={!alertClass ? styles["card"] : styles["alertCard"]}
        style={border ? withoutBorder : { width }}
      >
        <h1 className={!alertClass ? styles["title"] : styles["alertTitle"]}>
          {title}
        </h1>
        <div className={styles["inputContent"]}>{children}</div>
        {button}
      </div>
    </>
  );
}

export default InputCard;
