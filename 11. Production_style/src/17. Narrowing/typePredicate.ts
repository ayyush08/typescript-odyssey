//We’ve worked with existing JavaScript constructs to handle narrowing so far, however sometimes you want more direct control over how types change throughout your code.

// To define a user-defined type guard, we simply need to define a function whose return type is a type predicate:


type Fish = {
    swim: () => void;
}

type Bird = {
    fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

// pet is Fish is our type predicate in this example. A predicate takes the form parameterName is Type, where parameterName must be the name of a parameter from the current function signature. If we dont use pet is Fish, TypeScript will not recognize the narrowing and will not narrow the type of pet in the if block. and further calls will still show the type as Fish | Bird.

// Any time isFish is called with some variable, TypeScript will narrow that variable to that specific type if the original type is compatible.


function getFood(pet: Fish | Bird) {
    if(isFish(pet)){
        pet
        return "Fish Food";
    }
    return "Bird Food";
}