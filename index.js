function receivesAFunction(receivedFunction){
    receivedFunction();

}

function returnsANamedFunction(){
    return function hello(){console.log("Hello!")};
}

function returnsAnAnonymousFunction(){
    return () => console.log("Hi");
}

receivesAFunction(function test(){ console.log("Hello, world!")});

const returnValue = returnsANamedFunction();

returnValue();

const returnAnonymouse = returnsAnAnonymousFunction();

returnAnonymouse();

