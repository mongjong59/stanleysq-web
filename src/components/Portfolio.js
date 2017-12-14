import React from "react"
import { withRouter } from "react-router"
import ContentWrapper from "./ContentWrapper"
import ItemContainer from "./ItemContainer"
import "./Portfolio.css"

const Portfolio = () => (
  <ContentWrapper>
    <div className="item-container-wrapper">
      <ItemContainer />
    </div>
  </ContentWrapper>
)

export default withRouter(Portfolio)
