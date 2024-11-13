"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = 'Hello Curator';
// greetings = 123; //Type 'number' is not assignable to type 'string'.
console.log(greetings);
var myNum = 69;
greetings.toLowerCase();
// myNum.toUpperCase(); //Property 'toUpperCase' does not exist on type 'number'.
//Primitive Types
// number
// let userId : number = 74834; --> too straight forward
var userId = 141415;
userId.toFixed(); //works fine and is a good practice
// boolean
var isLoggedIn = false;
