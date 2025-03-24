// var a = 11;
// a= "mahak";
// const m = "mahak";
// m= 15;
var StatusCode;
(function (StatusCode) {
    StatusCode["ABANDONED"] = "abandoned status code 500";
    StatusCode["NOTFOUND"] = "not found status code 404";
})(StatusCode || (StatusCode = {}));
StatusCode.NOTFOUND;
function abcd(obj) {
}
abcd({ name: "mahak", email: "mehekek@gamil.com", password: "123Wm2ekw", gender: "female" });
function abcde(obj) {
}
abcde("mahak");
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = "120000";
        this.catagery = "digital";
    }
    return Device;
}());
var a1 = new Device();
var a2 = new Device();
var bottle = /** @class */ (function () {
    function bottle() {
        this.price = "180";
        this.radius = "120";
        this.colour = "black";
        this.hieght = "3.5";
    }
    return bottle;
}());
var b1 = new bottle();
var bottlemake = /** @class */ (function () {
    function bottlemake(name, price) {
        this.name = name;
        this.price = price;
    }
    return bottlemake;
}());
var m1 = new bottlemake("milton", 1200);
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, color, price, metal) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.metal = metal;
    }
    return BottleMaker;
}());
var botle = new BottleMaker("milton", "red", 1100, "metal");
var mhk = /** @class */ (function () {
    function mhk() {
        this.name = "jaishree";
    }
    mhk.prototype.SomeChange = function () {
        console.log(this.name);
        this.SomeChange;
    };
    mhk.prototype.SomeChangeMode = function () {
        console.log("im learning ts");
    };
    return mhk;
}());
var carMaker1way = /** @class */ (function () {
    function carMaker1way(name) {
        this.name = name;
    }
    return carMaker1way;
}());
var s1 = new carMaker1way("BMWCAR");
var carMaker2way = /** @class */ (function () {
    function carMaker2way(name) {
        this.name = name;
    }
    return carMaker2way;
}());
var s2 = new carMaker2way("BMWCAR 2 way to declore this name of car");
