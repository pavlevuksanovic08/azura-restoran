import styles from "./Footer.module.css"
import logo from "../../assets/images/logo.webp"
import instagram from "../../assets/icons/instagram.png"
import tiktok from "../../assets/icons/tiktok.png"

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <img src={logo} className={styles.logo} />
                <p className={styles.copy}>© 2026 Kafana. Website by Pavle Vuksanović.</p>
                <div className={styles.follow}>
                    <p>
                        Prati nas
                    </p>
                    <a>
                        <img src={instagram} className={styles.icon} />
                    </a>
                    <a>
                        <img src={tiktok} className={styles.icon} />
                    </a>
                </div>
            </div>
        </footer>
    )
}