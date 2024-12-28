import './index.css'

const WinOrLoseCard = props => {
  const {topScore, score, onClickPlayAgain} = props
  console.log(topScore, score)

  const playAgain = () => {
    console.log('play again...')
    onClickPlayAgain()
  }

  return (
    <div className="card-container">
      {score > 11 ? (
        <div className="win-card-container">
          <div className="win-card-content">
            <h1 className="you-won-heading">You Won</h1>
            <p className="best-score-p">Best Score</p>
            <p className="best-score">
              {score}/{12}
            </p>
            <button
              type="button"
              className="play-again-button"
              onClick={playAgain}
            >
              Play Again
            </button>
          </div>
          <div className="win-card-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              className="win-image"
              alt="win or lose"
            />
          </div>
        </div>
      ) : (
        <div className="lose-card-container">
          <div className="lose-card-content">
            <h1 className="you-lose-heading">You Lose</h1>
            <p className="best-score-p">Best Score</p>
            <p className="best-score">
              {score}/{12}
            </p>
            <button
              type="button"
              className="play-again-button"
              onClick={playAgain}
            >
              Play Again
            </button>
          </div>
          <div className="lose-card-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              className="lose-image"
              alt="win or lose"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
