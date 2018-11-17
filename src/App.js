import React, { Component } from 'react'
import './App.css'
import marked from 'marked'
import { sampleText } from './sampleText'

class App extends Component {

  state = {
    userInput: sampleText
  } 

  onChange = event => {
    const userInput = event.target.value
    this.setState({ userInput })
  }

  renderText = userInput => {
    const __html = marked(userInput, { sanitize: true })
    return { __html }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea 
              value={this.state.userInput}
              onChange={this.onChange}
              className="form-control" 
              rows="35">
            </textarea>
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={this.renderText(this.state.userInput) }>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
