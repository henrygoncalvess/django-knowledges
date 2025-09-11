import "@/css/global.css";
import styles from "@/css/dashboard.module.css";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import InputCard from "@/components/InputCard/InputCard";
import InputUser from "@/components/InputUser/InputUser";
import PostCard from "@/components/PostCard/PostCard";
import Button from "@/components/Button/Button";
import useSWR from "swr";

async function fetchGetAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

function Dashboard() {
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
      <div className={styles["body"]}>
        <div className={"container"}>
          <Section>
            <InputCard
              width={"100%"}
              title={"What's on your mind?"}
              button={
                <Button
                  gridArea={"-2 / 3 / span 1 / span 1"}
                  handleClick={async (event) => {
                    event.preventDefault();

                    await fetch(
                      `${import.meta.env.VITE_BACK_END}/api/v1/careers/`,
                      {
                        headers: {
                          "Content-Type": "application/json",
                        },
                        method: "POST",
                        body: JSON.stringify({
                          username: localStorage.getItem("username"),
                          title: document.querySelector("input").value,
                          content: document.querySelector("textarea").value,
                        }),
                      }
                    );
                    window.location.reload();
                  }}
                >
                  Create
                </Button>
              }
            >
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
            {data && data?.length > 0 ? (
              data.map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    userId={post.id}
                    title={post.title}
                    username={post.username}
                    postedAt={post.created_datetime}
                    content={post.content}
                  />
                );
              })
            ) : (
              <div className={styles["loadContainer"]}>
                <div className={styles["circle"]}></div>
                <h3 className={styles["loading"]}>Loading Posts.....</h3>
              </div>
            )}
          </Section>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
