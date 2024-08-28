import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";
import { useState } from "react";
import { dateFormatToNow, dateFormattPublished } from "../../utils/format-date";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    {
      id: "41",
      author: {
        avatarUrl: "https://github.com/rafael3007.png",
        name: "Rafael Brito",
      },
      content: "comentário 1",
      publishedAt: new Date(),
    },
    {
      id: "42",
      author: {
        avatarUrl: "https://github.com/rodfrutuoso.png",
        name: "Rodriguinho",
      },
      content: "comentário 2",
      publishedAt: new Date(),
    },
    {
      id: "43",
      author: {
        avatarUrl: "https://github.com/JoaoVittorL.png",
        name: "Joãozinho",
      },
      content: "comentário 3",
      publishedAt: new Date(),
    },
  ]);

  const [newComment, setNewComment] = useState({
    id: "5" + comments.length.toString(),
    author: {
      avatarUrl: "https://github.com/rafael3007.png",
      name: "Rafael Brito",
    },
    content: "",
    publishedAt: new Date(),
  });

  const publishedDateFormatted = dateFormattPublished(publishedAt);

  const publishedDateRelativeToNow = dateFormatToNow(publishedAt);

  const handleRemoveComment = (id) => {
    setComments(comments.filter((_, index) => index != id));
  };

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment({
      author: {
        avatarUrl: "https://github.com/rafael3007.png",
        name: "Rafael Brito",
      },
      content: "",
      publishedAt: new Date(),
    });
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar className={styles.avatar} src={author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((row) => {
          if (row.type === "paragraph") {
            return <p key={row.id}>{row.content}</p>;
          } else {
            return (
              <a key={row.id} href={row.link ?? ""}>
                {row.content}
              </a>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={(e) => e.preventDefault()}>
        <strong>Deixe seu feddback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newComment.content}
          onChange={(event) =>
            setNewComment({
              author: {
                avatarUrl: "https://github.com/rafael3007.png",
                name: "Rafael Brito",
              },
              content: event.target.value,
              publishedAt: new Date(),
            })
          }
        />
        <footer>
          <button
            type="submit"
            onClick={handleAddComment}
            onKeyDown={handleAddComment}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.length > 0 ? (
          comments.map((comment, i) => (
            <Comment
              key={comment.id}
              index={i}
              publishedAt={comment.publishedAt}
              comment={comment.content}
              author={comment.author}
              RemoveComment={handleRemoveComment}
            />
          ))
        ) : (
          <p>Ainda não há comentários</p>
        )}
      </div>
    </article>
  );
}
