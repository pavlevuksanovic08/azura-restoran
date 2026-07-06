import styles from "./Contact.module.css"
import contact1 from "../../assets/images/contact1.webp"
import contact2 from "../../assets/images/contact2.webp"
import { motion } from "framer-motion"
import { fadeUp, slideLeft, slideRight } from "../../animations"

export default function Contact() {
    return (
        <section id="contact">
            <motion.div {...fadeUp} className={styles.contact}>
<<<<<<< HEAD
                <motion.h2 {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }}>Lokacija i Kontakt</motion.h2>
=======
                <motion.h2 {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }}>Find Us & Contact</motion.h2>
>>>>>>> 8ffa6250f113ad4745980262a28dadfae2776844

                <div className={styles.contactData}>
                    <motion.figure {...slideLeft} transition={{ duration: 0.65, delay: 0.1 }} className={styles.fig}>
                        <img src={contact1} className={styles.img} alt="Kontakt fotografija" />
                    </motion.figure>

                    <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className={styles.meta}>
                        <div>
                            <div className={styles.map}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.3229814524643!2d20.575995499999994!3d44.522534799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750a5e582a04fb3%3A0x8f283eb1feba2c40!2sAzura!5e1!3m2!1ssr!2srs!4v1783176797700!5m2!1ssr!2srs" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                            </div>
                            <p>📍 Milosava Vlajića 15, Sopot</p>
                            <p>📞 0117498354</p>
                            <div className={styles.workingHours}>
                                <h3>🕒 Radno vreme</h3>
                                <p>Pon-Cet: 07:00–23:00</p>
                                <p>Pet-Sub: 07:00–00:00</p>
                                <p>Ned: 08:00–23:00</p>
                            </div>
                        </div>

                        <a href="tel:+381601234567">
                            <button className={styles.reservationBtn}>Rezerviši</button>
                        </a>
                    </motion.div>

                    <motion.figure {...slideRight} transition={{ duration: 0.65, delay: 0.12 }} className={styles.fig}>
                        <img src={contact2} className={styles.img} alt="Kontakt fotografija 2" />
                    </motion.figure>
                </div>
            </motion.div>
        </section>
    )
}