import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Route, Switch } from "react-router"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Navbar from "./Navbar"
import Home from "./Home"
import Portfolio from "./Portfolio"
import "./App.css"

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={{ appear: 800, enter: 800, exit: 400}}
                appear
              >
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/portfolio" exact component={Portfolio} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
