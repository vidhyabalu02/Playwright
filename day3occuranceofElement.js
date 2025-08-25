//Classroom Assignment: Arrays in JS 

// --------- count the occurrences of a specific element in an array-----------

let arr = [1,2,4,2,5,6,2,3,33,5]
let result = [] 
for(let i=0;i<arr.length;i++) {
    let count =1
    for(let j=i+1;j<arr.length;j++) {
        if(arr[i]===arr[j]  ) {
            count++
           
        }

    }
    if(count>1 && !result.includes(arr[i]) ) {
         result.push(arr[i])
        console.log(`The element ${arr[i]}  repeated for  ${count} times`)
    }
}