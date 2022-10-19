import { useState } from "react"

import Header from "./components/Header/Header"
import Card from "./components/Card/Card"
import data from "./assets/data.json"

import "./styles/reset.css"
import "./styles/App.css"

console.log(data)

function App() {
  const [timeframe, setTimeframe] = useState("weekly")

  const handleTimeframeChange = (value) => {
    setTimeframe(value)
  }

  return (
    <div className="App">
      <Header
        timeframe={timeframe}
        handleTimeframeChange={handleTimeframeChange}
      />
      {data.map((c) => (
        <Card
          key={c.title}
          title={c.title}
          current={c.timeframes[timeframe].current}
          previous={c.timeframes[timeframe].previous}
        />
      ))}
    </div>
  )
}

export default App
