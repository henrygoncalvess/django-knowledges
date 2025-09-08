import styles from "@/components/Button/button.module.css";
import { Link } from "react-router-dom";

function Button({ children, link }) {
  return (
    <Link className={styles["routerLink"]} to={link}>
      {children}
    </Link>
  );
}

export default Button;
