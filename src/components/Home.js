import React from "react"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => (
  <div className="home-wrapper">
    <video className="home-video" autoPlay loop src="http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_HK_H004_C008_v10_6Mbps.mov">
    </video>
    <div className="overlay">
      <div className="home-text-box">
        <h1 className="home-header serif">Hi, I'm Stanley Sun</h1>
        <p>
          I'm a full-stack developer based in China who is enthusiastic about developing products that address people's needs and firmly believe that technologies should always be people-centric.
        </p>
        <p>
          Currently I work on both frontend and backend web development. I love to take part in rapid development, quickly adapting to customers' changing needs to deliver a digital product.
        </p>
        <p>
          By far, I've worked on a variety of exiting projects where diverse technologies and platforms are involved. You can <Link to="/portfolio">click here</Link> to check out these projects.
        </p>
        <p>
          Github:&nbsp;
          <a href="https://github.com/stanleysq/">
            https://github.com/stanleysq
          </a>
          {/* <br />
          Stack Overflow:&nbsp;
          <a href="https://stackoverflow.com/users/4499464/retroalgic/">
            https://stackoverflow.com/users/4499464/retroalgic
          </a> */}
          <br />
          Email:&nbsp;
          <a href="mailto://stanley.sq@outlook.com/">
            stanley.sq@yahoo.com
          </a>
        </p>
        <p className="home-footnote">Background Video: Apple TV Screensaver - Hong Kong</p>
      </div>
    </div>
  </div>
)

export default withRouter(Home)
