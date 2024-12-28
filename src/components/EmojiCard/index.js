import './index.css'

const EmojiCard = props => {
  const {emojiDetails, checkClickedEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const clickedEmoji = () => {
    checkClickedEmoji(id)
  }
  return (
    <li>
      <button type="button" className="emoji-card" onClick={clickedEmoji}>
        <img src={emojiUrl} className="emoji-icom" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
