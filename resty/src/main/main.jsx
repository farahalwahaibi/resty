import React from 'react';
// import the scss style for form
import './main.scss';


// create class for main
class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        method: '',
        url: 'hjdsfhof'
      }
    }

    //method for handling the url from input value
    handleUrl = e => {
      let url = e.target.value;
      this.setState({ url });
    }
  
    //method for handling the click button
    handleClick = e => {
        e.preventDefault();
        let url = this.state.url;
        this.setState({url});
    }

    //method for render
    render() {
      return (
          <div>
              <div>
                  <form>
                      <label>URL:</label>
                      <input onChange={this.handleUrl}/>
                      <button type="submit" onClick={this.handleClick}>GO</button>
                      <br />
                      <br />
                      <input type="radio" name="btn" value="get"/>
                      <label>GET</label>
                      <input type="radio" name="btn" value="post"/>
                      <label>POST</label>
                      <input type="radio" name="btn" value="put"/>
                      <label>PUT</label>
                      <input type="radio" name="btn" value="delete"/>
                      <label>DELETE</label>  
                  </form>
              </div>
              <div>
              <h3>{this.state.method} {this.state.url}</h3>
              </div>
          </div>
      );
    }
  }


// export the main to add it in the app
export default Main;