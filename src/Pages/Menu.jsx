import { useEffect, useState } from "react";
import rawSlider from "react-slick";
import styles from "./Menu.module.css"
import MenuData from "../components/MenuData/MenuData";
import { useMenu } from "../context/MenuContext";
import ScrollToTop from "../ScrollToTop";


const Slider = rawSlider?.default?.default || rawSlider?.default || rawSlider


export default function Menu() {

    const { menu, loading } = useMenu()
    const [sectionIndex, setSectionIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(5);

    useEffect(() => {
        function updateSlides() {
            const width = window.innerWidth;
            if (width < 480) {
                setSlidesToShow(2);
            } else if (width < 676) {
                setSlidesToShow(3);
            } else {
                setSlidesToShow(5);
            }
        }

        updateSlides();
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    if (loading) return <p>Ucitavanje menija...</p>

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        swipeToSlide: true,
        adaptiveHeight: true,
    };

    return (
        <>
            <ScrollToTop />
            <main>
                <div className={styles.main}>
                    <h1 className={styles.header}>Meni</h1>
                    <div className={styles.sections}>
                        <Slider {...settings}>
                            {menu.map((section, index) => (
                                <div key={index}>   
                                    <div 
                                        onClick={() => setSectionIndex(index)}
                                        className={styles.cardImage}
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${section.icon?.startsWith('/') ? section.icon : '/' + section.icon})`                                    
                                        }}
                                        
                                    >
                                        <p>{section.naziv_sekcije}</p>

                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <MenuData section={menu[sectionIndex]} />
                    
                </div>
            </main>
        </>
    );
}