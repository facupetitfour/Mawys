import { useState, useEffect, useCallback } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Verificar si hay un tema guardado en localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme
      if (savedTheme) {
        return savedTheme
      }
      
      // Verificar preferencia del sistema
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    
    return 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    
    // Usar requestAnimationFrame para optimizar el cambio de clases
    requestAnimationFrame(() => {
      // Remover clases anteriores
      root.classList.remove('light', 'dark')
      
      // Agregar la clase del tema actual
      root.classList.add(theme)
    })
    
    // Guardar en localStorage de forma asíncrona para no bloquear el render
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }, [])

  return { theme, toggleTheme }
} 