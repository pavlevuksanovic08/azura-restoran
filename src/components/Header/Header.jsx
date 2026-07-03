import logo from "../../assets/images/logo.webp"
import menu from "../../assets/icons/menu.png"
import styles from "./Header.module.css"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ transparent }) {

    const [show, setShow] = useState(true);
    const [isTransparent, setIsTransparent] = useState(true)
    const [displayNav, setDisplayNav] = useState(true);
    const [displayMenu, setDisplayMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            
            const shouldShowNav = width >= 676;

            setDisplayNav((prevDisplayNav) => {
                if (prevDisplayNav !== shouldShowNav) {
                    return shouldShowNav;
                }
                return prevDisplayNav;
            });
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        let lastScroll = window.scrollY;

        function handleScroll() {
            let currentScroll = window.scrollY;

            if (currentScroll < 20) setIsTransparent(true);

            if (currentScroll >= 20) setIsTransparent(false);

            if (currentScroll > lastScroll && currentScroll > 50) setShow(false);

            if (currentScroll < lastScroll) setShow(true);

            lastScroll = currentScroll
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    useEffect(() => {
        if (displayMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [displayMenu]);

    const location = useLocation()
    const isHomePage = location.pathname === "/"

    return (
        <>
            <header className={`${styles.header}
                    ${styles.fixed}
                    ${show ? "" : styles.hide}
                    ${transparent && isTransparent ? styles.transparent : ""}`}>
                <div className={styles.headerDiv}>
                    {/* LOGO */}
                    <img src={logo} className={styles.logo} />
                    {/* NAVIGATION */}
                    {displayNav ?
                        <nav>
                            <ul className={styles.nav} type="none">
                                <Link to="/">
                                    <li className={styles.navItem}>Početna</li>
                                </Link>
                                <Link to="/menu">
                                    <li className={styles.navItem}>Meni</li>
                                </Link>
                                <Link to="/gallery">
                                    <li className={styles.navItem}>Galerija</li>
                                </Link>
                                
                                
                            </ul>
                        </nav>
                    : 
                        <img src={menu} onClick={() => setDisplayMenu(true)} />
                    }

                    
                </div>
            </header>
            {!isHomePage && <div className={styles.spacer} />}
            <div
                className={`${styles.overlay} ${displayMenu ? styles.show : ""}`}
                onClick={() => setDisplayMenu(false)}
            ></div>

            <aside className={`${styles.menu} ${displayMenu ? styles.open : ""}`}>
                <nav className={styles.links}>
                    <Link to="/" onClick={() => setDisplayMenu(false)}>Home</Link>
                    <Link to="/menu" onClick={() => setDisplayMenu(false)}>Menu</Link>
                    <Link to="/gallery" onClick={() => setDisplayMenu(false)}>Gallery</Link>
                                    </nav>
                <img src={logo} />
            </aside>
        </>
        
    )
}