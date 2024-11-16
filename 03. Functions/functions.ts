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


const getHello = (s:string):string => {
    return `Hello ${s}`;
}

const heroes = ['Superman','Batman','Flash'];

heroes.map(hero=>{ //ts automatically detects the  type is string we dont have to explicitly annotate it
    return `${hero} is cool`;
})
heroes.map((hero):string=>{ // here we are explicitly annotating the type so that ts can check if the return type is string or not, good practice 
    return `${hero} is cool`;
})




function consoleError(error: string): void{
    console.error(error);
    // return 1; // Error: Type '1' is not assignable to type 'void'.
}

function handleError(error: string): never{
    throw new Error(error);
    // return 1; // Error: Type '1' is not assignable to type 'never'.
}
    // void : return nothing() , never: never return anything(helpful in case of error handling)



console.log(getUpperCasedString('hello')); // HELLO
console.log(addTwo(2)); // 4
signUpUser('Ayush','ayush@gmail.com',true); 
loginUser('Ayush','ayush@gmail.com');
console.log(getHello('Ayush')); // Hello Ayush


export {} //to avoid Scope error