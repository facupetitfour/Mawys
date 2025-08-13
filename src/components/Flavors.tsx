interface Flavor {
  name: string
  emoji: string
  textClass: string
}

const flavors: Flavor[] = [
  { name: "Coco", emoji: "🥥", textClass: "text-coco-textLight dark:text-coco-textDark" },
  { name: "Naranja", emoji: "🍊", textClass: "text-naranja-textLight dark:text-naranja-textDark" },
  { name: "Vainilla", emoji: "🌟", textClass: "text-vainilla-textLight dark:text-vainilla-textDark" },
  { name: "Limón", emoji: "🍋", textClass: "text-limon-textLight dark:text-limon-textDark" },
  { name: "Banana", emoji: "🍌", textClass: "text-banana-textLight dark:text-banana-textDark" },
  { name: "Miel", emoji: "🍯", textClass: "text-miel-textLight dark:text-miel-textDark" },
]

export function Flavors() {
  return (
    <section
      id="flavors"
      className="min-h-screen py-20 relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
              Nuestros Sabores
            </h2>
            <div className="w-24 h-1 bg-[#E54B4B] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Descubre nuestra variedad de sabores, cada uno con su personalidad única y elaborado con ingredientes seleccionados.
            </p>
          </div>

          {/* Lista de sabores */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {flavors.map((flavor, index) => (
              <div
                key={index}
                className="
                  group relative overflow-hidden rounded-2xl
                  text-center py-8 border border-white/50 dark:border-gray-700/50
                  md:hover:shadow-xl md:transition-shadow md:duration-300
                  bg-white/30 dark:bg-gray-700/20 backdrop-blur-md
                  transition-colors duration-300
                "
              >
                <div className="p-6">
                  <div className="text-6xl mb-4 md:transform md:group-hover:scale-110 md:transition-transform md:duration-300">
                    {flavor.emoji}
                  </div>
                  <h3 className={`text-2xl font-bold md:transition-colors md:duration-300 ${flavor.textClass}`}>
                    {flavor.name}
                  </h3>
                </div>
                <div className="md:absolute md:bottom-0 md:left-0 md:w-full md:h-1 md:bg-[#E54B4B] md:transform md:scale-x-0 md:group-hover:scale-x-100 md:transition-transform md:duration-300 md:origin-left"></div>
              </div>
            ))}
          </div>

          {/* Texto final */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Todos nuestros productos están disponibles en presentaciones de 750gr y 3kg
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
