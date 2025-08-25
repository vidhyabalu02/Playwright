// Array Intersection Calculation 
//---------function to compute the intersection of two arrays--------

let arr=[1,22,3,4,2,4,34,22,22,22,44,4]
let arr0=[1,22,3,4,2,4,34,22]
let arr1=[1,22,3,4,2,4,34,22]

let arr2 = ['a',1,2,3,"vidhya",25,33]
let arr3 = ['b','a',3,4,5,"Sow","vidhya",25,10,25]

let arr4 = []
let arr5 = []

let alreadyPrinted = []
for(let i=0;i<=arr.length-1;i++){
    for(let j=i+1;j<=arr.length-1;j++){
        if(arr[i]===arr[j] && !alreadyPrinted.includes(arr[i])) { 
            console.log(`The element ${arr[i]} is repeated`)
            alreadyPrinted.push(arr[i])

        }
           
    }
}

function intersection(arr1,arr2) {
    let result=[]
    for(let i=0;i<=arr1.length-1;i++){
         for(let j=0;j<=arr2.length-1;j++){
                if(arr1[i]===arr2[j]) {
                    if(result.includes(arr1[i])){
                        continue;
                    }
                     result.push(arr1[i])
        }
           
    }
}
return result
}

console.log("Passing arrays of differnt data types together : " +intersection(arr0,arr1) )
console.log("Passing arrays of same data : " +intersection(arr1,arr2) )
console.log("Passing empty array : " +intersection(arr3,arr4)  )