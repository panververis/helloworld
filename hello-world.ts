"use strict";
let helloWorldMessage: string = 'Hello, World!';
try {
    let a = 5+5;
}catch(error) {
    console.error(error);
}finally{
    console.log(helloWorldMessage);
}
var something = 5;



export function addTwoNumbers(firstNumber: number, secondNumber : number) : number{
    return firstNumber + secondNumber;
}