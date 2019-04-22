import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import { Code } from "lib/components"

import Post from "./posts/1-demo"

export default () => {
  return (
    <div>
      <Code
        source={`
      const x: string = 5
      `}
      />

      <Switch>
        <Route
          render={() => (
            <div
              css={`
                max-width: 800px;
                margin: auto;
              `}
            >
              <Route path="/musings/test" component={Post} />
            </div>
          )}
        />

        <Route
          render={() => (
            <div>
              <Link to="/musings/test">First Post</Link>
            </div>
          )}
        />
      </Switch>
    </div>
  )
}
