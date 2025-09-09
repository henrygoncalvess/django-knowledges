import "@/css/global.css";
import styles from "@/css/dashboard.module.css";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import InputCard from "@/components/InputCard/InputCard";
import InputUser from "@/components/InputUser/InputUser";
import PostCard from "@/components/PostCard/PostCard";
import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

function Dashboard() {
  const { data } = useSWR(
    `${import.meta.env.VITE_BACK_END}/api/v1/careers/`,
    fetchAPI,
    {
      revalidateOnFocus: false,
    }
  );

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
            {data && data?.length > 0 ? (
              data.map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    title={post.title}
                    username={post.username}
                    postedAt={post.created_datetime}
                    content={post.content}
                  />
                );
              })
            ) : (
              <p>loading...</p>
            )}
          </Section>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
