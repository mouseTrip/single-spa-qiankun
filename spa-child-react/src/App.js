import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import store from './store'
import './App.css'

import Home from './pages/Home'
const About = lazy(() => import('./pages/About'))

const baseURL = window.__POWERED_BY_QIANKUN__ ? '/react' : '/'
const RouteView = () => {
  return (
    <Router basename={baseURL}>
      <nav>
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
      </nav>
      <Suspense fallback={null}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </Suspense>
    </Router>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <RouteView />
      </div>
    </Provider>
  )
}

export default App
