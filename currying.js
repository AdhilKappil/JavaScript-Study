// function curriying
function currying(x){
    return function(y){
        return x + y
    }
}

let add = currying(5);
console.log(add(10));



// Normal function
function a (x,y){
    return x+y
}

console.log(a(10,20));