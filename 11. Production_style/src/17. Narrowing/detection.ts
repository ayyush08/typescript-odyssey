function detectType(val: number | string | number[]) { // we should be extra cautious while writing these types of functions as it can lead to runtime errors
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    if (typeof val === 'object') { // here we are checking if the value is an array as js detects array as an object
        return val.length;
    }
    return val + 4;
}

function provideId(id: string | null) {
    if (!id) {
        return 'No ID provided';
    }
    return id.toUpperCase();
}

// Truthiness - type guards, in JavaScript, typeof null is actually "object"! This is one of those unfortunate accidents of history. TypeScript lets us know that strs was only narrowed down to string[] | null instead of just string[].
// function printAll(strs: string | string[] | null) {
//     if (typeof strs === "object") {
//         for (const s of strs) {
//             // 'strs' is possibly 'null'.
//                 console.log(s);
//         }
//     } else if (typeof strs === "string") {
//         console.log(strs);
//     } else {
//         // do nothing
//     }
// }


// Narrowing it here
function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

//   You’ll notice that we’ve gotten rid of the error above by checking if strs is truthy. This at least prevents us from dreaded errors 


//-----------------

// in operator
//JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the in operator. TypeScript takes this into account as a way to narrow down potential types, or interfaces in our case.
interface User{
    name: string,
    email: string,
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User|Admin){
    // account.isAdmin // Property 'isAdmin' does not exist on type 'User | Admin'.
    if('isAdmin' in account){
        console.log(account.isAdmin);
    }
    return false;
}