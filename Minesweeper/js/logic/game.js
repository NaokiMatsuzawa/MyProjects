import Field from './field.js'

const field = new Field(10, 10, 10);

const print = () =>{
    for(let y = 0; y < field.height; y++){
        let str = "";
        for(let x = 0; x < field.width; x++){
            str += field.getState(x, y);
        }
        console.log(str);
    }
}

field.open(5,2);
print();
field.open(3,2);
print();
field.open(9,9);
print();
field.open(5);