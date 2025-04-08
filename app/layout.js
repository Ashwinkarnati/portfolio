import './globals.css'
import { Inter } from 'next/font/google'
import Header from './_components/Header'
import Footer from './_components/Footer'
import { ThemeProvider } from './_components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Karnati Ashwin | Portfolio',
  description: 'Portfolio of Karnati Ashwin - Full Stack Developer & AI Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-900`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}