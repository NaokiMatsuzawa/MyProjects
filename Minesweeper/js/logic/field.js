import Square from './square.js'

class Field{
    #width = 0;
    #height = 0;
    #squares = [];

    #getSurroundIndexes = (i) =>{
        const surroundIndex = [];
        const x = i % this.#width;
        if(x > 0){
            surroundIndex.push(i-1);//[x-1, y]
            surroundIndex.push(i-1-this.#width);//[x-1, y-1]
            surroundIndex.push(i-1+this.#width);//[x-1, y+1]
        }
        surroundIndex.push(i-this.#width);//[x, y-1]
        surroundIndex.push(i+this.#width);//[x, y+1]
        if(x !== this.#width - 1){
            surroundIndex.push(i+1);//[x+1, y]
            surroundIndex.push(i+1-this.#width);//[x+1, y-1]
            surroundIndex.push(i+1+this.#width);//[x+1, y+1]
        }
        return surroundIndex.filter(i => i > 0 && i < this.#width * this.#height);
    }

    constructor(width, height, bombNum){
        this.#width = width;
        this.#height = height;
        const squaresNum = this.#width * this.#height;
        const bombIndexSet = new Set();
        while(bombIndexSet.size < bombNum){
            bombIndexSet.add(Math.floor(Math.random() * squaresNum));
        }
        const calcNumOrBomb = i => {
            if(bombIndexSet.has(i)){
                return 'b';
            }
            return this.#getSurroundIndexes(i).filter(index => bombIndexSet.has(index)).length;
        }

        for(let i = 0; i < squaresNum; i++){
            this.#squares.push(new Square(calcNumOrBomb(i)));
        }
    }

    #checkRange = (x, y) =>{
        if(x < 0 || x >= this.#width || y < 0 || y >= this.#height){
            throw new Error("arguments is not in range");
        }
    }

    #open = (index) =>{
        if(this.#squares[index].isOpen) return;

        this.#squares[index].open();
        if(this.#squares[index].getState() === " "){
            this.#getSurroundIndexes(index).forEach(index => this.#open(index));
        }
    }

    open(x, y){
        this.#checkRange(x, y);
        this.#open(x + y * this.#width);
    }

    getState(x, y){
        this.#checkRange(x, y);
        return this.#squares[x + y * this.#width].getState();
    }

    isClear(){
        return this.#squares.every(square => square.isOpen !== square.isBombSquare());
    }

    isGameOver(){
        return this.#squares.some(square => square.isOpen && square.isBombSquare());
    }

    get width(){
        return this.#width;
    }

    get height(){
        return this.#height;
    }
}

export default Field;