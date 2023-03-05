import Field from './logic/field.js'
import * as readline from 'readline'

process.stdin.resume();
process.stdin.setEncoding("utf8");

let lines = [];
let reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const field = new Field(10, 10, 10);

const print = () =>{
    for(let y = 0; y < field.height; y++){
        let str = "";
        for(let x = 0; x < field.width; x++){
            str += field.getState(x, y);
        }
        console.log(str);
    }
    field.isClear() && console.log("GameClear");
    field.isGameOver() && console.log("GameOver");
}

reader.on("line", (line) =>{
    const [x, y] = line.split(" ").map(str => parseInt(str));
    field.open(x, y);
    print();   
});
reader.on("close", () =>{
    
});

