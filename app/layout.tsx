import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ser Consciente | Gloria Salgado - Coach Ontológico',
  description: 'Conexión y transformación a través de la conciencia. Cultiva la autoconciencia y la empatía como base para mejorar todos los vínculos humanos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
