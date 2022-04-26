import React from 'react'
import ReactDOMServer from 'react-dom/server'
import './index.css'
import App from './App'

export function render(url, context) {
  return ReactDOMServer.renderToString(
      <React.StrictMode>
        <App />
      </React.StrictMode>
  )
}
