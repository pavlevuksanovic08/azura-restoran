import styles from "./About.module.css"
import about1 from "../../assets/images/about1.webp"
import about2 from "../../assets/images/about2.webp"

export default function About() {
    return (
        <section>
            <div className={styles.about}>
                <figure className={styles.left}>
                    <img src={about1} className={styles.img} alt="Etno restoran ambijent 1" /> 
                </figure>
                
                <div className={styles.textDiv}>
                    <h2>Zašto Restoran?</h2>
                    <p>
                        Naš etno restoran posvećen je očuvanju tradicije i domaće kuhinje, u ambijentu koji spaja toplinu prošlih vremena i udobnost današnjice. Svaki detalj prostora i svako jelo pažljivo su osmišljeni kako bi gostima pružili autentično iskustvo.
                    </p>

                    <p>
                        Naša kuhinja se zasniva na starim receptima, domaćim sastojcima i pripremi koja poštuje tradicionalne načine kuvanja. Od jela sa roštilja do specijaliteta iz domaće kuhinje, svaki zalogaj nosi ukus tradicije.
                    </p>

                    <p>
                        Bilo da dolazite na porodični ručak, večeru sa prijateljima ili proslavu posebnih trenutaka, kod nas vas očekuje opuštena atmosfera i gostoprimstvo koje se pamti.
                    </p>
                </div>

                <figure className={styles.right}>
                    <img src={about2} className={styles.img} alt="Etno restoran ambijent 2" /> 
                </figure>
            </div>
        </section>
    )
}