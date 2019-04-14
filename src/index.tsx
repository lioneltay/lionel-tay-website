import React from "react"
import { render } from "react-dom"

import Root from "Root"

const container = document.getElementById("app")

console.log("hello there")

if (container) {
  render(<Root />, container)
  // render(<h1>Hello There</h1>, container)
}
