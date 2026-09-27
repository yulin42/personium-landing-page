import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy policy for Hava AI. Posts stay on your device. Generation sends only the theme and the number of posts you requested.',
}

export default function Privacy() {
  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <h1 className="h2 mb-4">Privacy</h1>
          <p className="text-gray-500 mb-10">Effective September 27, 2026</p>

          <div className="space-y-8 text-gray-400">
            <p>
              Hava AI is a reading app. It does not ask you to create an account, and it does not include advertising or analytics.
            </p>

            <article>
              <h2 className="text-xl text-gray-200 font-bold mb-2">What stays on your device</h2>
              <p>
                Generated posts, favorites, and the Debugging Mode setting are stored locally on your iPhone. They are not uploaded to a Hava AI server. Deleting the app deletes this data. You can also erase posts from Settings by turning on Debugging Mode and choosing Clear All Feed Records.
              </p>
            </article>

            <article>
              <h2 className="text-xl text-gray-200 font-bold mb-2">What is sent when you generate</h2>
              <p>
                Generating posts sends the theme you chose and the number of posts you requested to <a className="text-purple-400 hover:text-purple-300" href="https://openrouter.ai" target="_blank" rel="noopener noreferrer">OpenRouter</a>, which writes the text. The request does not include your existing posts, favorites, or a user identity. The returned text is saved only on your device. OpenRouter processes that request under its own privacy policy.
              </p>
            </article>

            <article>
              <h2 className="text-xl text-gray-200 font-bold mb-2">Contact</h2>
              <p>
                Questions about this policy can go to <a className="text-purple-400 hover:text-purple-300" href="mailto:samuel@personium.ai">samuel@personium.ai</a>, or through the <Link href="/support" className="text-purple-400 hover:text-purple-300">support page</Link>.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
