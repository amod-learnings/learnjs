const christmasTree = document.querySelector("img")

christmasTree.onclick = () => {
    const imgSrc = christmasTree.getAttribute("src")
    if (imgSrc == "images/christmas-tree.svg"){
        christmasTree.setAttribute("src", "images/christmas-tree-red.svg")
    } else {
        christmasTree.setAttribute("src", "images/christmas-tree.svg")
    }
    
}

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName () {
    const myName = prompt("Please Enter your Name")
    if(myName != null){
        localStorage.setItem("name", myName)
        myHeading.textContent = `Happy Holidays ${localStorage.getItem('name')}`
    }
}

myButton.onclick = () => {
    setUserName()
}