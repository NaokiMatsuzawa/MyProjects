const checkValidArgument = arg => {
    return arg === 'b' || (arg >= 0 && arg <= 8);
}

class Square{
    #numOrBomb = -1;
    #isOpen = false;

    constructor(numOrBomb){
        if(!checkValidArgument(numOrBomb)){
            throw new Error("Invalid argument!");
        }
        this.#isOpen = false;
        this.#numOrBomb = numOrBomb;
    }

    get isOpen(){
        return this.#isOpen;
    }

    isBombSquare(){
        return this.#numOrBomb === 'b';
    }

    open(){
        this.#isOpen = true;
    }

    getState(){
        return (!this.#isOpen && "*") || (this.#numOrBomb === 0 && " ") || this.#numOrBomb;
    }
}

export default Square;