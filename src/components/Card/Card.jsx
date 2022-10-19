import { ReactComponent as SVGEllipsis } from "../../assets/icon-ellipsis.svg"
import "./Card.css"

const Card = ({ title, current, previous }) => {
  const backgroundName = `bg-${title.toLowerCase().replace(/\s/, "")}`

  return (
    <div className={backgroundName + " card"}>
      <div className={"bg-card " + backgroundName}></div>
      <div className="info">
        <div className="info--top">
          <h2>{title}</h2>
          <div className="svg-holder">
            <SVGEllipsis />
          </div>
        </div>
        <div className="info--bottom">
          <h3>{current}hrs</h3>
          <span>Last Week - {previous}hrs</span>
        </div>
      </div>
    </div>
  )
}

export default Card
