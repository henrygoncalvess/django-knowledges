import styles from "@/components/Button/button.module.css";
import { Link } from "react-router-dom";

function Button({ children, gridArea, additionalStyles, handleClick }) {
  const customStyles = {
    gridArea,
    ...additionalStyles,
  };

  return (
    <>
      <Link
        onClick={handleClick}
        style={customStyles}
        className={styles["button"]}
      >
        {children}
      </Link>
    </>
  );
}

export default Button;
