/*
add(Class1, Class2,......)
remove(Class1, Class2,......)
toggle(class)
contains(class)
item(index)
Length
*/

console.log("classList 👇")



//Add Classes

ele0 = document.querySelector("#header0").classList
console.log(ele0)

ele1 = document.querySelector("#header0").classList.add("xyz","pqr")
console.log(ele1)

ele2 = document.querySelector("#header0").classList
console.log(ele2)



//Remove Classes

ele3 = document.querySelector("#header0").classList.remove("pqr")
console.log(ele3)

ele4 = document.querySelector("#header0").classList
console.log(ele4)



//Length

ele5 = document.querySelector("#header0").classList.length
console.log(ele5)
//It simply returns the length of the classes which is present in 'header0' id.



// Toggle (It adds or removes classes when a particular event has been occur)

document.querySelector("#footer0").addEventListener("click" , function(){
    this.classList.toggle("pqr" , "lol")
})
//When we click on footer then a 'pqr' class will add to the footer
//NOTE - toggle only adds one class at a time.
ele6 = document.querySelector("#footer0").classList

console.log(ele6)





//Item (It basically returns a class which will be present in a particular index number)

ele7 = document.querySelector("#header0").classList
console.log(ele7)

ele8 = document.querySelector("#header0").classList.item(1)
console.log(ele8)
//It retuns a class name which is present in 'header0' id at index number 1




// Contains(It basically returns true or false if a particular class exists or not, respectively)

ele9 = document.querySelector("#header0").classList.contains("xyz")
console.log(ele9)
//xyz class exists, then it will return true

ele10 = document.querySelector("#header0").classList.contains("lalala")
console.log(ele10)
//lalala class doesn't exists, then it will return false
