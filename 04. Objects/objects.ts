const User = {
    name: 'John',
    isActive: true,
    email: 'test@gmail.com'
}


function createUser({name: string, isPaid:boolean}){

}


let newUser = {
    name: 'Ayush',
    isPaid: true,
    email: 'h@h.com'
}

createUser(newUser) // weird behaviour, it should throw error that email is not allowed but it is not throwing any error, earlier it was throwing error because of the type of the object was not defined, so we have to define the type of the object in the function parameter






function createCourse():{name: string, isPaid:boolean}{ //return type is object
    return { name: 'React', isPaid: true}
}



export {} //to avoid Scope error