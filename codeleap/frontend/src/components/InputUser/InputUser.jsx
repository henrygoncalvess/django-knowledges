import styles from "@/components/InputUser/inputuser.module.css";

function InputUser({ type, title, placeholder, tag, value, handleChange }) {
  return (
    <>
      <p className={styles["inputMessage"]}>{title}</p>
      {tag === "content" ? (
        <textarea
          className={styles["inputUser"]}
          placeholder={placeholder}
          style={{
            height: "70px",
            padding: "3px 0 45px 15px",
            marginBottom: "8px",
          }}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          className={styles["inputUser"]}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )}
    </>
  );
}

export default InputUser;
