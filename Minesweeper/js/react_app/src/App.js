import {useState} from 'react'
import './App.css';
import Field from './logic/field'

function Square({x, y}){
  const [count, setCount] = useState(0);

  function handleClick(){
    console.log(`Square x : ${x}, y : ${y}`);
    setCount(count + 1);
  }

  return(
    <div className="Square" onClick={handleClick}>
        {count}
    </div>
  );
}

function Board({width, height}){
  const xArray = new Array(width).fill("_");
  const yArray = new Array(height).fill("_");
  return(
    <div>
      {yArray.map( (_, y) =>
      <div className='SquareRow' key={y}>
        {xArray.map( (_, x) => <Square key={x} x={x} y={y} />)}
      </div>
       )}
    </div>
  )
}

function App() {
  const game = new Field(10, 10, 10);
  return (
    <div className="Board">
      <Board width={13} height={10} />
    </div>
  );
}

export default App;
