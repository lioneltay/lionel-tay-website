import React from "react"
import { render } from "react-dom"

import Root from "Root"

const container = document.getElementById("app")

if (container) {
  render(<Root />, container)
}
