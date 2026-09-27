import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:flex md:items-center md:justify-between">
            <nav className="flex mb-4 md:order-1 md:mb-0 space-x-6 text-sm">
              <Link href="/support" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                Support
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                Privacy
              </Link>
            </nav>

            <div className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Hava AI. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
