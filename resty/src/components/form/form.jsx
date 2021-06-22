import React from 'react';
// import the scss style for form
import './form.scss';
//require superagent
const superagent = require('superagent');

// create class for form
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        method: '',
        url: '',
        body: {}
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

    //method for body
    handleBody=e =>{
      let body = e.target.value;
      this.setState({body});
    }
    //method for handling the click button
    handleClick = async e => {
        e.preventDefault();

        try{
          let response = await superagent[this.state.method](this.state.url).send(this.state.body).set('Content-Type', 'application/json');
          let headers = response.headers;
          this.props.formHandler(headers,response.body );
          //saved data in local storage 
          //1st check if there is data in local storage
          const storedData = JSON.parse(localStorage.getItem('savedItem'));
          console.log(storedData);
          //if not 
          if (!storedData){
          //save the data
          localStorage.setItem('savedItem',JSON.stringify([this.state]));
        }
          else if (storedData){
          storedData.forEach((val)=>{
            if(val.url!==this.state.url && val.method!==this.state.method && val.body!==this.state.body){
              console.log(this.state.url);
              console.log(val.url);
              storedData.push(this.state);
              localStorage.setItem('savedItem',JSON.stringify(storedData));
            }
            else return ;
          })
          
        }
        }
        catch(e){
          console.log(e);
        } 
    }

     
    //method for render
    render() {
      return (
              <div className="App-form">
                  <form onSubmit={this.handleClick}>
                      <input className="urlInput" onChange={this.handleUrl} />
                      <br />
                      <br />
                      <input type="radio" name="btn" value="get" onChange={this.handleMethod} />
                      <label>GET</label> &nbsp; &nbsp;
                      <input type="radio" name="btn" value="post" onChange={this.handleMethod}/>
                      <label>POST</label> &nbsp; &nbsp;
                      <input type="radio" name="btn" value="put" onChange={this.handleMethod}/>
                      <label>PUT</label> &nbsp; &nbsp;
                      <input type="radio" name="btn" value="delete" onChange={this.handleMethod}/>
                      <label>DELETE</label>  &nbsp; &nbsp;
                      <textarea name="" id="" cols="50" rows="4" onChange={this.handleBody}></textarea>
                      &nbsp; &nbsp; &nbsp;
                      <button type="submit">GO!</button>
                  </form>
              </div>
      );
    }
  }


// export the form to add it in the app
export default Form;