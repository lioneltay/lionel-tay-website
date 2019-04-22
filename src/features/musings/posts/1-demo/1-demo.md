# Setting up Markdown and Syntax Highlighting

## The goal

**/blog.md**

````md
# Title of muh new blog

Hello there, this is ma blog.

```tsx
type SomeType = { value: string }
const someVariable: SomeType = "Typescript code block"
```
````

**/blog.tsx**

```tsx
import React from "react"
import { render } from "react-dom"
import Blog from "./blog.md"

render(<Root />, document.getElementById("app"))
```

**Result**

# Title of the blog

Hello there, this is markdown!

```tsx
type SomeType = { value: string }
const someVariable: SomeType = "Typescript code block"
```
