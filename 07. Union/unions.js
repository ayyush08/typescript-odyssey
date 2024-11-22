// Unions in TypeScript are used to define a type which can be one of many types.
var score = 10; //but what if we are not sure if the score is a number or a string?
var sc = 10; // pipe symbol allows us to define multiple types - which is a union type
sc = "10"; // this is valid
var ayush = {
    name: "ayush",
    id: 23
};
console.log(ayush); // {name: "ayush", id: 23}  
ayush = {
    username: "ayush",
    id: 25
};
console.log(ayush); // {username: "ayush", id: 25}
// function getDatabaseId(id: number | string) {
//     console.log(`The id is ${id}`);
// } -- but there occur issues when modifying the parameter like below
getDatabaseId(23); // The id is 23
getDatabaseId("14"); // The id is 14
function getDatabaseId(id) {
    // id.toLowerCase(); // Error: Property 'toLowerCase' does not exist on type 'string | number'. So we need to check the type of the parameter before such operations
    if (typeof id === "string") {
        id.toLowerCase(); // Works
    }
    if (typeof id === "number") {
        id=id + 40; // Works
    }
    console.log("The id is ",(id));
}
