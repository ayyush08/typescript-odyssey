interface TakePhoto{
    cameraMode: string;
    filter: string;
    burst: number;
}

interface Story{
    createStory(): void;

}



//Use Case - implementing protocols for a app feature
 //interface never involves definition, it always inclines the must have things in the class.
//implements - only used for interface
class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

// more than necessary is allowed but less than necessary is not allowed

class Youtube implements TakePhoto,Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}
    createStory(): void {
        console.log('Story created');
        
    }
}