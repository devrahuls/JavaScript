console.log("Query Methods 👇")





/*ele0 = document.querySelector("#header0").innerHTML = "<h1>Oh Yeah</h1>"

console.log(ele0)*/

ele1 = document.querySelector(".para")
//It returns only the very first classname query, not after any which is related to this classname.
console.log(ele1)



ele2 = document.querySelectorAll(".para")
//It returns all the queries which is related to this classname
console.log(ele2)



ele2 = document.querySelectorAll(".para")[1]
//It returns the index 1 query which is related to this classname
console.log(ele2)