const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  console.log(input);
});

// typescript infers the type
const character = "mario";
let age = 20;
let isBlack = "true";

// explicit
let firstName: string = "kuhu";
firstName = "kunu";
let rollNo: number = 20;
let arrayOfNumber: number[] = [1];
let arrayOfString: string[] = ["k"];
// union type
let mixed: (string | number | boolean)[] = ["k", 1, true];
let ninjaOne: { name: string; age: number };
ninjaOne = {
  name: "yoshi",
  age: 25,
};

// function

// typescript infers the type
let meet = () => {
  console.log("nice to meet you");
};
// explicit
let greet: Function;
greet = () => {
  console.log("hello world");
};
// greet = 'd' // error

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};
//add(1, "2"); // error
add(1, 2, 30);

// -- // typescript infers return type
const minus = (a: number, b: number) => {
  return a + b;
};
let result = minus(10, 7);

// -- // typescript explicit return type
const multi = (a: number, b: number): number => {
  return a * b;
};
let resultMulti = multi(2, 3);

const msg = (): void => {
  // returns nothing
  console.log("logs message");
};

// Function Signature -  general structure of function
// example - 1
let gret: (a: string, b: string) => void;
gret = (name, greeting) => {
  console.log(`${name}  says ${greeting}`);
};
gret("kheswab", "hi");

// example - 2
let calc: (a: number, b: number, c: string) => number;
calc = (a, b, c) => {
  if (c === "add") return a + b;
  return a - b;
};
calc(1, 2, "add");
// example - 3
let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};

logDetails({ name: "yoshi", age: 29 });

// DOM AND TypeCasting

const anchor = document.querySelector("a");
console.log(anchor);
// console.log(anchor.href); because ts has no sccess to index.html
if (anchor) console.log(anchor.href);

// interfaces -  describe the shapes of an js object

interface IsPerson {
  name: string;
  age: number;
  speak(language: string): void;
  spend(money: number): number;
}

const me: IsPerson = {
  name: "mario",
  age: 70,
  speak(lang: string): void {
    console.log("english");
  },
  spend(amount: number): number {
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log(person.name);
};
greetPerson(me);

const addUid = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
const docOne = addUid({ name: "kunu", age: 70 });
//console.log(docOne.name);// error property does not exist

// T capture whatever obj we pass in to the function
const addUid1 = <T>(obj: T): T => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
const docOne1 = addUid1({ name: "kunu", age: 70 });
console.log(docOne1.name);
const docOne2 = addUid1("kunu");
console.log(docOne2);

//  T is only  an object
const addUid2 = <T extends object>(obj: T): T => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
const docOne3 = addUid2({ name: "kunu", age: 70 });
console.log(docOne1.name);
// const docOne3 = addUid2("kunu"); error

// T having a specific structure
const addUid3 = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
const docOne4 = addUid3({ name: "kunu", age: 70 });
console.log(docOne4.age);

// generic with interfaces

interface Resource {
  uid: number;
  resourceName: string;
  data: object;
}

const resource: Resource = {
  uid: 1,
  resourceName: "google",
  data: { name: "yoshi", belt: "black" },
};

// suppose in place of data can be any thing an array,string,or an object
interface Resource2<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docTHree: Resource2<object> = {
  uid: 1,
  resourceName: "google",
  data: { name: "yoshi", belt: "black" },
};

const docFour: Resource2<string> = {
  uid: 1,
  resourceName: "google",
  data: "yoshi",
};

// ENUMS -- allow us to store a set of constants or keyvalues,and associate them with a numaric value

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface ResourceTwo<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docResourceTwo1: ResourceTwo<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { name: "yoshi", belt: "black" },
};
