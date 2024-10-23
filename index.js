import PromptSync from 'prompt-sync';
const module = PromptSync()

let name = module('Enter your name: ')
console.log(`Hello, ${name}!`)

let person = {
    Username:name,
    age:20,
    isMarried:false,
    grosery:['apple','banana','orange'],
    sayHello:function(){
        console.log(`Hello, my name is ${this.Usrname} and I am ${this.age} years old.`);
    },
    sayReciept:function()
    {
     console.log(this.grosery)   
    }
}

console.log(person);
person.sayHello();
person.sayReciept();
