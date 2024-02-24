function ErrorHandling(num1, num2){

    try{
        if(num2 === 0){
            throw Error ('Division by zero is not allowed')
        }
         return console.log(num1/num2);
        
    }catch(err){
        console.log('Erro: ',err.message)
    }finally{
        console.log('Division operation is completed')
    }

}

ErrorHandling(10,0)