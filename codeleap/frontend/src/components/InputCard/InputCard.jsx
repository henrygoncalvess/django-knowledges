import styles from "@/components/InputCard/inputcard.module.css";

function InputCard({ title, children, button, border, width }) {
  const withoutBorder = {
    border: "none",
    width,
  };

  return (
    <>
      <div
        className={styles["card"]}
        style={border ? withoutBorder : { width }}
      >
        <h1 className={styles["title"]}>{title}</h1>
        <div className={styles["inputContent"]}>{children}</div>
        {button}
      </div>
    </>
  );
}

export default InputCard;
