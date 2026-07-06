import styles from "./MenuData.module.css";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

export default function MenuData({ section, id }) {
    return (
        <section className={styles.section}>
            <motion.div  className={styles.container}>
                <motion.h2  className={styles.heading} id={id}>{section.naziv_sekcije}</motion.h2>

                <div className={styles.flexDiv}>
                    <ul className={styles.list}>
                        {section.jela.map((jelo, jeloIndex) => (
                            <motion.li
                                key={jeloIndex}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: jeloIndex * 0.05, ease: "easeOut" }}
                                className={styles.item}
                            >
                                <strong className={styles.name}>{jelo.naziv}</strong>
                                <span className={styles.price}> - {jelo.cena}</span>

                                {jelo.kolicina && (
                                    <span className={styles.quantity}>
                                        {" "}({jelo.kolicina})
                                    </span>
                                )}

                                {jelo.opis && (
                                    <p className={styles.description}>{jelo.opis}</p>
                                )}

                                {jelo.cena_mala_porcija && (
                                    <span className={styles.smallPortion}>Mala porcija: {jelo.cena_mala_porcija}</span>
                                )}
                            </motion.li>
                        ))}
                    </ul>
                    <div className={styles.images}>
                        {section.images.map((img, i) => (
                            <motion.figure
                                key={i}
                                initial={{ opacity: 0, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" }}
                                className={styles.fig}
                            >
                                <img src={img.src} className={styles.img} alt="" />
                            </motion.figure>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}