import "core-js/es6/map"
import "core-js/es6/set"
import "objectFitPolyfill"
import React from "react"
import ReactDOM from "react-dom"
import "font-awesome/css/font-awesome.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
