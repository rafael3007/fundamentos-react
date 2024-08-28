import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/rafael3007.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Brito</strong>
              <time title="11 de maio às 08:13" dateTime="2022-05-11 08:00:03">
                Cerca de 1hr atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, Parabéns!! </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
