export function Footer() {
  return (
    <footer className="py-8 bg-white/80 backdrop-blur-sm text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/images/logo.png" alt="Mawy's" width={100} height={40} className="h-8 w-auto" />
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} Mawy's Galletitas Dulces</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 