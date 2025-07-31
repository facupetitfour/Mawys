import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-gray-100">
                Mawy's
                <span className="block text-[#E54B4B]">Galletitas Dulces</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-md">
                Descubre el sabor de la tradición en cada bocado. Polvorones artesanales con los mejores ingredientes.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0    }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
              <Button  className="bg-[#E54B4B] hover:bg-[#c43c3c] text-white rounded-full px-8 py-6 text-lg shadow-lg" onClick={() => {
                window.location.href = "#flavors"
              }}>
                Descubrir Sabores
              </Button>
            </motion.div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 p-8  ">
                <img
                  src="/images/logoupscaled.png"
                  alt="Mawy's Galletitas Dulces"
                  width={400}
                  height={200}
                  className="w-full h-auto mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-gray-600 dark:text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  )
} 