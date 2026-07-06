import { useState } from "react"
import styles from "./Gallery.module.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Gallery({ images }) {
    const [orientations, setOrientations] = useState({})

    function handleImageLoad(index, event) {
        const { naturalWidth, naturalHeight } = event.currentTarget

        let orientation = "square"

        if (naturalWidth > naturalHeight * 1.08) {
            orientation = "landscape"
        } else if (naturalHeight > naturalWidth * 1.08) {
            orientation = "portrait"
        }

        setOrientations((prev) => (
            prev[index] === orientation ? prev : { ...prev, [index]: orientation }
        ))
    }

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2>Galerija</h2>
                <div className={styles.images}>
                    {images.map((img, index) => {
                        const orientationClass = orientations[index] || "square"

                        return (
                            <motion.figure
                                key={index}
                                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                                className={`${styles.fig} ${styles[orientationClass]}`}
                            >
                                <img
                                    src={img.src}
                                    className={styles.img}
                                    alt={img.alt || `Galerija ${index + 1}`}
                                    onLoad={(event) => handleImageLoad(index, event)}
                                />
                            </motion.figure>
                        )
                    })}
                </div>
                <Link to="/gallery" className={styles.galleryLink}>
                    <button>Pogledaj Galeriju</button>    
                </Link>
            </div>
        </section>
    )
}