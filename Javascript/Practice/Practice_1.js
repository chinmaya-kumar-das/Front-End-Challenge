// let a=9;
// console.log(a);

// this is sample test data

// let var const

// var x=10;
// {
//   var  x=0;
//     console.log(x);
// }

// let n=0;
// {
//      n=4;
//     console.log(n);
// }
//  const z="fuck"
// console.log(z);{
//      z=3;
//     console.log(z);
// }

//datatypes in js

let ab=2;
let age=" ";
let add;
let xyz=[1,3,2,4,3]
let name="Ajay"
const eligible=false;
console.log("Welcome to variable");
let objects=[
    {
        name:"ajay",
        age:22,
    },
    {
        name:"bijay",
        age:23,
    }];
    let symbolA= "symbol 1"
    let symbolB= "symbol 1"

let symbol1= Symbol("symbol 1")
let symbol2= Symbol("symbol 1")

console.log(symbolA==symbolB);
console.log(symbol1==symbol2);
console.table([ab,age,add,name,xyz,eligible,objects])
console.log(objects);
console.log(objects.length);
console.log(objects[0]);

//nested object
let objects2={
    name:"tanya sahu",
    contact:{
        phone:6370073215,
        email:"bdd@gmail.com",
        Addrs:"bbsr",
    }
}
//acces nested object
console.log("==================");
console.log(objects2.name);
console.log(objects2.contact);
console.log(objects2.contact.phone);
console.log(objects2.contact.email);
console.log(objects2.contact.Addrs);
    

let a=3;
let b=4;
//arethmetic operator
console.log(a,b);
console.log(a+b);
console.log(a-b);
console.log(a*b);

//assignment
console.log(a+=9);
console.log(a==a);
console.log(a>=0);
console.log(a==true);
//string
let name1="chinmaya";
let name2="chinmaya"
console.log(name1==name2);
console.log("................");
let n=2020;
let m="2020";
console.log(m==n);
console.log(m===n);
console.log(m==n);
console.log(1>2?"1 is big":"2 is big");

let str1="chinmaya"
let str2="kumar"
console.log(str1+str2);
console.log(str1+" "+str2);

console.log("calculate"+2);
console.log(2**10);