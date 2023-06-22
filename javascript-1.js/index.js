console.log("HELLO AUGUSTUS");

//const y = 2.5
const x = "Boris Johnson"
const w = false
let f;

//const x = 5;
console.log("type of y =", typeof y)
console.log("type of x =", typeof x)
console.log("type of w =", typeof w)
console.log("type of f =", typeof f)
console.log("type of s =", typeof s)

function display() {
const dateofbirth = document.querySelector
document.querySelector('#dob').value = "2023-02-20";
}
//let document.getElementById('dob').value = "2023-02-20";
// primitive data types
//numbers
//strings
//Boolean
//null
//Array
let myArr = ["john", "Joe", "mary", 2,4]
console.log(myArr[2])
console.log(myArr[myArr.length-1])
console.log(typeof myArr)
//unshift Array method
console.log("before")
console.log(myArr)

myArr.unshift('joy')
console.log("after")
console.log(myArr)

console.log([...myArr, 'joy'])

const cities = ["tokyo", "cairo", "los angeles", "paris", "seattle"]
console.log("before slicing", cities)
const newCities = cities.slice(2)
console.log("after slicing", newCities)


const startEndOption = cities.slice(2,4)
console.log("start and end option", startEndOption)

//slice() array method
// const months = ['jan', 'march', 'April', 'june']
// console.log("original array", months)
// months.splice(1,0,"feb")
// console.log("splice with three param", months)
// months.splice(4,0, "may")
// console.log("adding may",months)
//looping through an array
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// for(let i=0; i<numbers.length; i++){
//    if(numbers[i] % 3 === 0){
//     console.log(numbers[i])
//    }
// }

const myString = "Augustus"
console.log(myString.toUppercase())

function addition(){
    let addNum = 4+3
    return addNum
}

