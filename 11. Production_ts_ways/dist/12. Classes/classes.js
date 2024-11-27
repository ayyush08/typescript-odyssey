"use strict";
class User {
    constructor(email, name) {
        this.city = "Azamgarh";
        this.email = email; // not marked  is considereeed public by default 
        this.name = name;
        this.city = 'delhi';
    }
}
const ayush = new User('adandakn@fma,com', 'ayush');
// ayush.city = 'delhi'; // not allowed as it is readonly
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Azamgarh";
        this.email = email; // not marked  is considereeed public by default 
        this.name = name;
        this.city = 'delhi';
    }
}
