import React from 'react'
import './App.css';


function Square(){
  return(
    <div className="Square">
        X
    </div>
  );
}

function Board({width, height}){
  const xArray = new Array(width).fill("_");
  const yArray = new Array(height).fill("_");
  return(
    <table>
      {yArray.map( (_, y) => <tr>{xArray.map( (_, x) => <td><Square key={y*width+x} /></td>)}</tr> )}
    </table>
  )
}

function App() {
  return (
    <div className="App">
      <Board width={12} height={10} />
    </div>
  );
}

export default App;
