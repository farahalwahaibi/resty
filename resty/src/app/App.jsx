import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
// import the header
import Header from '../components/header/header';
// import the main
import Form from '../components/form/form';
// import the history
import History from '../components/history/history';
// import the help
import Help from '../components/help/help';
// import the result
import Result from '../components/results/result';
// import the footer
import Footer from '../components/footer/footer';
// for router
import { BrowserRouter as Router, HashRouter, MemoryRouter } from 'react-router-dom';


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
    this.setState({headers,response});
    console.log(this.state,'this.state');
  }
  //render method
  render() {
    return (
      <Router>
      <React.Fragment>
        <div className="body">
          <Header/>
          <Switch>
          <Route exact path="/">
            <br />
            <br />
          <Form formHandler={this.handleForm}/>
          <Result  response={this.state.response} headers={this.state.headers}/>
          <Footer/>
          </Route>
          <Route exact path="/history" component={History} />
          <Route  exact path="/help" component={Help} />
          </Switch>
        </div>
      </React.Fragment>
      </Router>
    );
  }
}




export default App;
