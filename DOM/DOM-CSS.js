console.log("DOM-CSS 👇")




ele0 = document.querySelector("#header0").style.color
//It returns the style property of color in header0 id
console.log(ele0)

ele1 = document.querySelector("#header0").style.border
//It returns 'empty string' because header0 id has no border in style.
console.log(ele1)


ele2 = document.querySelector("#header0").style.backgroundColor = "black"
//It changes the background color of header0 id
//dont use hyphens in this, instead use camelCase for styling. eg- background-color: --> backgroundColor =


ele3 = document.querySelector("#header0").style.border = "1px solid red"
//It adds a border styling property in header0 id


ele4 = document.querySelector("#header0").className = "xyz"
//It chamges the classname of the header0 id.
//Initially header0 id has 'abc' classname, and now its changes into 'xyz'
console.log(ele4)



ele5 = document.querySelector("#header0").classList
// It returns all the classes as a list which exists in the header0 id
console.log(ele5)

ele6 = document.querySelector("#header0").classList.add("pqr","efg")
//It adds a new class 'pqr' and 'efg' in the header0 id and returns all the classes as a list which exists in the header0 id
console.log(ele6)

ele7 = document.querySelector("#header0").classList
console.log(ele7)

ele8 = document.querySelector("#header0").classList.remove("efg")
//It removes the 'efg' class from the header0 id
console.log(ele8)

ele9 = document.querySelector("#header0").classList
console.log(ele9)