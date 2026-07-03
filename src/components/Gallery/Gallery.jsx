import { useState } from "react"
import styles from "./Gallery.module.css"
import { Link } from "react-router-dom"

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
                            <figure key={index} className={`${styles.fig} ${styles[orientationClass]}`}>
                                <img
                                    src={img.src}
                                    className={styles.img}
                                    alt={img.alt || `Galerija ${index + 1}`}
                                    onLoad={(event) => handleImageLoad(index, event)}
                                />
                            </figure>
                        )
                    })}
                </div>
                <Link to="/gallery" className={styles.galleryLink}>Pogledaj galeriju</Link>
            </div>
        </section>
    )
}