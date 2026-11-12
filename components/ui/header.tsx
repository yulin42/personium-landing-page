'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [['Sigmood','/sigmood/'],['Introduction','/sigmood/introduction/'],['Support','/sigmood/support/']]
export default function Header() {
  const path = (usePathname() || '/').replace(/\/$/, '')
  return <header className="mast"><div className="wrap mast-inner">
    <Link className="parent" href="/">
      <svg width="22" height="25" viewBox="0 0 22 25" aria-hidden="true" fill="currentColor"><path d="M1 3h10l-4 4H1zm0 8h13l-4 4H1zm0 8h9l-4 4H1zM13 3h8l-4 4H9z"/></svg>Personium
    </Link>
    <nav aria-label="Main navigation">{links.map(([name,href]) =>
      <Link key={href} href={href} aria-current={path === href.slice(0,-1) || path === '/support' && name === 'Support' ? 'page' : undefined}>{name}</Link>
    )}</nav>
  </div></header>
}
