import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nueva paleta de colores - Ser Consciente
        primary: '#FF8C00',      // Naranja Vibrante (Primario)
        amber: '#FFB347',        // Ámbar Suave (Secundario)
        gold: '#FFCC33',         // Oro Claro (Iluminaciones)
        burnt: '#E65100',        // Naranja Quemado (Profundidad)
        cream: '#FFF9F0',        // Fondo cálido
        warmgray: '#4A4A4A',     // Texto principal
      },
      fontFamily: {
        buffalo: ['Buffalo', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #FF8C00 0%, #FFB347 100%)',
        'gradient-soft': 'linear-gradient(135deg, #FFB347 0%, #FFCC33 100%)',
      },
    },
  },
  plugins: [],
}
export default config
