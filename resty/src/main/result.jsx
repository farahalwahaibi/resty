import React from 'react';
// import the scss style for form
import './main.scss';
import JSONPretty from 'react-json-pretty';


// create class for main
class Result extends React.Component {
    //method for render
    render() {
      return (
              <div className="App-result">
                <JSONPretty id="json-pretty" data="Headers : "></JSONPretty>
                <JSONPretty id="json-pretty" data={this.props.headers}></JSONPretty>
                <br />                  
                <JSONPretty id="json-pretty" data="Response :"></JSONPretty>
                <JSONPretty id="json-pretty" data={this.props.response}></JSONPretty>
              </div>     
      );
    }
  }


// export the result to add it in the app
export default Result;