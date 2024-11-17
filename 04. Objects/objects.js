"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'John',
    isActive: true,
    email: 'test@gmail.com'
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = {
    name: 'Ayush',
    isPaid: true,
    email: 'h@h.com'
};
createUser(newUser); // weird behaviour, it should throw error that email is not allowed but it is not throwing any error, earlier it was throwing error because of the type of the object was not defined, so we have to define the type of the object in the function parameter
function createCourse() {
    return { name: 'React', isPaid: true };
}
