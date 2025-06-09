interface Flavor {
  name: string
  color: string
  textColor: string
  emoji: string
}

const flavors: Flavor[] = [
  { name: "Coco", color: "#f8f4e6", textColor: "#8B4513", emoji: "🥥" },
  { name: "Naranja", color: "#fff5e6", textColor: "#d35400", emoji: "🍊" },
  { name: "Vainilla", color: "#fffef7", textColor: "#795548", emoji: "🌟" },
  { name: "Limón", color: "#f9fbe7", textColor: "#827717", emoji: "🍋" },
  { name: "Banana", color: "#fffef0", textColor: "#f57f17", emoji: "🍌" },
  { name: "Miel", color: "#fff8e1", textColor: "#e65100", emoji: "🍯" },
]

export function Flavors() {
  return (
    <section
      id="flavors"
      className="min-h-screen py-20 relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] -left-[15%] w-[40%] h-[40%] bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[10%] -right-[15%] w-[40%] h-[40%] bg-orange-200 rounded-full opacity-25 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">Nuestros Sabores</h2>
            <div className="w-24 h-1 bg-[#E54B4B] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra variedad de sabores, cada uno con su personalidad única y elaborado con ingredientes
              seleccionados.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {flavors.map((flavor, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm border border-white/50 text-center py-8"
                style={{ backgroundColor: flavor.color }}
              >
                <div className="p-6">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {flavor.emoji}
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: flavor.textColor }}>
                    {flavor.name}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E54B4B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">
              Todos nuestros productos están disponibles en presentaciones de 750gr y 3kg
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 