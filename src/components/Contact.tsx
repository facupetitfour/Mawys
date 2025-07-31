import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative"
      // className="min-h-screen py-20 relative bg-gradient-to-br from-orange-100 via-red-100 to-yellow-100"

    >
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] -left-[15%] w-[40%] h-[40%] bg-red-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[10%] -right-[15%] w-[40%] h-[40%] bg-orange-300 rounded-full opacity-25 blur-3xl"></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">Contáctanos</h2>
            <div className="w-24 h-1 bg-[#E54B4B] mx-auto mb-6"></div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 dark:border-gray-700/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-[#E54B4B] flex items-center justify-center flex-shrink-0 shadow-lg mr-4">
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
                    className="w-6 h-6 text-white"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">Email</h4>
                  <a
                    href="mailto:mawyspanificados@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#E54B4B] transition-colors"
                  >
                    mawyspanificados@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#E54B4B] flex items-center justify-center flex-shrink-0 shadow-lg mr-4">
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
                    className="w-6 h-6 text-white"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">Ubicación</h4>
                  <p className="text-gray-600 dark:text-gray-300">Mendoza, Argentina</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/70 dark:bg-gray-700/70 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E54B4B] text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/70 dark:bg-gray-700/70 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E54B4B] text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/70 dark:bg-gray-700/70 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E54B4B] text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              <div className="text-center">
                <Button className="bg-[#E54B4B] hover:bg-[#c43c3c] text-white rounded-full px-8 py-3 text-lg shadow-lg">
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 