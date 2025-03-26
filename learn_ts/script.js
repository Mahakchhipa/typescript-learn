var a;
a = 101;
var arr = [1, 2, 3, 4, 5];
var arr2 = arr;
arr2.pop();
console.log(arr2);
var Humun;
(function (Humun) {
    Humun["name"] = "Mahak";
    Humun[Humun["age"] = 20] = "age";
    Humun[Humun["class"] = 12] = "class";
    Humun["stream"] = "BCA";
})(Humun || (Humun = {}));
console.log(Humun.name);
