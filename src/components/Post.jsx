import React from 'react'
import styles from './Post.module.css'
import { Comment } from './Comment'
import Avatar from './Avatar'

export const Post = ({author, publishedAt, content}) => {
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    }).format(publishedAt)

  return (
    <div>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.nome}</strong>
                        <span>{ author.role }</span>
                    </div>
                </div>

                <time title='04/07 às 08:13h' dateTime={publishedAt}>{publishedDateFormatted}</time>
            </header>

            <div className={styles.content}>
                {content.map((item, index) => {
                    if(item.type === 'paragraph') {
                        return <p key={index}>{item.content}</p>
                    } else if(item.type === 'link') {
                        return <p key={index}><a href="">{item.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixa seu feedback</strong>
                <textarea placeholder='Deixe  um comentário' />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    </div>
  )
}
