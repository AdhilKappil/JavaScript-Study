
const arr = [1,2,3,4,1,3]

const res = arr.filter((val) => {
    return arr.indexOf(val) == arr.lastIndexOf(val)
})

console.log(res);


// const res = []

// for(let i=0; i<arr.length; i++){
//     let isDuplicate = false
//     for(let j=0; j<arr.length; j++){
//         if(arr[i] === arr[j] && i != j){
//             isDuplicate = true
//             break
//         }
//     }
//     if(!isDuplicate){
//         res.push(arr[i])
//     }
// }