import Link from 'next/link'
import ReadingSample from '@/components/reading-sample'

const description = 'Start with a thought. Sigmood turns it into short AI-written pages you can read and revisit on iPhone.'
export const metadata = {
  title: 'Sigmood — a reading app for iPhone',
  description,
  alternates: { canonical: '/sigmood/' },
  openGraph: {
    type: 'website', url: '/sigmood/', title: 'Sigmood by Personium', description,
    images: [{ url: '/sigmood/statue.webp', width: 768, height: 768, alt: 'The Sigmood reader in pixel sunglasses' }],
  },
}

export default function Sigmood() {
  return <>
    <section className="wrap cover" aria-labelledby="cover-title">
      <div className="cover-copy">
        <p className="label imprint">Personium publishes</p>
        <h1 id="cover-title">Sigmood<span className="dot">.</span></h1>
        <p className="deck">A little reading, <em>written for you.</em></p>
        <p className="lead">Give Sigmood a thought. Its AI writes a few short pages around it, ready to read on your iPhone.</p>
        <div className="actions">
          <a className="action" href="#reading-room">Try a reading sample <span aria-hidden="true">↓</span></a>
          <Link className="textlink" href="/sigmood/introduction/">How it works</Link>
        </div>
      </div>
      <figure className="portrait">
        <div className="plate"><img src="/sigmood/statue.webp" width="768" height="768" alt="A faceted marble reader in pixel sunglasses, chin lifted beside a violet sigma" fetchPriority="high"/></div>
        <figcaption><span>Plate 01</span><i>The reader</i><span aria-hidden="true">Σ</span></figcaption>
      </figure>
    </section>
    <ReadingSample/>
    <section className="wrap endnote">
      <div><p className="label">Inside Sigmood</p>
      <h2>Keep the conversation.</h2></div>
      <div><p>Ask for a different angle in Write. Swipe through the pages in Read. Return to the conversation in Saved.</p>
      <Link className="textlink" href="/sigmood/introduction/">Read the introduction →</Link></div>
    </section>
  </>
}
