import Link from 'next/link'
import type { ReactNode } from 'react'

export const supportEmail = 'samuel@personium.ai'
type Props = {
  section: string
  title: string
  summary: string
  contents: [string, string][]
  children: ReactNode
}

export function Info({ section, title, summary, contents, children }: Props) {
  return <div className="wrap editorial">
    <header className="chapter-head">
      <p className="label"><Link href="/sigmood/">Sigmood</Link> / {section}</p>
      <h1>{title}</h1>
      <p className="lead">{summary}</p>
    </header>
    <div className="chapter-body">
      <nav className="contents" aria-label="On this page">
        <p className="label">On this page</p>
        {contents.map(([id, label], i) =>
          <a href={'#'+id} key={id}><span className="edition">0{i+1}</span>{label}</a>
        )}
      </nav>
      <div className="prose">{children}</div>
    </div>
  </div>
}
