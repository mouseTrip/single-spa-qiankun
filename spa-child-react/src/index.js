import React from 'react'
import ReactDOM from 'react-dom'
import './public-path'
import './index.css'
import App from './App'
import spaStore from './utils/spa-store'
// import * as serviceWorker from './serviceWorker'

function render(props = {}) {
  const { container } = props
  ReactDOM.render(
    <App />,
    container ? container.querySelector('#app') : document.querySelector('#app')
  )
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props) {
  console.log('[react16] props from main framework', props)
  spaStore(props)
  render(props)
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
