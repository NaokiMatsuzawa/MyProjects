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
        this.#numOrBomb = numOrBomb;
    }

    get numOrBomb(){
        return this.#numOrBomb;
    }
}

export default Square;