import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import Character from '../Character'

import './index.css'

class CharacterCounter extends Component {
  state = {characterList: [], userInput: ''}

  onTypeInput = event => {
    const {userInput} = this.state
    this.setState({userInput: event.target.value})
  }

  addCharacters = event => {
    event.preventDefault()
    const {userInput, characterList} = this.state
    const newObj = {
      id: uuidv4(),
      characterName: userInput,
      length: userInput.length,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, newObj],
      userInput: '',
    }))
  }

  render() {
    const {characterList, userInput} = this.state
    return (
      <div className="bg-container">
        <div className="first-container">
          <div className="heading-container">
            <h1 className="main-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          <div className="image-container">
            {characterList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="imageEl"
              />
            ) : (
              <ul>
                {characterList.map(eachItem => (
                  <Character Item={eachItem} key={eachItem.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="second-container">
          <h1 className="heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.addCharacters}>
            <input
              type="text"
              className="inputEl"
              placeholder="Enter the Characters here"
              value={userInput}
              onChange={this.onTypeInput}
            />
            <button type="submit" className="buttonEl">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
