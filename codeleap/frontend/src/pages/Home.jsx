import "@/css/global.css";
import styles from "@/css/home.module.css";
import Footer from "@/components/Footer/Footer";
import InputCard from "@/components/InputCard/InputCard";
import InputUser from "@/components/InputUser/InputUser";
import Button from "@/components/Button/Button";
import Dashboard from "@/pages/Dashboard";

function Home() {
  function saveUser() {
    const username = document.getElementsByTagName("input");
    localStorage.setItem("username", username["0"].value);
    localStorage.setItem("userIn", true);
    window.location.reload();
  }

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
                  gridArea={"-2 / 3 / span 1 / span 1"}
                  handleClick={saveUser}
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

function PagesHandler() {
  return <>{localStorage.getItem("userIn") ? <Dashboard /> : <Home />}</>;
}

export default PagesHandler;
