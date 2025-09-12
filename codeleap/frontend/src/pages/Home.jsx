import "@/css/global.css";
import styles from "@/css/home.module.css";
import Footer from "@/components/Footer/Footer";
import InputCard from "@/components/InputCard/InputCard";
import InputUser from "@/components/InputUser/InputUser";
import Button from "@/components/Button/Button";
import Dashboard from "@/pages/Dashboard";
import useSWR from "swr";

async function fetchGetAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

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
  const { data } = useSWR(
    `${import.meta.env.VITE_BACK_END}/api/v1/careers/`,
    fetchGetAPI,
    {
      revalidateOnFocus: false,
      refreshInterval: 60 * 3 * 1000,
    }
  );

  return (
    <>
      {localStorage.getItem("userIn") ? (
        <Dashboard arrayData={data} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default PagesHandler;
