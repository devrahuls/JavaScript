//document.getElementById("footer0").onclick = abc;
//this onclick function calls a function 'abc' and set it to the footer0 id


document.getElementById("footer0").addEventListener("click",abc);
//this addEventListener changes the 'footer0' id on clicking it by the reference of 'abc' function


function abc(){
    document.getElementById("footer0").style.background = "magenta"
}
//abc function which returns the style background on footer0 id







document.getElementById("quotesid").addEventListener("mouseenter" , xyz);
//this addEventListener changes the 'quotesid' id on mouse entering it by the reference of 'xyz' function
function xyz(){
    document.getElementById("quotesid").style.background = "green"
}
//xyz function which returns the style background on 'quotesid' id
document.getElementById("quotesid").addEventListener("click" , function(){
    document.getElementById("quotesid").style.border = "5px solid red"
})
//this is the addEventListener cum function which selects a particular id and then do DOM manipulation with the help of function (which hasn't be refernced this time).










/* USECAPTURE --> It basically returns true or false. If we have two div(s) in a block then, if we click on the outer div part then the inner div part
 will automatically runs. So, in order to prevent this misbehaviour, we use 'USECAPTURE' */


/*document.querySelector("#innerid").addEventListener("click" , function(){
    alert("INNER-DIV")
})

document.querySelector("#outerid").addEventListener("click" , function(){
    alert("OUTER-DIV")
})*/

/*If we click on inner div then we got the alert for inner-div firstly, and then we automatically got the alert for outer-div too.
So, in order to remove this misbehavior we now add 'USECAPTURE'*/

document.querySelector("#innerid").addEventListener("click" , function(){
    alert("INNER-DIV")
},true)

document.querySelector("#outerid").addEventListener("click" , function(){
    alert("OUTER-DIV")
},false)

//Now, firstly inner-div will call and then outer-div




document.querySelector("#dialogueboxid").addEventListener("mouseleave",pqr)
function pqr(){
    this.style.background = "red"
}
//this addEventListener changes the 'dialoguebboxid' id on mouse leaving it , by the reference of 'pqr' function


document.querySelector("#dialogueboxid").addEventListener("click" , lol)
function lol(){
    this.removeEventListener("mouseleave" , pqr)
}
//It removes an Event with the help of calling a 'lol' funtion . In 'lol' function it contains remove the Event statement. So, it removes with the help of a refernce 'pqr' function
