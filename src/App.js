import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Display from './pages/display/Display'
import Error from './pages/error/Error'


const App = () => {
  return (
    <Router>
      <Switch>
        
        <Route path='/'>
          <Display />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
