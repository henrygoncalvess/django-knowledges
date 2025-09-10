import styles from "@/components/PostCard/postcard.module.css";
import Alert from "@/components/Alert/Alert";
import InputUser from "@/components/InputUser/InputUser";
import calculateTimeAgo from "@/utils/calculateTime.js";
import userPostStyles from "@/components/InputUser/inputuser.module.css";
import { useState } from "react";

function PostCard({ userId, title, username, postedAt, content }) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const localUsername = localStorage.getItem("username");

  const isOwner = localUsername == username;

  return (
    <>
      <Alert
        editAlert={true}
        open={open1}
        title={"Edit Item"}
        inputs={
          <>
            <InputUser
              type={"text"}
              title={"Title"}
              placeholder={"Hello CodeLeap Network!"}
            />
            <InputUser
              type={"text"}
              title={"Content"}
              placeholder={"Content Here"}
              tag={"content"}
            />
          </>
        }
        onCancel={() => setOpen1(false)}
        onSave={async () => {
          const newUserData = document.querySelectorAll(
            `input.${userPostStyles["inputUser"]}`
          );
          console.log(newUserData[2].value);
          console.log(newUserData[3].value);

          await fetch(
            `${import.meta.env.VITE_BACK_END}/api/v1/careers/${userId}/`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              method: "PATCH",
              body: JSON.stringify({
                title: newUserData[2].value,
                content: newUserData[3].value,
              }),
            }
          );
          setOpen1(false);
          window.location.reload();
        }}
      />
      <Alert
        open={open2}
        title={"Are you sure you want to delete this item?"}
        onCancel={() => setOpen2(false)}
        onDelete={async () => {
          await fetch(
            `${import.meta.env.VITE_BACK_END}/api/v1/careers/${userId}/`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              method: "DELETE",
            }
          );
          setOpen2(false);
          window.location.reload();
        }}
      />
      <div className={styles["postCard"]}>
        <header className={styles["header"]}>
          <h2 className={styles["title"]}>{title}</h2>
          {isOwner && (
            <>
              <span
                className={`material-symbols-outlined ${styles["editIcon"]}`}
                onClick={() => setOpen1(true)}
              >
                edit_square
              </span>
              <span
                className={`material-symbols-outlined ${styles["trashIcon"]}`}
                onClick={() => setOpen2(true)}
              >
                delete_forever
              </span>
            </>
          )}
        </header>
        <div className={styles["section"]}>
          <menu className={styles["menu"]}>
            <p className={styles["username"]}>@{username}</p>
            <p className={styles["postedAt"]}>{calculateTimeAgo(postedAt)}</p>
          </menu>
          <main className={styles["content"]}>{content}</main>
        </div>
      </div>
    </>
  );
}

export default PostCard;
