import React from "react"
import { HashRouter } from "react-router-dom"
import { Route, Switch } from "react-router"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Navbar from "./Navbar"
import Home from "./Home"
import Portfolio from "./Portfolio"
import Article from "./Article"
import "./App.css"

class App extends React.PureComponent {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Navbar />
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={{ appear: 800, enter: 800, exit: 400}}
                appear
              >
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/portfolio" exact component={Portfolio} />
                  <Route path="/portfolio/:id" component={Article} />
              />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}/>
        </div>
      </HashRouter>
    )
  }
}

export default App
