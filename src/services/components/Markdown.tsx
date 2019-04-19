import React from "react"
import ReactMarkdown, { ReactMarkdownProps } from "react-markdown"
import Code from "./Code"

type Props = ReactMarkdownProps

export default (props: Props) => {
  return (
    <ReactMarkdown
      {...props}
      renderers={{
        code: Code,
        ...props.renderers,
      }}
    />
  )
}
