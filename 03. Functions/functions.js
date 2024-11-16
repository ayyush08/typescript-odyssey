"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpperCasedString(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    console.log(name, email, isPaid);
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(name, email, isPaid);
};
console.log(getUpperCasedString('hello')); // HELLO
console.log(addTwo(2)); // 4
signUpUser('Ayush', 'ayush@gmail.com', true);
loginUser('Ayush', 'ayush@gmail.com');
