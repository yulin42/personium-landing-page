import Link from 'next/link'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            <Link href="/" className="block font-bold text-gray-100" aria-label="Hava AI">
              Hava AI
            </Link>
          </div>

          <nav className="flex items-center">
            <Link href="/support" className="text-sm font-medium text-gray-300 hover:text-white transition duration-150 ease-in-out">
              Support
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
