import React from "react"
import data from "../data"
import Item from "./Item"
import "./ItemContainer.css"

const ItemContainer = () => (
  <div className="item-container">
    {data.map(project => <Item key={project.id} {...{ ...project }} />)}
  </div>
)

export default ItemContainer
