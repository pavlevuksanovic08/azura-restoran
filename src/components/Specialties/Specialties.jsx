import Dish from "./Dish/Dish"
import styles from "./Specialties.module.css"
import leftArrow from "../../assets/icons/left-arrow.png"
import rightArrow from "../../assets/icons/right-arrow.png"
import rawSlider from "react-slick"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const Slider = rawSlider?.default?.default || rawSlider?.default || rawSlider

export default function Specialties({ dishes }) {

    const sliderRef = useRef()
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        function updateSlides() {
            const width = window.innerWidth;
            setSlidesToShow(width < 676 ? 1 : 3);
        }

        updateSlides();
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        adaptiveHeight: true,
    };

    function handleLeftClick() {
        sliderRef.current?.slickPrev()
    }

    function handleRightClick() {
        sliderRef.current?.slickNext()
    }

    return (
        <section className={styles.section}>
            <div className={styles.specialties}>
                <div className={styles.headingWrap}>
                    <h2>Specijaliteti</h2>
                </div>
                <div className={styles.dishes}>
                    <Slider {...settings} ref={sliderRef}>
                        {dishes.map((dish, index) => (
                            <Dish dish={dish} key={index} />
                        ))}
                    </Slider>
                    <Link to="/menu" className={styles.menuLink}>Pogledaj Meni</Link>
                    <div className={styles.leftArrow} onClick={handleLeftClick}>
                        <img src={leftArrow} className={styles.arrow} alt="Prethodni specijalitet" />
                    </div>
                    <div className={styles.rightArrow} onClick={handleRightClick}>
                        <img src={rightArrow} className={styles.arrow} alt="Sledeći specijalitet" />
                    </div>
                </div>
            </div>
        </section>
    )
} 