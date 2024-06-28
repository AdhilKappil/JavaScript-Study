// function curriying
function currying(x){
    return function(y){
        console.log(x*y);
    }
}

// accesing inner function in global scop useing closure
// currying(10)(10)



// reusability
const mul = currying(10)
mul(1) 
mul(2) 
mul(3) 

