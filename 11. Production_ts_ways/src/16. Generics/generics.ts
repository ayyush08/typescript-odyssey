// Generics, makes our components (functions,arrays,etc) reusablle and flexible

// A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Hence,  Generics 

// Generics provide a way to make components work with any data type and not restrict to one data type.


const score: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // kind of generic array

const names: Array<string> = ['John', 'Doe', 'Jane', 'Doe'];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val:any): any {
    return val;
}

//Type here is a generic type, it is a placeholder for the actual type,
// works just like any but once we pass anything,,that value type is locked in and return type automatically becomes that type
function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree(3); // 3

function identityFour<T>(val: T): T {
    return val;
}

//Advantage - we can define our own type and pass on as a generic type

interface Bottle{
    brand: string,
    capacity: number,
}

identityFour<Bottle>({ // here we are passing our own type - syntax
    brand: 'CocaCola',
    capacity: 500
})


// more ON Generics

// here value we taking is of array type T, and so we need to return the same type
function getSearchProducst<T>(products: T[]): T{
    return products[3]
}

//same functin as an arrow function

const getMoreSearchProducts = <T,>(prducts: T[]): T =>{ // the comma after T is optional, it represents that we are passing a generic type and not a JSX tag like in react
    //may do some database ops here
    return prducts[3]
}  
// -------------------------------------------------------------------------



interface Database{
    connection:string,
    username:string,
    password:string
}





function anotherFunction<T,U extends Database>(val1: T,val2: U): object // here we are saying that U should be anything but also should extend Database
{
    return {
        val1,
        val2
    }
}

anotherFunction(3,{
    connection: 'localhost',
    username: 'root',
    password: 'root'
}) 