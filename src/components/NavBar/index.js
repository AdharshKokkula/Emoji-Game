import './index.css'

const NavBar = props => {
  const {topScore, score} = props
  console.log(topScore, score)
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {score < 11 ? (
        <div className="scores-container">
          <p className="actual-score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      ) : null}
    </nav>
  )
}

export default NavBar
