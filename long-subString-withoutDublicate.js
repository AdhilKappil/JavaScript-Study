const str = "this is a pleasent day wednesday"

const arr = str.split(' ')

let count = arr.map((val)=>val.length)


const max = Math.max(...count.filter((val)=>val%2===0))

const res = count.indexOf(max)

console.log(arr[res]);

// clalculating large even string length 



 

