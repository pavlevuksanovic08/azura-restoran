export const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, ease: "easeOut" }
};

export const slideIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
};

export const slideLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" }
};

export const slideRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" }
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.96 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, ease: "easeOut" }
};

export const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, ease: "easeOut" }
};