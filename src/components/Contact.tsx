export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative transition-colors duration-300"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
              Contáctanos
            </h2>
            <div className="w-24 h-1 bg-[#E54B4B] mx-auto mb-6 transition-colors duration-300" />
          </div>

          {/* Tarjeta de contacto */}
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-lg border border-white/50 dark:border-gray-700/50 transition-colors duration-300">
            <h4 className="text-xl  mb-8 text-gray-700 dark:text-gray-100 transition-colors duration-300">
              Para pedidos y consultas, envíanos un correo o escríbenos por WhatsApp
            </h4>

            <div className="flex flex-col md:items-start mb-8 gap-8 transition-colors duration-300">

              {/** Contact Items */}
              {[
                {
                  title: "Email",
                  link: "mailto:mawyspanificados@gmail.com",
                  display: "mawyspanificados@gmail.com",
                  icon: (
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
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                },
                {
                  title: "WhatsApp",
                  link: "https://wa.me/+5492615045146?text=Hola%20Mawy's,%20Quiero%20realizar%20una%20consulta.",
                  display: "+54 9 261 504-5146",
                  icon: (
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
                  ),
                },
                {
                  title: "Ubicación",
                  display: "Mendoza, Argentina",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center mb-4 md:mb-0">
                  <div
                    className="w-12 h-12 rounded-full bg-[#E54B4B] flex items-center justify-center flex-shrink-0 shadow-lg mr-4 cursor-pointer transition-colors duration-300"
                    onClick={() => item.link && window.open(item.link, "_blank")}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100 transition-colors duration-300">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-[#E54B4B] transition-colors duration-300 cursor-pointer"
                      >
                        {item.display}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                        {item.display}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
