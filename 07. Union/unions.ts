// Unions in TypeScript are used to define a type which can be one of many types.

let score:number = 10 //but what if we are not sure if the score is a number or a string?

let sc:number|string = 10 // pipe symbol allows us to define multiple types - which is a union type

sc = "10" // this is valid

type User = {
    name: string,
    id: number
}


type Admin ={
    username: string,
    id: number
}

let ayush : User | Admin = {
    name: "ayush",
    id: 23
}
console.log(ayush); // {name: "ayush", id: 23}  

ayush = {
    username: "ayush",
    id: 25
}

console.log(ayush); // {username: "ayush", id: 25}

// function getDatabaseId(id: number | string) {
//     console.log(`The id is ${id}`);
// } -- but there occur issues when modifying the parameter like below

getDatabaseId(23); // The id is 23
getDatabaseId("14"); // The id is 14


function getDatabaseId(id: number | string) {
    // id.toLowerCase(); // Error: Property 'toLowerCase' does not exist on type 'string | number'. So we need to check the type of the parameter before such operations
    if(typeof id === "string") {
        id.toLowerCase(); // Works
    }
    if(typeof id === "number") {
        id+40; // Works
}
console.log(`The id is ${id}`);

}


//array 

const data: number[] = [1,2,3,4,5,6,7,8,9,10];
const data2: string[]= ["ayush", "sahil", "sachin", "sagar"];
const data3: (string|number)[] = ["ayush", 1, "sachin", 2, "sagar", 3];// can be number and string both
const data4 : string[] | number[] = ["ayush", "sachin", "sagar"]; // can be either string or number

let pi:3.14 = 3.14; // a literal type of assigning a value to a variable, here pi can only be 3.14

let seatAllotment: "window" | "middle" | "aisle";

seatAllotment = "window"; // valid
seatAllotment = "middle"; // valid
seatAllotment = "aisle"; // valid
// seatAllotment = "crew"; // Error: Type '"crew"' is not assignable to type '"window" | "middle" | "aisle"'.