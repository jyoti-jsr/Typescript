var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
    console.log(input);
});
// typescript infers the type
var character = "mario";
var age = 20;
var isBlack = "true";
// explicit
var firstName = "kuhu";
firstName = "kunu";
var rollNo = 20;
var arrayOfNumber = [1];
var arrayOfString = ["k"];
// union type
var mixed = ["k", 1, true];
var ninjaOne;
ninjaOne = {
    name: "yoshi",
    age: 25
};
// function
// typescript infers the type
var meet = function () {
    console.log("nice to meet you");
};
// explicit
var greet;
greet = function () {
    console.log("hello world");
};
// greet = 'd' // error
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
//add(1, "2"); // error
add(1, 2, 30);
// -- // typescript infers return type
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
// -- // typescript explicit return type
var multi = function (a, b) {
    return a * b;
};
var resultMulti = multi(2, 3);
var msg = function () {
    // returns nothing
    console.log("logs message");
};
// Function Signature -  general structure of function
// example - 1
var gret;
gret = function (name, greeting) {
    console.log("".concat(name, "  says ").concat(greeting));
};
gret("kheswab", "hi");
// example - 2
var calc;
calc = function (a, b, c) {
    if (c === "add")
        return a + b;
    return a - b;
};
calc(1, 2, "add");
// example - 3
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
logDetails({ name: "yoshi", age: 29 });
// DOM AND TypeCasting
var anchor = document.querySelector("a");
console.log(anchor);
// console.log(anchor.href); because ts has no sccess to index.html
if (anchor)
    console.log(anchor.href);
var me = {
    name: "mario",
    age: 70,
    speak: function (lang) {
        console.log("english");
    },
    spend: function (amount) {
        return amount;
    }
};
var greetPerson = function (person) {
    console.log(person.name);
};
greetPerson(me);
var addUid = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUid({ name: "kunu", age: 70 });
//console.log(docOne.name);// error property does not exist
// T capture whatever obj we pass in to the function
var addUid1 = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne1 = addUid1({ name: "kunu", age: 70 });
console.log(docOne1.name);
var docOne2 = addUid1("kunu");
console.log(docOne2);
//  T is only  an object
var addUid2 = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne3 = addUid2({ name: "kunu", age: 70 });
console.log(docOne1.name);
// const docOne3 = addUid2("kunu"); error
// T having a specific structure
var addUid3 = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne4 = addUid3({ name: "kunu", age: 70 });
console.log(docOne4.age);
var resource = {
    uid: 1,
    resourceName: "google",
    data: { name: "yoshi", belt: "black" }
};
var docTHree = {
    uid: 1,
    resourceName: "google",
    data: { name: "yoshi", belt: "black" }
};
var docFour = {
    uid: 1,
    resourceName: "google",
    data: "yoshi"
};
// ENUMS -- allow us to store a set of constants or keyvalues,and associate them with a numaric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var docResourceTwo1 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: "yoshi", belt: "black" }
};
