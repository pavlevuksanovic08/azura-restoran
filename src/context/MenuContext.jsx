import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext();

function preloadImages(sections) {
    // Preload section icons (carousel thumbnails) and section images
    const images = sections.flatMap(sec => {
        const sectionImages = [];
        if (sec.icon) sectionImages.push(sec.icon);
        if (sec.images?.length) {
            sectionImages.push(...sec.images.map(img => img.src).filter(Boolean));
        }
        return sectionImages;
    });

    const preloadPromises = images.map(src => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
        });
    });

    // Always wait at least 500ms so loading screen is visible
    const minDelay = new Promise(resolve => setTimeout(resolve, 500));

    return Promise.all([...preloadPromises, minDelay]);
}

export default function MenuProvider({ children }) {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch("/menu.json");
                const data = await res.json();

                const sections = Object.values(data.jelovnik);

                // 🔥 preload svih slika
                await preloadImages(sections);

                setMenu(sections);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, []);

    return (
        <MenuContext.Provider value={{ menu, loading }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    const ctx = useContext(MenuContext);

    if (!ctx) {
        throw new Error("useMenu must be used inside MenuProvider");
    }

    return ctx;
}