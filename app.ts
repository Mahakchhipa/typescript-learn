// var a = 11;
// a= "mahak";


// const m = "mahak";
// m= 15;


enum StatusCode{
    ABANDONED ="abandoned status code 500",
    NOTFOUND ="not found status code 404",
}

StatusCode.NOTFOUND  

interface User {
    name:string;
    email:string;
    password:string;
    gender?: string; 
    // optinal ya to feel kro yeh ya nhi ? se defin ekr skhte h yeh 
}

function abcd(obj:User){

}

abcd({name:"mahak",email:"mehekek@gamil.com",password:"123Wm2ekw" ,gender:"female" })


// type aliases

type value = string| null| number | boolean;

function abcde(obj:value){

}
abcde("mahak")

class Device {
    name ="lg";
    price ="120000";
    catagery ="digital";


}

let a1 = new Device();
let a2 = new Device();


class bottle{
    price ="180";
    radius="120";
    colour="black";
    hieght="3.5";
}

let b1 = new  bottle ();


class bottlemake {
    constructor(public name:string , public price:number){

    }
}

let m1 = new bottlemake("milton" ,1200)