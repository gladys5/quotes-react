import { useState } from "react"
import quotes from "../quotes.json"

const Card = () => {
  const color = [
    "#5BE2AF",
    "#A8F18C",
    "#02CDC9",
    "#F9F871",
    "#2BB4D0",
    "#5E9AC2",
  ]

  const [Quote, setQuote] = useState(quotes[getQuote(quotes.length)])
  const [background, setBackground] = useState(color[getQuote(color.length)])

  const handleQuote = () => {
    const index = getQuote(quotes.length)
    setQuote(quotes[index])
    setBackground(color[getQuote(color.length)])
  }

  document.body.style = `background : ${background}`
  return (
    <div className="container">
      <p>Dont forget you that:</p>
      <blockquote>{Quote.quote}</blockquote>
      <br />
      <q>Author:{Quote.author}</q>

      <button className="button" onClick={handleQuote}>
        Next Quote
      </button>
    </div>
  )
}

const getQuote = (max) => Math.floor(Math.random() * max)
export default Card
