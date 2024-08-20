// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {userinput: ''}

  onChangeUser = event => {
    this.setState({userinput: event.target.value})
  }

  render() {
    const {userinput} = this.state

    return (
      <div className="bg">
        <div className="box1">
          <h1 className="head">Calculate the Letters you enter</h1>
          <label htmlFor="in" className="para1">
            Enter the phrase
          </label>
          <br />
          <br />
          <input
            id="in"
            onChange={this.onChangeUser}
            placeholder="Enter the phrase"
            type="text"
            className="input"
          />
          <p className="count">No.of letters: {userinput.length}</p>
        </div>
        <div className="box2">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
