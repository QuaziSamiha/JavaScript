function hello1(){
    let c = function hello2(){
        console.log("good morning from function hello2")
    }

    return c;
}

let greetings = hello1();
greetings()

// closure means it returns a function with its environment (lexical environment)