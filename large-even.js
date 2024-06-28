const str = "this is a pleasent day wednesday"

const arr = str.split(' ')

let count = arr.map((val)=>val.length)


const max = Math.max(...count.filter((val)=>val%2===0))

const res = count.indexOf(max)

console.log(arr[res]);

// clalculating large even string length 


// let max = "";
// let cur = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//         if (max.length < cur.length && cur.length %2 == 0) {
//             max = cur;
//         }
//         cur = ""; // Reset the current word
//     } else {
//         cur += str[i]; // Add the character to the current word
//     }
// }

// // Check the last word
// if (max.length < cur.length && cur.length %2 == 0) {
//     max = cur;
// }

// console.log(max);



 

