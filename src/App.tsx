import { useState, useEffect } from "react"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Flavors } from "@/components/Flavors"
import { Contact } from "@/components/Contact"
// import { Footer } from "@/components/Footer"

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
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 overflow-x-hidden transition-colors">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-orange-200 dark:bg-orange-900 rounded-full opacity-30 dark:opacity-20 blur-3xl"></div>
        <div className="absolute top-[60%] -left-[5%] w-[30%] h-[30%] bg-yellow-200 dark:bg-yellow-900 rounded-full opacity-40 dark:opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[25%] h-[25%] bg-red-200 dark:bg-red-900 rounded-full opacity-25 dark:opacity-20 blur-3xl"></div>
      </div>
      <Navigation activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Flavors />
      <Contact />
      {/* <Footer /> */}
    </div>
  )
}

export default App
