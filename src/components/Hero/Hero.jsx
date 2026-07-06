import styles from "./Hero.module.css"
import { slideIn } from "../../animations"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <div>
            <div className={styles.hero}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.heroHeading}
                >
                    <h1 className={styles.heading}>Ukusi koji ostavljaju utisak</h1>
                    <h2 className={styles.subheading}>Savremena kuhinja i ambijent stvoreni za trenutke za pamćenje</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
                    className={styles.cta}
                >
                    <button className={styles.ctaPrimaryBtn}>Rezervisi Odmah</button>
                    <button className={styles.ctaSecondaryBtn}>Pogledaj Meni</button>
                </motion.div>
            </div>
        </div>
    )
}