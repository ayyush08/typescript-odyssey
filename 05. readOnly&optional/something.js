var myUser = {
    _id: "123",
    name: "John",
    email: "john@gmail.com",
    isActive: true
};
console.log(myUser);
myUser.email = " sa@gtmai ";
console.log(myUser);
myUser._id = "47834"; // Error: Cannot assign to '_id' because it is a read-only property.
