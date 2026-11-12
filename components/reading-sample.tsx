'use client'

import { useState } from 'react'

const readings = [
  { title: 'A slower morning', prompt: 'I want a slower start to my morning.', pages: [
    'Before reaching for your phone, listen for the first sound in the room.',
    'Let the kettle finish boiling. For these few seconds, there is nothing else you need to start.',
    'On the walk out, notice one thing you usually pass without looking.',
  ] },
  { title: 'Finding focus', prompt: 'I keep drifting away from the thing I sat down to do.', pages: [
    'The open tabs can wait. Which one holds the sentence you came here to finish?',
    'Write the next line badly if you have to. A line on the page is easier to change than a line in your head.',
    'Before you leave the desk, leave a note for the person coming back: start here.',
  ] },
  { title: 'Letting a day go', prompt: 'I’ve carried my workday all the way home.', pages: [
    'Your keys hit the bowl. Your coat finds its hook. Give the day somewhere to land, too.',
    'There is one thing you forgot. Write it on a scrap of paper and leave it there for morning.',
    'Dinner needs a bowl, a fork, a chair. It does not need a verdict on the day.',
  ] },
]

export default function ReadingSample() {
  const [topic, setTopic] = useState(0)
  const [page, setPage] = useState(0)
  const reading = readings[topic]
  return <section className="reading-room" id="reading-room" aria-labelledby="sample-title" tabIndex={-1}>
    <div className="wrap room-grid">
      <div>
        <p className="label">The reading room</p>
        <h2 id="sample-title">Try a thought.</h2>
        <p className="room-intro">Choose a sample prompt, then turn through its three pages.</p>
        <div className="index" role="group" aria-label="Sample prompts">
          {readings.map(({title}, i) => <button type="button" key={title} aria-pressed={i === topic}
            onClick={() => { setTopic(i); setPage(0) }}>
            <span className="edition">0{i+1}</span>{title}<span aria-hidden="true">{i === topic ? '●' : '○'}</span>
          </button>)}
        </div>
      </div>
      <article className="leaf" aria-label="Sample reading">
        <div className="leaf-head"><small>Sigmood reader</small><span className="edition">Reading 0{topic+1}</span></div>
        <div className="passage" aria-live="polite" aria-atomic="true">
          <div className="passage-stack">
            {readings.flatMap((entry, topicIndex) => entry.pages.map((text, pageIndex) => {
              const active = topicIndex === topic && pageIndex === page
              return <div key={text} aria-hidden={!active}>
                <p className="prompt"><strong>Prompt</strong> “{entry.prompt}”</p>
                <blockquote>{text}</blockquote>
              </div>
            }))}
          </div>
          <p className="count">Page {page+1} of {reading.pages.length}</p>
        </div>
        <div className="turn">
          <button type="button" disabled={page === 0} onClick={() => setPage(page-1)}>← Previous</button>
          <button type="button" disabled={page === reading.pages.length-1} onClick={() => setPage(page+1)}>Next →</button>
        </div>
      </article>
    </div>
  </section>
}
