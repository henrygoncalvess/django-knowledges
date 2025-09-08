import styles from "@/components/InputUser/inputuser.module.css";

function InputUser({ type, title, placeholder, tag }) {
  return (
    <>
      <p className={styles["inputMessage"]}>{title}</p>
      {tag === "content" ? (
        <input
          className={styles["inputUser"]}
          type={type}
          placeholder={placeholder}
          style={{
            height: "70px",
            padding: "3px 0 45px 15px",
          }}
        />
      ) : (
        <input
          className={styles["inputUser"]}
          type={type}
          placeholder={placeholder}
        />
      )}
    </>
  );
}

export default InputUser;
