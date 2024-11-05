import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dentaclic',
  description: 'Dentaclic es una plataforma en línea que facilita la conexión entre pacientes y dentistas. Ayuda a atraer más pacientes a tu consultorio dental y permite a los usuarios encontrar especialistas cerca de su ubicación. La plataforma simplifica la programación de citas y la comunicación, brindando una experiencia fluida tanto para los pacientes como para los dentistas. Además, todos los profesionales listados son verificados para garantizar calidad y seguridad. Dentaclic es un recurso confiable para servicios dentales de calidad.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
