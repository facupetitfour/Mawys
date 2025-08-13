import { useTheme } from "@/lib/useTheme"
import { useMemo } from "react"

interface Flavor {
  name: string
  lightColor: string
  darkColor: string
  lightTextColor: string
  darkTextColor: string
  emoji: string
}

const flavors: Flavor[] = [
  { 
    name: "Coco", 
    lightColor: "#f8f4e6", 
    darkColor: "#2c2a25", 
    lightTextColor: "#8B4513", 
    darkTextColor: "#f4d03f", 
    emoji: "🥥" 
  },
  { 
    name: "Naranja", 
    lightColor: "#fff5e6", 
    darkColor: "#332b21", 
    lightTextColor: "#d35400", 
    darkTextColor: "#f39c12", 
    emoji: "🍊" 
  },
  { 
    name: "Vainilla", 
    lightColor: "#fffef7", 
    darkColor: "#2a2a26", 
    lightTextColor: "#795548", 
    darkTextColor: "#f7dc6f", 
    emoji: "🌟" 
  },
  { 
    name: "Limón", 
    lightColor: "#f9fbe7", 
    darkColor: "#1f2018", 
    lightTextColor: "#827717", 
    darkTextColor: "#f1c40f", 
    emoji: "🍋" 
  },
  { 
    name: "Banana", 
    lightColor: "#fffef0", 
    darkColor: "#2b2a1e", 
    lightTextColor: "#f57f17", 
    darkTextColor: "#f39c12", 
    emoji: "🍌" 
  },
  { 
    name: "Miel", 
    lightColor: "#fff8e1", 
    darkColor: "#2e271a", 
    lightTextColor: "#e65100", 
    darkTextColor: "#f39c12", 
    emoji: "🍯" 
  },
]

export function Flavors() {
  const { theme } = useTheme()
  
  // Memoizar los estilos para evitar recálculos innecesarios
  const flavorStyles = useMemo(() => {
    return flavors.map(flavor => ({
      backgroundColor: theme === 'dark' ? flavor.darkColor : flavor.lightColor,
      color: theme === 'dark' ? flavor.darkTextColor : flavor.lightTextColor
    }))
  }, [theme])
  
  return (
    <section
      id="flavors"
      className="min-h-screen py-20 relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-200">Nuestros Sabores</h2>
            <div className="w-24 h-1 bg-[#E54B4B] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
              Descubre nuestra variedad de sabores, cada uno con su personalidad única y elaborado con ingredientes
              seleccionados.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {flavors.map((flavor, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-200 hover:shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 text-center py-8 will-change-transform"
                style={{ 
                  backgroundColor: flavorStyles[index].backgroundColor,
                  transition: 'background-color 200ms ease-in-out, transform 200ms ease-in-out'
                }}
              >
                <div className="p-6">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                    {flavor.emoji}
                  </div>
                  <h3 
                    className="text-2xl font-bold transition-colors duration-200" 
                    style={{ 
                      color: flavorStyles[index].color
                    }}
                  >
                    {flavor.name}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E54B4B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-200">
              Todos nuestros productos están disponibles en presentaciones de 750gr y 3kg
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 