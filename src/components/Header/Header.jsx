import logo from "../../assets/images/logo.webp";
import menu from "../../assets/icons/menu.png";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ transparent }) {
    const [show, setShow] = useState(true);
    const [isTransparent, setIsTransparent] = useState(true);
    const [displayNav, setDisplayNav] = useState(true);
    const [displayMenu, setDisplayMenu] = useState(false);

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    // RESPONSIVE NAV
    useEffect(() => {
        const handleResize = () => {
            setDisplayNav(window.innerWidth >= 676);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // SCROLL LOGIC (TRANSPARENT + HIDE)
    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            const current = window.scrollY;

            setIsTransparent(current < 50);

            if (current > lastScroll && current > 50) {
                setShow(false);
            } else {
                setShow(true);
            }

            lastScroll = current;
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // DISABLE BODY SCROLL WHEN MENU OPEN
    useEffect(() => {
        document.body.style.overflow = displayMenu ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [displayMenu]);

    return (
        <>
            <header
                className={`
                    ${styles.header}
                    ${styles.fixed}
                    ${show ? "" : styles.hide}
                    ${transparent && isTransparent ? styles.transparent : ""}
                `}
            >
                <div className={styles.headerDiv}>
                    <img src={logo} className={styles.logo} alt="logo" />

                    {displayNav ? (
                        <nav>
                            <ul className={styles.nav}  type="none">
                                <Link to="/"><li className={styles.navItem}>Početna</li></Link>
                                <Link to="/menu"><li className={styles.navItem}>Meni</li></Link>
                                <Link to="/gallery"><li className={styles.navItem}>Galerija</li></Link>
                            </ul>
                        </nav>
                    ) : (
                        <img
                            src={menu}
                            className={styles.menuBtn}
                            onClick={() => setDisplayMenu(true)}
                            alt="menu"
                        />
                    )}
                </div>
            </header>

            {!isHomePage && <div className={styles.spacer} />}

            <div
                className={`${styles.overlay} ${displayMenu ? styles.show : ""}`}
                onClick={() => setDisplayMenu(false)}
            />

            <aside className={`${styles.menu} ${displayMenu ? styles.open : ""}`}>
                <nav className={styles.links}>
                    <Link to="/" onClick={() => setDisplayMenu(false)}>Početna</Link>
                    <Link to="/menu" onClick={() => setDisplayMenu(false)}>Meni</Link>
                    <Link to="/gallery" onClick={() => setDisplayMenu(false)}>Galerija</Link>
                </nav>
                <img src={logo} alt="logo" />
            </aside>
        </>
    );
}