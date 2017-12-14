import React from "react"
import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({
  id, title, description, thumbnailExtension, wrapperHeight
}) => (
  <Link to={`/portfolio/${id}`} className="item-wrapper">
    <div
      className="item-image-wrapper"
      style={{ height: wrapperHeight }}
    >
      <img
        className="item-image"
        src={`/images/${id}.${thumbnailExtension}`}
        alt={title}
      />
    </div>
    <div className="item-text-wrapper">
      <div className="item-title serif">{title}</div>
      <div className="item-description">{description}</div>
    </div>
  </Link>
)

export default Item
