// longest sub string without dublicat

let str = "farfahmfed";
//out : ahmfed

let arr = [];
let res = [];

for (let i = 0; i < str.length; i++) {
  for (let j = i; j < str.length; j++) {
    if (!arr.includes(str[j])){
      arr.push(str[j]);
    } else {
      break
    }
  }
//   console.log(arr);
  if (arr.length > res.length) {
    res = [];
    res = [...arr];
    arr = []
    console.log(res);
  }
  arr = []
}

console.log(res.join(""));
