import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import About from './views/about'
import Home from './views/home'
import Database from './views/database'
import Search from './views/search'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Contact} exact path="/contact" />
        <Route component={About} exact path="/about" />
        <Route component={Home} exact path="/" />
        <Route component={Database} exact path="/database" />
        <Route component={Search} exact path="/search" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
