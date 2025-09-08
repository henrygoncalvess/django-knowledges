import "@/css/global.css";
import styles from "@/css/home.module.css";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import InputCard from "@/components/InputCard/InputCard";
import InputUser from "@/components/InputUser/InputUser";

function Home() {
  return (
    <>
      <div className={styles["body"]}>
        <div className={"container"}>
          <Section>
            <InputCard title="What's on your mind?">
              <InputUser
                type={"text"}
                title={"Title"}
                placeholder={"Hello World"}
              />
              <InputUser
                type={"text"}
                title={"Content"}
                placeholder={"Content Here"}
                tag={"content"}
              />
            </InputCard>
          </Section>
          <div className={styles["test"]}></div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
