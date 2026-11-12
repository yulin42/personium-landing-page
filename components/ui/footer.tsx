import Link from 'next/link'
export default function Footer() {
 return <footer className="wrap foot"><p>Sigmood is a product of <Link href="/">Personium</Link>.</p><nav aria-label="Footer"><Link href="/sigmood/support/">Support</Link><Link href="/sigmood/privacy/">Privacy</Link></nav></footer>
}
