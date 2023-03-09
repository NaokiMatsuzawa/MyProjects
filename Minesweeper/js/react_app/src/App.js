import React from 'react'
import './App.css';


function Square({x, y}){

  function handleClick(){
    console.log(`Square x : ${x}, y : ${y}`);
  }

  return(
    <div className="Square" onClick={handleClick}>
        X
    </div>
  );
}

function Board({width, height}){
  const xArray = new Array(width).fill("_");
  const yArray = new Array(height).fill("_");
  return(
    <table>
      {yArray.map( (_, y) => <tr>{xArray.map( (_, x) => <td><Square key={y*width+x} x={x} y={y} /></td>)}</tr> )}
    </table>
  )
}

function App() {
  return (
    <div className="App">
      <Board width={13} height={10} />
    </div>
  );
}

export default App;
