import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} className={styles.avatar} src="https://github.com/DEVLucasLopess.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Lucas Lopes</strong>
                        <time title='04/07 às 08:13h' dateTime='2023-04-07 08:13:30'>Cerca de 1h atrás</time>
                    </div>

                    <button title="Deletar comentário">
                      <Trash size={24} />
                    </button>
                </header>

                <p>Muito bom Lucas, parabéns!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}