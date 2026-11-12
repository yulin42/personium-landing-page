import Link from 'next/link'
import {Info,supportEmail} from '@/components/sigmood-info'
export const metadata={title:'Sigmood support',description:'Get help with writing, reading and saved conversations in Sigmood. Contact Personium support.',alternates:{canonical:'/sigmood/support/'}}
const questions=[
 ['How do I get my first pages?', 'Open Write, enter a sentence about what you want to read, and tap Write. If Sigmood asks a follow-up question, reply in the same conversation. Open a generated page to read it.'],
 ['Where did my conversation go?', 'Open Saved and select the conversation. This takes you back to Write. To browse the pages it generated, open Read.'],
 ['What if writing fails?', 'New pages need an internet connection. Check your connection and tap Try again. If the error persists, send us the message you saw and your iOS version.'],
 ['How do I delete a conversation?', 'In Saved, swipe on the conversation, choose Delete, and confirm. Its pages are removed from Read too. This cannot be undone.'],
]
export default function Support(){return <Info contents={[["contact", "Email support"], ["questions", "Common questions"]]} section="Help desk" title="Sigmood support." summary="Need a hand with the app, or have feedback for Personium?"><aside className="contact" id="contact"><p className="label">Contact Personium</p><h2>Email support</h2><p>If something went wrong, include your iPhone model, iOS version, and what you were doing when it happened.</p><a className="textlink" href={'mailto:'+supportEmail+'?subject=Sigmood%20support'}>{supportEmail}</a></aside><section id="questions"><h2>Common questions</h2>{questions.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section><Link className="textlink" href="/sigmood/privacy/">How Sigmood handles your writing →</Link></Info>}
