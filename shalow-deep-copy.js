
const arr = [3,4,[10]]

const sha = [...arr]

sha[2][0]=100

console.log(sha)

const copy =JSON.parse(JSON.stringify(arr));

console.log(arr)