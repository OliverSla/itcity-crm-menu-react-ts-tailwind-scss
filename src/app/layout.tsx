import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.scss'
import { ThemeProvider } from '@/contexts/ThemeContext'
import DashboardHeader from '@/components/layout/DashboardHeader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'ITCity Dashboard',
  description: 'ITCity administration dashboard'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-gradient-a dark:to-gradient-b">
            <DashboardHeader />
            <main className='z-10'>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
