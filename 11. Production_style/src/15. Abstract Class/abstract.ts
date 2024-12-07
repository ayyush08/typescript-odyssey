abstract class TaakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string
    ){}
    abstract getSepia():void //abstract method - no implementation. someone else will implement it
    getReelTime():number{ //non abstract method - implementation is there, but can be overridden
        //complex logic
        return 10;
    }
}
// abstract means no new object can be created from this class, its the responsibility of the child class to implement the abstract class


// const ayush = new TakePhoto("test","test")//error- Cannot create an instance of an abstract class.

class Instagramm extends TaakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log('Sepia filter applied');
    }
}


const ak = new Instagram("test","test",67)
