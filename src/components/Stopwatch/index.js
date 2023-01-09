import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {start: false, seconds: 0, isTimerRunning: false}

  incrementSeconds = () => {
    const {seconds} = this.state
    this.setState({seconds: seconds + 1})
  }

  StartBtnClicked = () => {
    const {start, isTimerRunning} = this.state
    if (!start) {
      this.intervalId = setInterval(this.incrementSeconds, 1000)
      this.setState({isTimerRunning: true})
    } else {
      clearInterval(this.intervalId)
      this.setState({isTimerRunning: false})
    }
    console.log(this.intervalId)
  }

  StopBtnClicked = () => {
    clearInterval(this.intervalId)
    this.setState({start: false})
  }

  getMinutesAndSeconds = seconds => {
    const minutes = Math.floor(seconds / 60)
    const secondsTo = Math.floor(seconds % 60)
    const modMinutes = minutes < 10 ? `0${minutes}` : minutes
    const secondsToBeDispalyed = secondsTo < 10 ? `0${seconds}` : secondsTo
    return `${modMinutes}:${secondsToBeDispalyed}`
  }

  ResetBtnClicked = () => {
    clearInterval(this.intervalId)
    this.setState({seconds: 0, start: false, isTimerRunning: false})
  }

  render() {
    const {seconds, start, isTimerRunning} = this.state
    console.log(isTimerRunning)
    return (
      <div className="mainDiv">
        <div className="GameCon">
          <h1>StopWatch</h1>
          <div className="boxShaCon">
            <div className="imgCon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>{this.getMinutesAndSeconds(seconds)}</h1>
            <div className="btnCon">
              <button
                className="btn1"
                type="button"
                disabled={isTimerRunning}
                onClick={this.StartBtnClicked}
              >
                Start
              </button>
              <button
                className="btn2"
                type="button"
                onClick={this.StopBtnClicked}
              >
                Stop
              </button>
              <button
                className="btn3"
                type="button"
                onClick={this.ResetBtnClicked}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
