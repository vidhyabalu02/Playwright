// -----Primitive Data Types ------
var firstName = "Vidhya"
let city = "Trichy"
const bloodGroup = " +ve"
let isWeekend = true
var futureGoal
let mobileNumber= 9876543210
var mark = 1055
var upiId = 458428484268438654684442486n
var transactionId = null

console.log("\n----Variables Demo----")
console.log(`My name is ${firstName} and I live in ${city}. `)
console.log("My blood group is" +bloodGroup)
console.log("And I scored " ,  mark+10 ," in my board exam")
console.log("My Future Goal is  "+ futureGoal)

console.log("\n---Type of All Variables----")

console.log(`FirstName is ${firstName} ; Type-  ${typeof firstName}`)
console.log(`This weekend is ${isWeekend} ; Type- ${typeof isWeekend}`)
console.log(`Mobile Number is ${mobileNumber} ;  Type- ${typeof mobileNumber}`)
console.log(`UPI ID is ${upiId} ; Type- ${typeof upiId}`)
console.log(`Transaction ID is ${transactionId} ; Type- ${typeof transactionId}`)
console.log(`Future Goal is ${futureGoal} ; Type- ${typeof futureGoal}`)


console.log("\n---Examples For var let and loop----")

// ------var is a global and function level scoping----
if(isWeekend) {
    var holidays  = "yes"    //If suppose this block not executed code throw error
    console.log(holidays, ",It is a holiday")
    console.log("I’ve got the weekend off,finally some time to relax!")
} else {
    console.log(holidays, ",It is a holiday")    
    console.log("Weekend’s booked with work, Catch you next week!")

}
console.log(holidays, ",It is a holiday")  

// -------let is block level scoping -----
if(!isWeekend) {
    let holiday  = "yes"    
    console.log(holiday, ",It is a holiday")
   console.log("Weekend’s booked with work, Catch you next week!")
} else {
    // console.log(holiday, ",It is a holiday")  //ReferenceError: holiday is not defined
     console.log("I’ve got the weekend off,finally some time to relax!")
}
//  console.log(holiday, ",It is a holiday")  //ReferenceError: holiday is not defined

  
//------- var vs let vs const---------

//1. var can be redeclared and reassigned 
var firstName = "Vidhyabalu"  
firstName = "vidhyaBalu"  

//2.let cannot be redeclared but can be reassigned 

//let city = "Tiruchirapalli"     // SyntaxError: Identifier 'city' has already been declared 
city = "Tiruchirapalli"          

// 3.cannot be redeclared or reassigned 
//bloodGroup = "A1+ve"    //TypeError: Assignment to constant variable.
//const bloodGroup = "A1+ve"   //SyntaxError: Identifier 'bloodGroup' has already been declared


console.log(`My updated name is ${firstName} and I live in ${city} .My contact number is ${mobileNumber} `)
