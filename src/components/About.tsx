// import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 relative"
      // className="min-h-screen py-20 relative bg-gradient-to-br from-white via-orange-50 to-yellow-50"

    >
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] -right-[15%] w-[50%] h-[50%] bg-red-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[30%] -left-[10%] w-[40%] h-[40%] bg-orange-200 rounded-full opacity-25 blur-3xl"></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">Nuestra Historia</h2>
            <div className="w-24 h-1 bg-[#E54B4B] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                En Mawy's, elaboramos galletas artesanales siguiendo recetas tradicionales que han pasado de
                generación en generación. Cada galleta es preparada con ingredientes seleccionados y con el cuidado
                que solo las manos expertas pueden ofrecer.
              </p>
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                Nuestros polvorones y especialidades son el resultado de años de experiencia y pasión por la
                repostería tradicional, manteniendo ese sabor auténtico que nos caracteriza.
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform rotate-3 border-4 border-white">
                <img
                  src="/images/products-closeup.png"
                  alt="Nuestras galletas"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-0 right-0 w-full h-full bg-orange-200/30 rounded-lg transform -rotate-3"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-24">
            <div className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#E54B4B]">6+</div>
              <div className="mt-2 text-lg text-gray-600 dark:text-gray-300">Sabores Únicos</div>
            </div>
            <div className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#E54B4B]">100%</div>
              <div className="mt-2 text-lg text-gray-600 dark:text-gray-300">Artesanal</div>
            </div>
            {/* <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#E54B4B]">2</div>
              <div className="mt-2 text-lg text-gray-600">Presentaciones</div>
            </div> */}
            <div className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#E54B4B]">10+</div>
              <div className="mt-2 text-lg text-gray-600 dark:text-gray-300">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 