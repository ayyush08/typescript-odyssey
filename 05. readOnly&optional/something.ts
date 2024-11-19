type User = {
    readonly _id: string; // _id is read-only - nobody can change it
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number; // creditCardDetails is optional -- doesn't have to be provided
}

let myUser : User = {
    _id: "123",
    name: "John",
    email: "john@gmail.com",
    isActive: true
}
console.log(myUser);
myUser.email = " sa@gtmai "
console.log(myUser);

// myUser._id = "47834"; // Error: Cannot assign to '_id' because it is a read-only property.