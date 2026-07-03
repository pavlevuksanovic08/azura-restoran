import { useState } from "react"
import { useGallery } from "../context/GalleryContext"
import styles from "./Gallery.module.css"
import ScrollToTop from "../ScrollToTop"

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
                <div className={styles.main}>
                    <h1 className={styles.heading}>Galerija</h1>
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
                </div>
            </main>
        </>
    )
}