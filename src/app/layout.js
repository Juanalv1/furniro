import ThemeProvider from './context/ThemeProvider'
import './globals.css'


export const metadata = {
  title: 'Furniro',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='m-0 font-poppins'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
