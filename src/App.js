import React, { Component } from 'react'
import './App.css'
import Remarkable from 'remarkable'
let md = new Remarkable()

class App extends Component {
  constructor(){
    super();
    this.state = {
      text:'Enter the text...',
      markdown:''
    }
  }
  handleChange = (event)=>{
    let text = event.target.value
    this.setState({ text: text})
  }
  createMarkup = ()=>{
    return { __html: md.render(this.state.text)}
  }
  render() {
    return(
      <div className="App">
      <div>
      <h1>Mark it down</h1>
      </div>
        <div className="first-column">
        <textarea placeholder="Enter text" value={this.state.text} onChange={this.handleChange}></textarea>
        </div>
        <div  className="second-column" dangerouslySetInnerHTML={this.createMarkup()}>
        </div>
      </div>
    );
  }
}

export default App;
