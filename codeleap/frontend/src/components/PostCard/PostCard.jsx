import styles from "@/components/PostCard/postcard.module.css";
import Alert from "@/components/Alert/Alert";
import InputUser from "@/components/InputUser/InputUser";
import calculateTimeAgo from "@/utils/calculateTime.js";
import { useState } from "react";

function PostCard({ title, username, postedAt, content }) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

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
              placeholder={"Hello World"}
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
        onDelete={(event) => {
          event.preventDefault();
          setOpen1(false);
        }}
      />
      <Alert
        open={open2}
        title={"Are you sure you want to delete this item?"}
        onCancel={() => setOpen2(false)}
        onDelete={(event) => {
          event.preventDefault();
          setOpen2(false);
        }}
      />
      <div className={styles["postCard"]}>
        <header className={styles["header"]}>
          <h2 className={styles["title"]}>{title}</h2>
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
