// instance of can be used as a type guard whenever something is constructed withthe "new" keyword like Date, Array, or a custom class.
// typeof can be used as a type guard whenever something is a primitive type like string, number, or boolean.
// instanceof can be used as a type guard  to check if a value is an instance of a class or interface
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());

        // (parameter) x: Date
    } else {
        console.log(x.toUpperCase());
        // (parameter) x: string
    }
}