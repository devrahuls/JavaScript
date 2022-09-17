export let name = "Rahul"   //This is 'In-line Individually Named export'

let age = 21

function user(drink){
    let food = "Pizza"
    return `${food} and ${drink}`
}

class course{
    constructor(){
        console.log("Hello Everybody")
    }
}

export { age , user , course}    //This is 'All at once at the bottom Named export'


export default function(){
    console.log("This is Default Module babe!!")
}

export let email = "printfrahulsaw@gmail.com"; //Aggregate Module
