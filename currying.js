// function curriying
function currying(x){
    return function(y){
        console.log(x*y);
    }
}

// accesing inner function in global scop useing closure
// currying(10)(10)



// reusability
const multiplyTwo = currying(2)(5)

