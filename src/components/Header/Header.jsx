import ImgJeremy from "../../assets/image-jeremy.png"
import "./Header.css"

const Header = ({ timeframe, handleTimeframeChange }) => {
  return (
    <header>
      <section className="header--main">
        <div className="header--main-left">
          <img src={ImgJeremy} alt="Jeremy" />
        </div>
        <div className="header--main-right">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </section>
      <section className="header--nav">
        <ul>
          <li
            className={timeframe === "daily" ? "active" : ""}
            onClick={() => handleTimeframeChange("daily")}
          >
            Daily
          </li>
          <li
            className={timeframe === "weekly" ? "active" : ""}
            onClick={() => handleTimeframeChange("weekly")}
          >
            Weekly
          </li>
          <li
            className={timeframe === "monthly" ? "active" : ""}
            onClick={() => handleTimeframeChange("monthly")}
          >
            Monthly
          </li>
        </ul>
      </section>
    </header>
  )
}

export default Header
