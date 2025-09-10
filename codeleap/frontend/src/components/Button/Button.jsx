import styles from "@/components/Button/button.module.css";
import { Link } from "react-router-dom";

function Button({ children, gridArea, link, additionalStyles, handleClick }) {
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
        to={link}
      >
        {children}
      </Link>
    </>
  );
}

export default Button;
