//Classroom Assignment: Sum of n values

//--------------- function to sum all the values between 1 and n-------

function cumulativeSum(n) {
    let sum = 0
    for(let i =1 ;i<=n ; i++){
        console.log(`Adding ${i} to the sum ${sum}`)
        sum+=i
    }
    return sum

}

console.log("Sum of all numbers between 1 and 5 is "+cumulativeSum(5))
console.log("Sum of all numbers between 1 and 10 is "+cumulativeSum(10))