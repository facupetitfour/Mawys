
interface NavigationProps {
  activeSection: string
  setMenuOpen: (isOpen: boolean) => void
  menuOpen: boolean
}

export function Navigation({ activeSection, setMenuOpen, menuOpen }: NavigationProps) {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      {/* Menú de navegación flotante */}
      <div className="fixed top-8 right-8 z-50">
        <button
          onClick={toggleMenu}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center focus:outline-none border border-orange-100"
        >
          <span className="sr-only">Menú</span>
          <div className="w-6 flex flex-col items-center">
            <span
              className={`block h-0.5 w-6 bg-[#E54B4B] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-[#E54B4B] my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-[#E54B4B] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Menú desplegable */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md z-40 transition-all duration-500 rounded-l-3xl shadow-2xl border-l border-gray-200 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="text-center mb-8">
            <img src="/images/logo.png" alt="Mawy's" width={120} height={48} className="mx-auto mb-4" />
          </div>

          <nav className="flex flex-col space-y-6 flex-1">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className={`text-xl font-medium transition-colors py-3 px-4 rounded-lg ${
                activeSection === "home"
                  ? "text-[#E54B4B] bg-red-50"
                  : "text-gray-800 hover:text-[#E54B4B] hover:bg-gray-50"
              }`}
            >
              Inicio
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className={`text-xl font-medium transition-colors py-3 px-4 rounded-lg ${
                activeSection === "about"
                  ? "text-[#E54B4B] bg-red-50"
                  : "text-gray-800 hover:text-[#E54B4B] hover:bg-gray-50"
              }`}
            >
              Nosotros
            </a>
            <a
              href="#flavors"
              onClick={() => setMenuOpen(false)}
              className={`text-xl font-medium transition-colors py-3 px-4 rounded-lg ${
                activeSection === "flavors"
                  ? "text-[#E54B4B] bg-red-50"
                  : "text-gray-800 hover:text-[#E54B4B] hover:bg-gray-50"
              }`}
            >
              Sabores
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={`text-xl font-medium transition-colors py-3 px-4 rounded-lg ${
                activeSection === "contact"
                  ? "text-[#E54B4B] bg-red-50"
                  : "text-gray-800 hover:text-[#E54B4B] hover:bg-gray-50"
              }`}
            >
              Contacto
            </a>
          </nav>

          <div className="mt-auto pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm text-center">mawyspanificados@gmail.com</p>
            <div className="mt-4 text-center">
              <button
                onClick={() => setMenuOpen(false)}
                className="bg-[#E54B4B] hover:bg-[#c43c3c] text-white px-6 py-2 rounded-full text-sm transition-colors"
              >
                Hacer Pedido
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar el menú */}
      <div
        className={`fixed inset-0 bg-black/20 z-30 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Indicador de sección */}
      <div className="fixed right-20 top-1/2 -translate-y-1/2 z-30 hidden md:block">
        <div className="flex flex-col space-y-6">
          {["home", "about", "flavors", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section ? "bg-[#E54B4B] scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir a sección ${section}`}
            />
          ))}
        </div>
      </div>
    </>
  )
} 