import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Route, Switch } from "react-router"
import Navbar from "./Navbar"
import Home from "./Home"
import "./App.css"

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Route render={({ location }) => (
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                </Switch>
          )}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
