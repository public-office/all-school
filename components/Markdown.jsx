import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
// import YouTubeEmbed from 'react-lite-youtube-embed'

export default function Markdown({ remarkPlugins = [], children, ...props }) {
  const plugins = [...remarkPlugins, remarkGfm, remarkBreaks]

  return (
    <ReactMarkdown {...props} remarkPlugins={plugins}>
      {children}
    </ReactMarkdown>
  )
}
