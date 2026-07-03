import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import Gallery from "../components/Gallery/Gallery"
import Header from "../components/Header/Header"
import Specialties from "../components/Specialties/Specialties"
import About from "../components/About/About"
import { useState, useEffect } from "react"
import Contact from "../components/Contact/Contact"
import ScrollToTop from "../ScrollToTop"


function App() {

  const [dishes, setDishes] = useState([]);
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('/specialties.json')
    .then(res => res.json())
    .then(data => setDishes(data))
    .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    fetch('/gallery.json')
    .then(res => res.json())
    .then(data => setImages(data))
    .catch(err => console.error(err))
  }, [])

  return (
    <>
    <ScrollToTop />
      <main>
        <div>
          <Hero />
          <About />
          <Specialties dishes={dishes}/>
          <Gallery images={images} />
          <Contact />
        </div>
      </main>
    </>
  )
}

export default App
