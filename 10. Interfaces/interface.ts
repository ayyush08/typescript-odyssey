interface User{
    readonly dbId: number
    email: string,
    userId:number,
    googleId?:string // ? means optional as already studied earlier,
    startTrial: ()=>string //boring method to declare a function in interface but it is possible,
    startTrial2(): string //another way to declare a function in interface, more cleaner as compared to above
    getCoupon(couponName:string,value:number):number //function with parameters
}

const ayush:User = {
    dbId:987654321,
    email: "ayush@gmail.com",
    userId: 1,
    startTrial: ()=>{
        return "Trial Started"
    },
    startTrial2: ()=>{
        return "Trial Started"
    },
    getCoupon: (name:"curator",off:2)=>{ //totally allowed to use different name for parameter in function, what matters is the type of parameter
        return 10
    }
}

ayush.email = "john@ga.com"

console.log(ayush);

