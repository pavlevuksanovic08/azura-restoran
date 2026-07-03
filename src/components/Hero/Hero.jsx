import styles from "./Hero.module.css"

export default function Hero() {
    return (
        <section>
            {/* DIV MUST HAVE BACKGROUND IMAGE */}
            <div className={styles.hero}>
                <div className={styles.heroHeading}>
                    <h1 className={styles.heading}>TRADICIJA KOJA TRAJE</h1>
                    <h2 className={styles.subheading}>Ukusi domaće kuhinje i muzika koja okuplja prijatelje.</h2>
                </div>
                {/* CTA BUTTONS */}
                <div className={styles.cta}>
                    <button className={styles.ctaPrimaryBtn}>Rezervisi Odmah</button>
                    <button className={styles.ctaSecondaryBtn}>Pogledaj Meni</button>
                </div>
            </div>
        </section>
    )
}