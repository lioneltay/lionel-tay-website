import React, { Fragment } from "react"
import { hot } from "react-hot-loader"

import Root from "Root"
import { GlobalStyles } from "services/theme"

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Root />
    </Fragment>
  )
}

export default hot(module)(App)
