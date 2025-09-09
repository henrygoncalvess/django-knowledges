import styles from "@/components/PostCard/postcard.module.css";

function PostCard({ title, username, postedAt, content }) {
  return (
    <div className={styles["postCard"]}>
      <header className={styles["header"]}>
        <h2 className={styles["title"]}>{title}</h2>
        <span className={`material-symbols-outlined ${styles["editIcon"]}`}>
          edit_square
        </span>
        <span className={`material-symbols-outlined ${styles["trashIcon"]}`}>
          delete_forever
        </span>
      </header>
      <div className={styles["section"]}>
        <menu className={styles["menu"]}>
          <p className={styles["username"]}>@{username}</p>
          <p className={styles["postedAt"]}>{postedAt}</p>
        </menu>
        <main className={styles["content"]}>{content}</main>
      </div>
    </div>
  );
}

export default PostCard;
