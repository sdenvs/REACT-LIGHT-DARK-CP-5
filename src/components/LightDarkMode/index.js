// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {mode: 'dark', tStyle: 'tlight', btnText: 'Light Mode'}

  ChangeMode = () => {
    const {mode, tStyle, btnText} = this.state
    if (mode === 'dark') {
      this.setState(prevObj => ({
        mode: 'light',
        tStyle: 'tdark',
        btnText: 'Dark Mode',
      }))
    } else {
      this.setState(prevObj => ({
        mode: 'dark',
        tStyle: 'tlight',
        btnText: 'Light Mode',
      }))
    }
  }

  render() {
    const {mode, tStyle, btnText} = this.state
    return (
      <div className="bgContainer">
        <div className={mode}>
          <h1 className={tStyle}>Click To Change Mode</h1>
          <button onClick={this.ChangeMode} className="btnStyle">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
