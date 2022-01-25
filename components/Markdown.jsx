import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
// import remarkDirective from 'remark-directive'
import YouTubeEmbed from 'react-lite-youtube-embed'
// import remarkDirective from 'react-markdown-remark-directive'
import { createElement } from 'react'
import directive from 'remark-directive'
import { visit } from 'unist-util-visit'

export default function Markdown({ remarkPlugins = [], ...props }) {
  const plugins = [...remarkPlugins, remarkGfm, remarkBreaks]

  return (
    <ReactMarkdown {...props} remarkPlugins={plugins}>
      {children}
    </ReactMarkdown>
  )
}
