import { useState } from "react"
import { useGallery } from "../context/GalleryContext"
import styles from "./Gallery.module.css"
import ScrollToTop from "../ScrollToTop"
import { motion } from "framer-motion"

export default function Gallery() {

    const { images, loading } = useGallery()

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

    if (loading) return <p>Ucitavanje galerije...</p>

    return (
        <>
            <ScrollToTop />
            <main>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className={styles.main}
                >
                    <h1 className={styles.heading}>Galerija</h1>
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
                </motion.div>
            </main>
        </>
    )
}