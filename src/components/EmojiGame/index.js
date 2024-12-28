import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    gameState: 'playing',
    clickedEmojiList: [],
    topScore: 0,
    score: 0,
  }

  checkClickedEmoji = id => {
    const {clickedEmojiList} = this.state
    const isClicked = clickedEmojiList.some(eachItem => eachItem === id)

    if (isClicked) {
      // same emoji is clicked
      this.setState({gameState: 'result'})
    } else {
      // same emoji is not clicked
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
      this.setState(prevState => ({
        gameState: prevState.score > 11 ? 'result' : 'playing',
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({
      score: 0,
      gameState: 'playing',
      clickedEmojiList: [],
      topScore:
        prevState.score > prevState.topScore
          ? prevState.score
          : prevState.topScore,
    }))
  }

  render() {
    const {emojisList} = this.props
    const {gameState, topScore, score} = this.state
    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)
    console.log('shuffled emojis', shuffledEmojisList())
    return (
      <div className="container">
        <NavBar topScore={topScore} score={score} />
        <div className="content-container">
          {gameState === 'playing' ? (
            <ul className="emoji-cards-container">
              {emojisList.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  emojiDetails={eachItem}
                  checkClickedEmoji={this.checkClickedEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              topScore={topScore}
              score={score}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
