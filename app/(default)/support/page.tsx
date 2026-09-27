import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Help for Hava AI, a calm reading app for iPhone. Contact, how to use the app, and answers to common questions.',
}

const supportEmail = 'samuel@personium.ai'

export default function Support() {
  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <h1 className="h2 mb-4">Support</h1>
          <p className="text-xl text-gray-400 mb-10">
            Hava AI is a calm reading app for iPhone. Choose a theme, generate short posts, and read them one screen at a time.
          </p>

          <div className="mb-12 p-6 bg-gray-800 bg-opacity-40 rounded">
            <h2 className="h4 mb-2">Contact</h2>
            <p className="text-gray-400 mb-4">
              Questions, feedback, or trouble with the app? Email us and include the iPhone model and iOS version if something is not working.
            </p>
            <a className="text-purple-400 hover:text-purple-300 font-medium" href={`mailto:${supportEmail}`}>
              {supportEmail}
            </a>
          </div>

          <div className="space-y-10 text-gray-400">
            <article>
              <h2 className="text-xl text-gray-200 font-bold mb-2">How do I generate posts?</h2>
              <p>
                Open the Generate tab, choose a theme — Reflection, Motivation, Discipline, Focus, Confidence, or Philosophy — then choose 10, 20, 30, or 50 posts. Tap Generate. New posts appear in Feed.
              </p>
            </article>

            <article>
              <h2 className="text-xl text-gray-200 font-bold mb-2">How do I read and save posts?</h2>
              <p>
                Feed shows one post per screen. Swipe to move to the next one. Tap the heart to save a post, then open Favorites to reread what you kept.
              </p>
            </article>

            <article>
              <h2 className="text-xl text-gray-200 font-bold mb-2">Where is my data stored?</h2>
              <p>
                Posts and favorites stay on your device. Hava AI has no account. Deleting the app removes them. See the <Link href="/privacy" className="text-purple-400 hover:text-purple-300">privacy policy</Link> for what is sent when you generate.
              </p>
            </article>

            <article>
              <h2 className="text-xl text-gray-200 font-bold mb-2">Generation failed, or I appear to be offline.</h2>
              <p>
                Check your internet connection and tap Try Again. If it still fails, email {supportEmail} and describe what you saw.
              </p>
            </article>

            <article>
              <h2 className="text-xl text-gray-200 font-bold mb-2">How do I delete my posts?</h2>
              <p>
                Open Settings, turn on Debugging Mode, then tap Clear All Feed Records. This deletes every generated post, including favorites, and cannot be undone.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
