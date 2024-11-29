class Useer{
    // private _courseCount =1
    protected _courseCount =1 // protected can be accessed by the child class which inherits it
    readonly city: string="Azamgarh";
    constructor(
        public email: string,
        public name: string,
        // private userId:string
    ) {
        
    }
    private deleteToken(){
        console.log('Deleting token');
    }

    get getAppleEmail():string{
        return `apple${this.email}`;
    }

    get courseCount():number{
        return this._courseCount;
    }
    set courseCount(courseNum){ // setters cannot have return type
    if(courseNum<=1){
        throw new Error('Invalid course count');
    }
    this._courseCount = courseNum;
}
}

///getters and setters are designed so that to expose any prvate property to the outside , if needed

const adnan = new Useer('jad#@fma,com','ramesh');

// adnan.deleteToken();// not allowed as it is private, only accessible inside the class

class SubUser extends Useer{
    isFamily:boolean=true;
    chnageCourse(){
        this._courseCount=4;
    }
}