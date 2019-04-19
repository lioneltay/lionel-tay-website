import React from "react"
import { Prism, PrismProps } from "react-syntax-highlighter"
import { prism } from "react-syntax-highlighter/dist/styles/prism"

type Props = Omit<PrismProps, "language"> & {
  language?: PrismProps["language"]
  value?: string
  source?: string
  children?: string
}

export default ({ language, source, value, children }: Props) => {
  return (
    <Prism language={language || "tsx"} style={prism}>
      {value || source || children}
    </Prism>
  )
}

// import * as themes from "react-syntax-highlighter/dist/styles/prism"

// export default ({ language, value }: Props) => {
//   return Object.entries(themes).map(([key, val]) => (
//     <div>
//       <h1>{key}</h1>
//       <Prism language={language || "tsx"} style={val}>
//         {value}
//       </Prism>
//     </div>
//   ))
// }
