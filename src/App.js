import { useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'


const cardImages = [
  { 'src': './img/helmet-1.png' },
  { 'src': './img/potion-1.png' },
  { 'src': './img/ring-1.png' },
  { 'src': './img/scroll-1.png' },
  { 'src': './img/shield-1.png' },
  { 'src': './img/sword-1.png' }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [firstChoice, setFirstChoice] = useState(null)
  const [secondChoice, setSecondChoice] = useState(null)


  const shuffleCard = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCard}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default App