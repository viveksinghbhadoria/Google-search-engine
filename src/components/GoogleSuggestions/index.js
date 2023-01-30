import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  statechange = suggestion => {
    this.setState({searchInput: suggestion})
  }

  changeState = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          className="googlelogo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="searchbox">
          <div className="iconinput">
            <img
              className="imageicon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              className="inputel"
              type="search"
              placeholder="Search Google"
              onChange={this.changeState}
              value={searchInput}
            />
          </div>
          <ul className="unlist">
            {searchResults.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                eachItem={eachItem}
                statechange={this.statechange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
