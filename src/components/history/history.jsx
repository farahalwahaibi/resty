import React from 'react';
import '../history/history.scss';


//export history
export default function History(props) {
  let history = localStorage.getItem('savedItem') ? JSON.parse(localStorage.getItem('savedItem')) : [];
  return (
    <React.Fragment>
    <div className='historyData' >
      {history.map((query) => {
        return (
            
          <li key={query.method + query.url}>
            <span>{query.method}</span>&nbsp; &nbsp; &nbsp;
            <span>{query.url}</span>
          </li>
        
        );
      })}
    </div>
    </React.Fragment>
  );
}
