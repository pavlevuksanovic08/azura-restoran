
import styles from "./Dish.module.css"

export default function Dish({ dish }) {
    return (
        <article>
            <div className={styles.dish}>
                <img src={dish.image} className={styles.img} />
                <div className={styles.dishData}>
                    <p className={styles.title}>{dish.title}</p>
                    <p className={styles.desc}>{dish.description}</p>
                </div>
            </div>
        </article>
    )
} 