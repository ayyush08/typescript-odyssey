// have the same kind property, in all your interfaces, and that property can be used to differentiate between the different interfaces. This is called a discriminated union. 
// not compulsory to call it kind, but it is a common convention. we can name it whatever we want.
interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    sideLength: number;
}

interface Rectangle{
    kind: 'rectangle';
    width: number;
    height: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape:Shape){
    if(shape.kind === 'circle'){
        shape
        return Math.PI * shape.radius ** 2;
    }
    if(shape.kind === 'square'){
        shape
        return shape.sideLength ** 2;
    }
    if(shape.kind === 'rectangle'){
        shape
        return shape.width * shape.height;
    }
}