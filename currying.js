// function curriying
function currying(x){
    return function(y){
        console.log(x+y);
    }
}

currying(10)(10)
// let add = currying(5);
// add(10);



// Normal function
function a (x,y){
    return x+y
}

console.log(a(10,20));