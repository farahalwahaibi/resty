import React from 'react';
// import the scss style for form
import './main.scss';


// create class for form
class Form extends React.Component {
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
    handleClick = async e => {
        e.preventDefault();
        let raw = await fetch(this.state.url);
        let response = await raw.json();
        //get the headers
        let headers ={};
        raw.headers.forEach((val,idx)=>{
          headers[idx]=val;
        // console.log(headers);
        return headers;
        })
        //raw.headers.get('content-type')
        this.props.formHandler(headers,response);
    }

    //method for render
    render() {
      return (
              <div className="App-form">
                  <form onSubmit={this.handleClick}>
                      <input className="urlInput" onChange={this.handleUrl} />
                      <br />
                      <br />
                      <input type="radio" name="btn" value="get" onChange={this.handleMethod} checked={true}/>
                      <label>GET</label> &nbsp; &nbsp;
                      <input type="radio" name="btn" value="post" onChange={this.handleMethod}/>
                      <label>POST</label> &nbsp; &nbsp;
                      <input type="radio" name="btn" value="put" onChange={this.handleMethod}/>
                      <label>PUT</label> &nbsp; &nbsp;
                      <input type="radio" name="btn" value="delete" onChange={this.handleMethod}/>
                      <label>DELETE</label>  &nbsp; &nbsp;
                      <button type="submit">GO!</button>
                  </form>
              </div>
      );
    }
  }


// export the form to add it in the app
export default Form;