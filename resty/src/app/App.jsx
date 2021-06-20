import React from 'react';
import './App.scss';
// import the header
import Header from '../header/header';
// import the main
import Main from '../main/main';
// import the footer
import Footer from '../footer/footer';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
