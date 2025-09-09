import styles from "@/components/PostCard/postcard.module.css";

function timeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);

  const diffInSeconds = Math.floor((now - past) / 1000);
  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds !== 1 ? "s" : ""} ago`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths !== 1 ? "s" : ""} ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears !== 1 ? "s" : ""} ago`;
}

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
          <p className={styles["postedAt"]}>{timeAgo(postedAt)}</p>
        </menu>
        <main className={styles["content"]}>{content}</main>
      </div>
    </div>
  );
}

export default PostCard;
