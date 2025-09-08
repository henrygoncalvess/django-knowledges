import "@/css/global.css";
import styles from "@/css/home.module.css";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer/Footer";

function Home() {
  return (
    <>
      <div className={styles["body"]}>
        <div className={"container"}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
