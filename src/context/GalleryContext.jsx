import { createContext, useContext, useEffect, useState } from "react";

const GalleryContext = createContext();

function preloadImages(images) {
    return Promise.all(
        images.map((img) => {
            return new Promise((resolve) => {
                const image = new Image();
                image.src = img.src;
                image.onload = resolve;
                image.onerror = resolve;
            });
        })
    );
}

export function GalleryProvider({ children }) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch("/gallery.json");
                const data = await res.json();

                // ako je data array:
                const galleryImages = Array.isArray(data) ? data : data.images || data;

                // 🔥 preload svih slika
                await preloadImages(galleryImages);

                setImages(galleryImages);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, []);

    return (
        <GalleryContext.Provider value={{ images, loading }}>
            {children}
        </GalleryContext.Provider>
    );
}

export function useGallery() {
    const ctx = useContext(GalleryContext);

    if (!ctx) {
        throw new Error("useGallery must be used inside GalleryProvider");
    }

    return ctx;
}