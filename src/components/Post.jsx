import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="http://github.com/chelfonseca.png"/>
                    <div className={styles.authorInfo} >
                        <strong>Michel Fonseca</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='03 de agosto às 16:34h'dateTime='2022-05-11 08:13:00' >Publicado há 1h</time>
            </header>

            <div className={styles.content} >
                <p>Fala Galera 👋</p>
                <p>Olha o meu Potifolio</p>
                <p>👉<a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu Feedback</strong>

                <textarea placeholder="Deixe um comentário" 
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList} >
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}

