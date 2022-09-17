//Parent Element
console.log("Parent Element 👇")

ele00 = document.querySelector("#Child-C").parentElement
console.log(ele00)
ele0 = document.querySelector("#inner").parentElement //Returns parent element of the inner id
console.log(ele0)
ele1 = document.querySelector("#outer").parentElement
console.log(ele1)
ele2 = document.body.parentElement
console.log(ele2)
//ele3 = document.querySelector("#inner").parentElement.style.background = "tomato"
//It changes the background color of the inner id's parent element



//Parent Node (It basically returns the parent element of any attribute, either they've or not)
console.log("Parent Node 👇")


ele4 = document.querySelector("#baap").parentElement
console.log(ele4) 
// It will return no parent-element as 'null' . So, in this case we will use Parent Node

ele5 = document.querySelector("#baap").parentNode
console.log(ele5) 



// children
console.log("children 👇")

ele6 = document.body.children
console.log(ele6)
ele7 = document.querySelector("#outer").children
console.log(ele7)
ele8 = document.querySelector("#inner").children //Returns children element of the inner id
console.log(ele8)
ele9 = document.querySelector("#Child-C").children
console.log(ele9)
ele10 = document.querySelector("#inner").children[1].style.background = "red"
// Changes the background color of 'A' which occurs at the index number 1 in 'inner' id 




// childrNodes (isme sab kuchh uth ke aa jata hai jaise koi v element, even agar space, enter, comments kuchh v rahe wo usko get kar lega)
console.log("childNodes 👇")

ele11 = document.querySelector("#inner").childNodes
console.log(ele11)
ele12 = document.querySelector("#inner").childNodes[5].innerHTML
console.log(ele12)
ele12 = document.querySelector("#inner").childNodes[9].style.background = "cyan"
 



// firstElementChild (It returns the first child of an attribute)
console.log("firstElementChild 👇")

ele13 = document.querySelector("#inner").firstElementChild
console.log(ele13)

ele14 = document.querySelector("#inner").firstElementChild.innerHTML
console.log(ele14)



// lastElementChild (It returns the last child of an attribute)
console.log("lastElementChild 👇")

ele15 = document.querySelector("#inner").lastElementChild
console.log(ele15)

ele15 = document.querySelector("#inner").lastElementChild.innerHTML
console.log(ele15)



// firstChild (isme sab kuchh uth ke aa jata hai jo v pehla child ho jaise koi v element, even agar space, enter, comments kuchh v rahe wo usko target kar lega)
console.log("firstChild 👇")

ele16 = document.querySelector("#inner").firstChild
console.log(ele16)

ele17 = document.querySelector("#inner").firstChild.innerHTML
console.log(ele17)





// lastChild (isme sab kuchh uth ke aa jata hai jo v last child ho jaise koi v element, even agar space, enter, comments kuchh v rahe wo usko target kar lega)
console.log("lastChild 👇")

ele18 = document.querySelector("#inner").lastChild
console.log(ele18)

ele19 = document.querySelector("#inner").lastChild.innerHTML
console.log(ele19)

ele20 = document.querySelector("#Child-C").lastChild
console.log(ele20)



//nextElementSibling
console.log("nextElementSibling 👇")

ele21 = document.querySelector("#Child-C").nextElementSibling
console.log(ele21)

ele22 = document.querySelector("#Child-C").previousElementSibling
console.log(ele22)




