// Runs after `vite build` and the SSR build (see package.json "build").
// For every route it renders the React app to HTML, moves the page's
// <title>, <meta> and <link> tags into <head>, and writes a static file Vercel
// serves directly:
//   /               -> dist/index.html
//   /residential    -> dist/residential.html  (served at /residential via cleanUrls)
//   unknown routes  -> dist/404.html          (served with a real 404 status)
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

// Keep in sync with <Routes> in src/App.jsx and public/sitemap.xml.
const ROUTES = [
  { url: '/', file: 'index.html' },
  { url: '/residential', file: 'residential.html' },
  { url: '/commercial', file: 'commercial.html' },
  { url: '/carpet-cleaning-canberra', file: 'carpet-cleaning-canberra.html' },
  { url: '/__not-found__', file: '404.html' },
]

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('index.html is missing the <!--app-head--> / <!--app-html--> markers')
}

const { render } = await import(pathToFileURL(ssrEntry).href)

// React 19 emits a component's <title>/<meta>/<link> inline when rendering a
// subtree. Pull them out of the body markup so they land in <head>, where
// search engines read them.
const HEAD_TAG = /<title>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>/g

for (const { url, file } of ROUTES) {
  const rendered = render(url)
  const headTags = []
  const body = rendered.replace(HEAD_TAG, (tag) => {
    headTags.push(tag)
    return ''
  })

  const titles = headTags.filter((t) => t.startsWith('<title')).length
  const canonicals = headTags.filter((t) => /rel="canonical"/.test(t)).length
  if (titles !== 1) throw new Error(`${url}: expected 1 <title>, got ${titles}`)
  if (url !== '/__not-found__' && canonicals !== 1) {
    throw new Error(`${url}: expected 1 canonical, got ${canonicals}`)
  }

  const html = template
    .replace('<!--app-head-->', headTags.join('\n    '))
    .replace('<!--app-html-->', body)
  fs.writeFileSync(path.join(dist, file), html)
  console.log(`prerendered ${url} -> dist/${file}`)
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
