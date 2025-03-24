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
