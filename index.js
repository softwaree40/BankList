"use strict"
// // let allLi = document.querySelector(".all-li")
// // let btns = document.querySelector(".btn")
// // let listsItems = document.querySelector(".special")

// // const randInt = (min,max) =>  Math.floor(Math.random() * (max - min + 1) + min)
// // console.log("show me randInt",randInt(1,70))
// // //rgb(255,255,255)
// // const createNewColor = function(){
// //     return `rgb(${randInt(0,255)},${randInt(0,255)},${randInt(0,255)})` 

// // }
 

// // // let allLi = document.getElementsByTagName("li")
// // // let newArray = Array.from(allLi)
// // // console.log(newArray)

  


// // // console.log(createNewColor())

// // btns.addEventListener("click",function(){
   
// //     document.querySelector("body").style.backgroundColor = createNewColor()
    
// // })

// // // // let btns = document.querySelector(".btn")
// // // // let objectC = document.querySelector(".objective-c")
// // // console.log(allLi)

// // // const scrollIntoMyView = function(){
// // //     console.log("i am click to scrool",listsItems)
// // //     listsItems.scrollIntoView({behavior:"smooth"})
// // // }

// // // btns.addEventListener("click",scrollIntoMyView)

// // console.log(allLi.dataset.num)
// // // OOP
// // // OOP is programming (paradigm) style of code  is a way of writting or organize a code base on object concept
// //   // we use object to model(describe) real-world or abstract feature
// //creating constructor function

// const Person = function (firstName,lastName){

//    this.firstName = firstName
//    this.lastName = lastName


// }
// const junior = new Person("ojo","peter")

// Person.prototype.firstNameAndlastName = function (firstName,lastName){
//   let fullName = `${firstName} ${lastName}`
//   return fullName
// }
// console.log(junior.firstNameAndlastName())

//  const arr = [1,4,5,6,3,2,1]
// console.log(arr.__proto__.__proto__)
// let newArray = arr.filter(function(element){
//    element < 1

// })
// console.log(newArray)

// let newSet = []
// newSet.push(new Set(arr))
// console.log(newSet)

const Car = function(make,speed){
   
    this.make = make
    this.speed = speed

}
let honda = new Car("Honda",30)
let toyota = new Car("Toyota",70)

Car.prototype.accelerate = function (){
  
 console.log(`${this.make } Accelerate in a greater speed of  ${this.speed +=10}`)

}


Car.prototype.brake = function (){
   console.log(`${this.make} Applied a break in ${this.speed -=5}`)

}
honda.accelerate()
honda.brake()
toyota.accelerate()
toyota.brake()
//ES6 class
//class decleration 
class Person {
    // The constructor for the class person take arg we as properties we want the object instatiate from the class
    // This consructor is fire or call when new object is created
  constructor(firstName,birthYear){
      // Once new object is created,constructor is invoke return new object which is store in a variable "john"
     this.firstName = firstName
     this.birthYear = birthYear

  }


}
const john = new Person("John",1980)