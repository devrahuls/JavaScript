// appendChild (It adds a text into an HTML element ). 
//Drawback - it always sets at the last in a set of texts.

let newElement = document.createElement("p")
let newText = document.createTextNode("This is just a Text")

newElement.appendChild(newText)

console.log(newElement)
document.querySelector("#test").appendChild(newElement)


let newComment = document.createComment("This is just a comment")

console.log(newComment)
document.querySelector("#test").appendChild(newComment)




// insertBefore (It adds a text into an HTML element at a selected location.)

let newElement1 = document.createElement("p")
let newText1 = document.createTextNode("This is just an another Text")

newElement1.appendChild(newText1)

let target = document.querySelector("#test1")

target.insertBefore(newElement1 , target.childNodes[2])
// newElement.insertBefore(element to be added , position )



//Replace Child

