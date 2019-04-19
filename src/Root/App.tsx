import React, { Fragment } from "react"
import { hot } from "react-hot-loader"

import { GlobalStyles } from "services/theme"

import { Switch, Route } from "react-router-dom"

import { Page as SandboxPage } from "features/sandbox"
import { Page as BlogPage } from "features/blog"

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />

      <Switch>
        <Route path="/sandbox" component={SandboxPage} />
        <Route path="/blog" component={BlogPage} />

        <Route
          render={() => (
            <div>
              <h1>Development Travis</h1>
            </div>
          )}
        />
      </Switch>
    </Fragment>
  )
}

export default hot(module)(App)
