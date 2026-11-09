import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.jsx'

// Build-time only (see scripts/prerender.mjs). Renders one route to HTML so
// each page ships its own title, canonical and text before any JavaScript
// runs, instead of an empty <div id="root">.
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
