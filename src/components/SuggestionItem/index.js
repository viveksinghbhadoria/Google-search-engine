import './index.css'

const SuggestionItem = props => {
  const {eachItem, statechange} = props
  const {suggestion} = eachItem

  const changeInput = () => {
    statechange(suggestion)
  }

  return (
    <li className="list">
      <p className="searchContent">{suggestion}</p>
      <img
        className="imageicon"
        onClick={changeInput}
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
