document.write("dom1.js 👇")

ele0 = document.getElementById("header0").getAttribute("style")
ele1 = document.getElementById("header0").getAttribute("onclick")

document.write(ele0 + "<br>" + ele1 + "<br><br>")


ele2 = document.getElementById("header0").getAttributeNode("style").value
ele3 = document.getElementById("header0").getAttributeNode("onclick").value

document.write(ele2 + "<br>" + ele3 + "<br><br>")
