function addTwo(num:number){
    // return 'helo'; // No error because return type is not defined
    return num + 2;
}
function adddTwo(num:number): number{
    // return 'hello'; // Error: Type 'string' is not assignable to type 'number'.
    return num + 2;
}

function getUpperCasedString(val: string ){
    return val.toUpperCase();
}

function signUpUser(name:string,email:string,isPaid:boolean){
    console.log(name,email,isPaid);
}

let loginUser = (name:string,email:string,isPaid:boolean=false)=>{
    console.log(name,email,isPaid);
}

console.log(getUpperCasedString('hello')); // HELLO
console.log(addTwo(2)); // 4
signUpUser('Ayush','ayush@gmail.com',true); 
loginUser('Ayush','ayush@gmail.com');


export {} //to avoid Scope error