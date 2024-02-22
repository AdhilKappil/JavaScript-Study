
function createPerson(name, age){
    return{ 
        name:name,
        age: age,

        print:function(){
            console.log(`My name is ${this.name} i am ${this.age} years old`);
        }
   }
}

const person1 = createPerson('Adhil', 24)
const person2 = createPerson('Thair', 26)

person1.print()
person1.print()