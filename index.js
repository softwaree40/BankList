"use strict"
let allLi = document.querySelector(".all-li")
let btns = document.querySelector(".btn")
let listsItems = document.querySelector(".special")

const randInt = (min,max) =>  Math.floor(Math.random() * (max - min + 1) + min)
console.log("show me randInt",randInt(1,70))
//rgb(255,255,255)
const createNewColor = function(){
    return `rgb(${randInt(0,255)},${randInt(0,255)},${randInt(0,255)})` 

}
 

// let allLi = document.getElementsByTagName("li")
// let newArray = Array.from(allLi)
// console.log(newArray)

  


// console.log(createNewColor())

btns.addEventListener("click",function(){
   
    document.querySelector("body").style.backgroundColor = createNewColor()
    
})

// // let btns = document.querySelector(".btn")
// // let objectC = document.querySelector(".objective-c")
// console.log(allLi)

// const scrollIntoMyView = function(){
//     console.log("i am click to scrool",listsItems)
//     listsItems.scrollIntoView({behavior:"smooth"})
// }

// btns.addEventListener("click",scrollIntoMyView)

console.log(allLi.dataset.num)
// OOP
// OOP is programming (paradigm) style of code  is a way of writting or organize a code base on object concept
  // we use object to model(describe) real-world or abstract feature