import React from "react"
import ReactMarkdown from "react-markdown"

import { Code, Markdown } from "services/components"
import { stripIndent } from "common-tags"

const input = "# This is a header\n\nAnd this is a paragraph"

export default () => {
  return (
    <div>
      <h1>Blog</h1>
      <ReactMarkdown source={input} />
      <ReactMarkdown
        source={stripIndent`
          # This is a header

          And this is a paragraph
        `}
      />
      <Code>
        {stripIndent`
          const x = 5
          console.log(x)

          function useMePlsMatey() {
            return 'yo what's up dawg'
          }
        `}
      </Code>
      />
      <Markdown
        source={stripIndent`
          # Title

          \`\`\`
          const x = 5
          console.log(x)

          function useMePlsMatey() {
            return 'yo what's up dawg'
          }
          \`\`\`
        `}
      />
    </div>
  )
}
