import React from 'react';
// import the scss style for form
import './main.scss';


// create class for main
class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        method: '',
        url: ''
      }
    }

    //method for handling the url from input value
    handleUrl = e => {
      let url = e.target.value;
      this.setState({ url });
    }

    //method for handling the method value
    handleMethod = e =>{
      let method = e.target.value;
      this.setState({method});
    }

    //method for handling the click button
    handleClick = e => {
        e.preventDefault();
        let method = this.state.method;
        this.setState({method});
    }

    //method for render
    render() {
      return (
          <div>
              <div className="App-form">
                  <form>
                      <label>URL:</label>
                      <input onChange={this.handleUrl}/>
                      <button type="submit" onClick={this.handleClick}>GO</button>
                      <br />
                      <br />
                      <input type="radio" name="btn" value="get" onChange={this.handleMethod}/>
                      <label>GET</label>
                      <input type="radio" name="btn" value="post" onChange={this.handleMethod}/>
                      <label>POST</label>
                      <input type="radio" name="btn" value="put" onChange={this.handleMethod}/>
                      <label>PUT</label>
                      <input type="radio" name="btn" value="delete" onChange={this.handleMethod}/>
                      <label>DELETE</label>  
                  </form>
              </div>
              <div className="App-result">
              <p>{this.state.method} &nbsp; {this.state.url}</p>
              </div>
          </div>
      );
    }
  }


// export the main to add it in the app
export default Main;