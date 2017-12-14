import React from "react"
import data from "../data"
import Item from "./Item"

const ItemContainer = ({ currentProjectId }) => (
  <div className="item-container">
    {
      data.map(project =>
        currentProjectId !== project.id
          ? <Item key={project.id} {...{ ...project }} />
          : null
      )
    }
  </div>
)

export default ItemContainer
