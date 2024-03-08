function outer (){
    let num1 = 10
    return function inner(y){
        console.log(num1 + y);
    }
}

outer()(10) 