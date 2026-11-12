import type { Metadata } from 'next'
import './css/style.css'
import './sigmood.css'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://personium.com'),
  title: { default: 'Personium', template: '%s · Personium' },
  icons: { icon: '/sigmood/icon.png' },
}
export default function Layout({children}: {children: React.ReactNode}) {
  return <html lang="en"><body className="publication"><a className="skip" href="#content">Skip to content</a><Header/><main id="content">{children}</main><Footer/></body></html>
}
