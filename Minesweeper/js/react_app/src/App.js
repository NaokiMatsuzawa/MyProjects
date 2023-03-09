import React from 'react'
import './App.css';


function Square(){
  return(
    <div className="Square">
        X
    </div>
  );
}

function Field(){
  const xArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const yArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return(
    <table>
      {yArray.map(_ => <tr>{xArray.map(_ => <td><Square /></td>)}</tr> )}
    </table>
  )
}

function App() {
  return (
    <div className="App">
      <Field />
    </div>
  );
}

export default App;
