"use strict";
class User {
    constructor(email, name) {
        this.city = "Azamgarh";
        this.email = email;
        this.name = name;
    }
}
const ayush = new User('adandakn@fma,com', 'ayush');
// ayush.city = 'delhi'; // not allowed as it is readonly
