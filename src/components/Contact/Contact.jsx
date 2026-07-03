import styles from "./Contact.module.css"
import contact1 from "../../assets/images/contact1.webp"
import contact2 from "../../assets/images/contact2.webp"

export default function Contact() {
    return (
        <section id="contact">
            <div className={styles.contact}>
                <h2>Find Us & Contact</h2>

                <div className={styles.contactData}>
                    <figure className={styles.fig}>
                        <img src={contact1} className={styles.img} />
                    </figure>
                   <div className={styles.meta}>

                        <div>
                            <div className={styles.map}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5071.41866163272!2d20.460480399999998!3d44.8101702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aaec4bac77d%3A0x189f7402322ed04e!2z0JXQu9C10LrRgtGA0L7RgtC10YXQvdC40YfQutCwINGI0LrQvtC70LAgItCd0LjQutC-0LvQsCDQotC10YHQu9CwIg!5e1!3m2!1ssr!2srs!4v1782816956483!5m2!1ssr!2srs" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>            
                            </div>
                            <p>📍 Kralja Petra 15, Belgrade</p>
                            <p>📞 +381 60 123 4567</p>
                            <p>🕒 Mon–Sun: 09:00–00:00</p>
                        </div>
                        
                        <a href="tel:+381601234567">
                            <button className={styles.reservationBtn}>
                                Rezerviši
                            </button>
                        </a>
                    </div>
                    <figure className={styles.fig}>
                        <img src={contact2} className={styles.img} />
                    </figure>
                    
                </div>
            </div>
        </section>
    )
}