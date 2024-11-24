const user:(string | number)[] = ['ak',9] // but there are cases where we want the values in a certain order, and restrict the type of values in the array. This is where tuples come in.

let user1:[string, number,boolean ]; // this is a tuple - simply write the type of values in the array in the order you want them to be in.

user1 = ['ss',9,true] // this is valid
// user1 = [8.9,'ss',true] // this is invalid - the order of the values is not the same as the order of the types in the tuple


let rgb: [number, number, number] = [255, 0, 0]; // this is a tuple with 3 values of type number

type User = [number,string] // this is a type alias for a tuple with 2 values of type number and string

const newuser:User = [13,'ak'] // this is valid


newuser[1] = 'jhfa' // this is valid for some reason unlike in other programming languages where tuples are immutable
console.log(newuser) // [13,'jhfa'];

// newuser.push(fals----------e) // this is invalid because the tuple is supposed to have only 2 values
console.log(newuser) // [13,'jhfa'];

newuser.push(9) // this is valid because the tuple is supposed to have only 2 values
console.log(newuser) // [13,'jhfa',9];