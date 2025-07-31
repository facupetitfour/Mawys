// import { Button } from "@/components/ui/button"

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
            <h4 className="text-xl font-bold mb-8 text-gray-800 dark:text-gray-100">Para pedidos y consultas, envíanos un correo o escribenos por whatsapp</h4>
            <div className="flex flex-col md:flex-col md:items-start mb-8 pb-8 border-b border-gray-200 dark:border-gray-700 gap-8">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-[#E54B4B] flex items-center justify-center flex-shrink-0 shadow-lg mr-4 cursor-pointer" onClick={() => window.open("mailto:mawyspanificados@gmail.com", "_blank")}>
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
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-[#E54B4B] flex items-center justify-center flex-shrink-0 shadow-lg mr-4 cursor-pointer" onClick={() => window.open("https://wa.me/+5492615045146?text=Hola%20Mawy's,%20Quiero%20realizar%20una%20consulta.", "_blank")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">WhatsApp</h4>
                  <a
                    href="https://wa.me/+5492615045146?text=Hola%20Mawy's,%20Quiero%20realizar%20una%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#E54B4B] transition-colors cursor-pointer"
                  >
                    +54 9 261 504-5146  
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

            {/* <form className="space-y-6">
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
            </form> */}
          </div>
        </div>
      </div>
    </section>
  )
} 