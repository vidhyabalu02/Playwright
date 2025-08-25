//Home Assignment: String

/////------------- length of the last word in the string-------------
let lastWordCount = "This is the given string"
let arr = lastWordCount.split(' ')
let length = arr.length
console.log (`The last word is ${arr[length-1]}  and length of the last word is ${arr[length-1].length}`)


///////-------------Trim then find length of the last word in the string-------------
let lastWordCountTrim = "        fly me to the moon      "
let newLastWordCount = lastWordCountTrim.trim()
let arrNew = newLastWordCount.split(' ')
let lengthNew = newLastWordCount.length
console.log (`The last word is ${arrNew[length-1]}  and length of the last word is ${arrNew[length-1].length}`)

//-------------function to check if two strings are anagrams.-----------

let st1 = "listen"
let str2 = "silent"
function isAnagram(str1,str2){

    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    if(str1.length === str2.length) {
        if(str1.split('').sort().join('') === str2.split('').sort().join('')) {
            console.log("True !, The given string are anagram")
        } else {
             console.log("False !, The given string are not  anagram")
        }
    } else {
        console.log("False !, The given string are not  anagram")
    }

}

isAnagram("silent","listen")
isAnagram("Hello", "Olelh")
isAnagram('hello', 'world') 