class User{
    public email: string;
    name: string;
    private readonly city: string="Azamgarh";
    constructor(email:string,name:string){
        this.email = email; // not marked  is considereeed public by default 
        this.name = name;
        this.city = 'delhi'; 
    }
}

const ayush = new User('adandakn@fma,com','ayush');
// ayush.city = 'delhi'; // not allowed as it is readonly

class User2{
    private readonly city: string="Azamgarh";
    constructor(public email:string,public name:string){
        this.email = email; // not marked  is considereeed public by default 
        this.name = name;
        this.city = 'delhi'; 
    }
}