let greetings : string = 'Hello Curator';
// greetings = 123; //Type 'number' is not assignable to type 'string'.
console.log(greetings);


let myNum = 69;
greetings.toLowerCase();
// myNum.toUpperCase(); //Property 'toUpperCase' does not exist on type 'number'.




//Primitive Types
// number
// let userId : number = 74834; --> too straight forward

let userId = 141415
userId.toFixed(); //works fine and is a good practice


// boolean
let isLoggedIn : boolean = false;




//any

// let hero; // inferred as any when no type is specified
let hero: string; // inferred as string when type is specified

function getHero(){
    return "IronMan";
}

hero = getHero();

export {} //to avoid Scope error
