export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h3 mb-4">Short posts, written to be read slowly</h2>
            <p className="text-xl text-gray-400">Each post is one to three sentences and stands on its own. Nothing else competes with the text.</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">Generate</h4>
              <p className="text-lg text-gray-400 text-center">Pick a theme and ask for 10, 20, 30, or 50 posts. Each one expresses a different idea.</p>
            </div>

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Read</h4>
              <p className="text-lg text-gray-400 text-center">The feed shows one post per screen. Swipe to the next thought when you are ready.</p>
            </div>

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M32 42s-10-6.2-10-12.2C22 26.2 24.4 24 27.4 24c1.8 0 3.4.9 4.6 2.3C33.2 24.9 34.8 24 36.6 24 39.6 24 42 26.2 42 29.8 42 35.8 32 42 32 42z" fill="none" />
              </svg>
              <h4 className="h4 mb-2">Keep</h4>
              <p className="text-lg text-gray-400 text-center">Heart a post to save it. Favorites stay on your device, ready to reread.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
