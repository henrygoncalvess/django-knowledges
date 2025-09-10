import "@/css/global.css";
import styles from "@/css/home.module.css";
import Footer from "@/components/Footer/Footer";
import InputCard from "@/components/InputCard/InputCard";
import InputUser from "@/components/InputUser/InputUser";
import Button from "@/components/Button/Button";

function Home() {
  return (
    <>
      <div className={styles["body"]}>
        <div className={"container"}>
          <section className={styles["section"]}>
            <InputCard
              width={"100%"}
              title={"Welcome to CodeLeap Network!"}
              button={
                <Button
                  link={"dashboard"}
                  gridArea={"-2 / 3 / span 1 / span 1"}
                >
                  ENTER
                </Button>
              }
              border={true}
            >
              <InputUser
                type={"text"}
                title={"Please enter your username"}
                placeholder={"Jonh Doe"}
              />
            </InputCard>
          </section>
          <div className={styles["test"]}></div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
