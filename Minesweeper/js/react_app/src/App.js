import {useState} from 'react'
import './App.css';
import Field from './logic/field'

function Square({x, y, value, handleClick}){
  const [count, setCount] = useState(0);

  function callback(){
    console.log(`Square x : ${x}, y : ${y}, value : ${value}`);
    //setCount(count + 1);
    handleClick(x, y)
  }

  return(
    <div className="Square" onClick={callback}>
        {value}
    </div>
  );
}

function Board({width, height, states, squareClick}){
  const xArray = new Array(width).fill("_");
  const yArray = new Array(height).fill("_");
  return(
    <div>
      {yArray.map( (_, y) =>
      <div className='SquareRow' key={y}>
        {xArray.map( (_, x) => <Square key={x} x={x} y={y} value={states[y * width + x]} handleClick={squareClick} />)}
      </div>
       )}
    </div>
  )
}

const width = 10;
const height = 10;
const game = new Field(width, height, 10);

function App() {
  let [states, setStates] = useState(game.getStates());

  function handleSquareClick(x, y){
    game.open(x, y);
    states = setStates(game.getStates());
  }

  return (
    <div className="Board">
      <Board width={width} height={height} states={states} squareClick={handleSquareClick} />
    </div>
  );
}

export default App;
