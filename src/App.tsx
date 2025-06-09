import { useState, useEffect } from "react"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Flavors } from "@/components/Flavors"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  // Cambiar sección activa basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "flavors", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-800 overflow-x-hidden">
      <Navigation activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Flavors />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
