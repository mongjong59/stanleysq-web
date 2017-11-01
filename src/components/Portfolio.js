import React from "react"
import { withRouter } from "react-router"
import ContentWrapper from "./ContentWrapper"
import ItemContainer from "./ItemContainer"

const Portfolio = () => (
  <ContentWrapper><ItemContainer /></ContentWrapper>
)

export default withRouter(Portfolio)
