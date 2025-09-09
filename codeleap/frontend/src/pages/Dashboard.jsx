import "@/css/global.css";
import styles from "@/css/home.module.css";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import InputCard from "@/components/InputCard/InputCard";
import InputUser from "@/components/InputUser/InputUser";
import PostCard from "@/components/PostCard/PostCard";

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
            <PostCard
              title={"My First Post at Codeleap Network"}
              username={"Victor"}
              postedAt={"25 minutes ago"}
              content={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora magni accusamus optio eius mollitia sunt, hic voluptas delectus quo esse nostrum eum inventore aspernatur. Optio suscipit dolorem iusto! Omnis, expedita."
              }
            />
            <PostCard
              title={"My First Post at Codeleap Network"}
              username={"Victor"}
              postedAt={"25 minutes ago"}
              content={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora magni accusamus optio eius mollitia sunt, hic voluptas delectus quo esse nostrum eum inventore aspernatur. Optio suscipit dolorem iusto! Omnis, expedita."
              }
            />
          </Section>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
