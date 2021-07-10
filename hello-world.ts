"use strict";
let helloWorldMessage: string = 'Hello, World!';
try {
    let a = 5+5;
    let intArray = [1, 3, 5];

    intArray.forEach(x => console.log(x));
}catch(error) {
    console.error(error);
}finally{
    console.log(helloWorldMessage);
}

export function addTwoNumbers(firstNumber: number, secondNumber : number) : number{
    return firstNumber + secondNumber;
}