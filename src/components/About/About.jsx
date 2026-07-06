import styles from "./About.module.css"
import about1 from "../../assets/images/about1.webp"
import about2 from "../../assets/images/about2.webp"
import { fadeUp, slideLeft, slideRight } from "../../animations"
import { motion } from "framer-motion"

export default function About() {
    return (
        <section>
            <motion.div
                {...fadeUp}
                className={styles.about}
            >
                <motion.figure
                    {...slideLeft}
                    className={styles.left}
                >
                    <img src={about1} className={styles.img} alt="Etno restoran ambijent 1" />
                </motion.figure>

                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className={styles.textDiv}
                >
                    <h2>Zašto Azura?</h2>
                    <p>
                        Naš etno restoran posvećen je očuvanju tradicije i domaće kuhinje, u ambijentu koji spaja toplinu prošlih vremena i udobnost današnjice. Svaki detalj prostora i svako jelo pažljivo su osmišljeni kako bi gostima pružili autentično iskustvo.
                    </p>

                    <p>
                        Naša kuhinja se zasniva na starim receptima, domaćim sastojcima i pripremi koja poštuje tradicionalne načine kuvanja. Od jela sa roštilja do specijaliteta iz domaće kuhinje, svaki zalogaj nosi ukus tradicije.
                    </p>

                    <p>
                        Bilo da dolazite na porodični ručak, večeru sa prijateljima ili proslavu posebnih trenutaka, kod nas vas očekuje opuštena atmosfera i gostoprimstvo koje se pamti.
                    </p>
                </motion.div>

                <motion.figure
                    {...slideRight}
                    className={styles.right}
                >
                    <img src={about2} className={styles.img} alt="Etno restoran ambijent 2" />
                </motion.figure>
            </motion.div>
        </section>
    )
}