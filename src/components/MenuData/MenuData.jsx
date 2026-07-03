import styles from "./MenuData.module.css";

export default function MenuData({ section }) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>{section.naziv_sekcije}</h2>

                <div className={styles.flexDiv}>
                    <ul className={styles.list}>
                        {section.jela.map((jelo, jeloIndex) => (
                            <li key={jeloIndex} className={styles.item}>
                                <strong className={styles.name}>{jelo.naziv}</strong>
                                <span className={styles.price}> - {jelo.cena}</span>

                                {jelo.kolicina && (
                                    <span className={styles.quantity}>
                                        {" "}({jelo.kolicina})
                                    </span>
                                )}

                                {jelo.opis && (
                                    <p className={styles.description}>
                                        {jelo.opis}
                                    </p>
                                )}

                                {jelo.cena_mala_porcija && (
                                    <span className={styles.smallPortion}>
                                        Mala porcija: {jelo.cena_mala_porcija}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.images}>
                        {section.images.map((img, i) => (
                            <figure className={styles.fig} key={i}>
                                <img src={img.src} className={styles.img} />
                            </figure>
                        ))}
                    </div>
                    
                </div>
                
            </div>
        </section>
    );
}