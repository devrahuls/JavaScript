import {name} from './library.js';        

import {age , user , course} from "./library.js"

import{name as nm} from "./library.js" //Allices

import * as brooo from "./library.js"  //It means all the variables, functions , classes will import in * class as 'brooo' name from library.js

import babe from "./library.js" //This will import the default module

import {email} from "./bridge.js" // This is an example of Aggregate Module

console.log(name)
console.log(age)
console.log(user("Coke"))
console.log(`${name} is ${age} years old and he loves ${user("Coke")}`)
let a = new course()
console.log(nm)
console.log(brooo.name)
console.log(brooo.age)
babe();
console.log(email)
