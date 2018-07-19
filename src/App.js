import React, { Component } from 'react'
import './App.css'
import Remarkable from 'remarkable'
let md = new Remarkable()

class App extends Component {
  constructor(){
    super();
    this.state = {
      text:'Enter the markdown...',
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
        <textarea placeholder="Enter text" defaultValue={this.state.text} onChange={this.handleChange}></textarea>
        <div  dangerouslySetInnerHTML={this.createMarkup()}>
        </div>
      </div>

    );
  }
}

export default App;
