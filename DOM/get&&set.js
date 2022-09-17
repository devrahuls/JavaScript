console.log("Get&&Set Methods 👇")

//Get wale saare methods 👇

ele0 = document.getElementById("header0").innerText  // It gets the inner Text from an HTML tag.

document.write(ele0 + "<br><br>")



ele1 = document.getElementById("nav0").innerText

document.write(ele1 + "<br><br>")



ele2 = document.getElementById("footer0").innerHTML  // It gets the inner HTML from a particular id's HTML tag

console.log(ele2 + "<br><br>")



ele3 = document.getElementById("header0").getAttribute("style")
ele4 = document.getElementById("header0").getAttribute("onclick")

document.write(ele3 + "<br>" + ele4 + "<br><br>")



ele5 = document.getElementById("header0").getAttributeNode("style").value
ele6 = document.getElementById("header0").getAttributeNode("onclick").value

document.write(ele5 + "<br>" + ele6 + "<br><br>")



ele7 = document.getElementById("header0").attributes;
ele8 = document.getElementById("header0").attributes[1];
ele9 = document.getElementById("header0").attributes[1].value;
ele10 = document.getElementById("header0").attributes[1].name;


console.log(ele7)
console.log(ele8)
console.log(ele9)
console.log(ele10)




// Set ke saare methods 👇

/*
innerText
innerHTML
setAttribute
attributes
removeAttribute
*/


ele11 = document.getElementById("sub-heading0").innerText = "CONTENT"
//It changes the inner text of the selected attr/id/class.. .

ele12 = document.getElementById("sub-heading0").innerHTML = "<span>COONTENT</span>"
//It changes the inner HTML of the selected attr/id/class.. .


/*ele13 = document.getElementById("footer0").setAttribute("style" , "10px")*/
//It changes the selected Attribute by the reference of their name

/*ele14 = document.getElementById("footer0").attributes[2].value = "10px"*/
//It changes the selected Attribute by the reference of their index number

/*ele15 = document.getElementById("footer0").removeAttribute("style")*/
//It removes the selected Attribute from an id/class.. .