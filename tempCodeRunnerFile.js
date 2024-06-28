for(let i = 0; i < arr.length; i++) {
    let result = 1;
    for(let [key,val] of Object.entries(arr[i])) {
        result *= val;
    }
    console.log(result);
}