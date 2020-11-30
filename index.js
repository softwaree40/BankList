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

// const Car = function(make,speed){
   
//     this.make = make
//     this.speed = speed

// }
// let honda = new Car("Honda",30)
// let toyota = new Car("Toyota",70)

// Car.prototype.accelerate = function (){
  
//  console.log(`${this.make } Accelerate in a greater speed of  ${this.speed +=10}`)

// }


// Car.prototype.brake = function (){
//    console.log(`${this.make} Applied a break in ${this.speed -=5}`)

// }
// honda.accelerate()
// honda.brake()
// toyota.accelerate()
// toyota.brake()
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
  // This method would be added to the prototype properties of the class
  calcAge (){

      return `${2020 - this.birthYear}`

  }

}
const john = new Person("John",1980)
// 4 step take place when new is use on constructor
//1. new empty object is created {}
//2. "this" point or reference the new empty object created
//3. the new object {} is link to the prototype of the class __prototype__
//4. the constructor return new object created.
console.log("This is new object Age",john.calcAge())
// Classes are not hoisted in javaScript.
//Classes are first-class-citizen
// classess are executed in strict mode

// getter and setter in js

const account = {
 owner: "Wale",
 movements : [200,500,700,10000,5000],

 get latest(){
    return this.movements.slice(-1).pop()
  
 },
 set latest(mov){
   this.movements.push(mov)

 }

};
console.log(account.latest)
account.latest = 100
console.log(typeof account.latest)
// es6 class

class Car{

constructor(make,speed){

  this.make = make,
  this.speed = speed
}
get speedUS(){

    return `${this.make} going at ${this.speed/1.6} mi/h`
}

set speedUS(speed){

 return `${this.make} going at ${this.speed * 1.6}`

}
accelerate(){

return`${this.make } Accelerate in a greater speed of  ${this.speed +=10}`
}
brake(){
    return `${this.make} Applied a break in ${this.speed -=5}`

}
}

const ford = new Car("Ford",120)
console.log(ford.speedUS)
// AJAX
const getCountry = function(country){

  const request = new XMLHttpRequest()
  request.open("GET",`https://restcountries.eu/rest/v2/name/${country}`)
  request.send()
  request.addEventListener("load",function(){
  
    const [data] = JSON.parse(this.responseText)
    console.log(data)
    const html = `<article>
    <img class="country_img" src="${data.flag}"/>
    <div>
        <h3 class="country_name">${data.name}</h3>
        <h4 class="country_region">${data.region}</h3>
        <p class="country_row"><span>Population:</span>${data.population}</p>
        <p class="country_row"><span>language:</span>${data.languages[0].name}</p>
        <p class="country_row"><span>Money:</span>${data.currencies[0].name}</p>
    </div>
  
  </article>`
  let container = document.querySelector("#new-container")
  container.insertAdjacentHTML("beforeend",html)
  
  })

}
getCountry("usa")