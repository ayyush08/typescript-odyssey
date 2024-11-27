class User{
    email: string;
    name: string;
    readonly city: string="Azamgarh";
    constructor(email:string,name:string){
        this.email = email;
        this.name = name;
    }
}

const ayush = new User('adandakn@fma,com','ayush');
// ayush.city = 'delhi'; // not allowed as it is readonly