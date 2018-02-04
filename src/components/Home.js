import React from "react"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import "./Home.css"

class Home extends React.PureComponent {
  componentDidMount() { global.objectFitPolyfill() }

  render() {
    return(
      <div className="home-wrapper">
        <video className="home-video" data-object-fit autoPlay loop src="http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_HK_H004_C008_v10_6Mbps.mov">
        </video>
        <div className="home-image" />
        <div className="overlay">
          <div className="home-text-box">
            <div>
              <img className="home-avatar" alt="avatar" src="/images/avatar.png" />
            </div>
            <h1 className="home-header serif">Hi, I'm Stanley Sun</h1>
            <p>
              I'm a full-stack developer based in China. I'm enthusiastic about developing products that address people's needs and bring joy and meaning to their lives. By far, I've worked on a variety of exiting projects where various technologies and platforms are involved. You can <Link to="/portfolio">click here</Link> to check out these projects.
            </p>
            <p>
              Besides, I'm also a cinephile who enjoys films from all over the world. Chinese martial arts film, Japanese homin-geki, French New Wave, Kubrick, Lynch... To me, cinema is not only a place to seek entertainment but also a place where I explore the diversity, complexity and beauty of both the physical and spiritual world. If you're interested, <a href="http://45.248.87.15/en-us/lists/2/divisions/1/" target="_blank" rel="noopener noreferrer">here</a> are some of my favourites .
            </p>
            <p>
              Email:&nbsp;
              <a href="mailto://stanley.sq@outlook.com/">
                stanley.sq@yahoo.com
              </a>
              <br />
              Github:&nbsp;
              <a
                href="https://github.com/stanleysq/"
                target="_blank" rel="noopener noreferrer"
              >
                https://github.com/stanleysq
              </a>
            </p>
            <p className="home-footnote">Background Video: Apple TV Screensaver - Hong Kong</p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
