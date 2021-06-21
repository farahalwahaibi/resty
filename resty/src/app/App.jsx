import React from 'react';
import './App.scss';
// import the header
import Header from '../header/header';
// import the main
import Form from '../main/form';
// import the result
import Result from '../main/result';
// import the footer
import Footer from '../footer/footer';

// create class for app
class App extends React.Component{
  //constructor
  constructor(props){
    super(props);
    this.state = {
      headers:{},
      response: {}
    }
  }
  //start firing the event
  handleForm = (headers,response)=>{
    // console.log(response,'response......');
    //calling the setState to update the state
    this.setState({headers,response: response});
    // console.log(this.state,'this.state');
  }
  //render method
  render() {
    return (
      <React.Fragment>
        <div className="body">
          <Header/>
          <Form formHandler={this.handleForm}/>
          <Result headers={this.state.headers} response={this.state.response}/>
          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}




export default App;
