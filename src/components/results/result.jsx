import React from 'react';
// import the scss style for form
import './result.scss';
//for rendering data 
import ReactJson from 'react-json-view';


// create class for main
class Result extends React.Component {
    //method for render
    render() {
      return (
              <div className="App-result">
                <h6>Header :</h6>
                <ReactJson  src={this.props.headers}  />
                <br />                  
                <h6>Response :</h6>
                <ReactJson src={this.props.response}  />
              </div>     
      );
    }
  }


// export the result to add it in the app
export default Result;