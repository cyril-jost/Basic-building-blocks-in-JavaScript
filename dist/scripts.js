console.log('Cyril Jost');
console.log("!!! JAVASCRIPT IS WORKING !!!")

let colors = ["red", "green", "white", 'black'];

let post = {
    title: "My Post",
    description: "My super post, awesome!",
    likeCount: 12,
    comments: ["cool", "perfect", "super"]
};

console.log(colors);
console.log(post);

let age = 12;

if (age > 18) {    //neplatí to//
    console.log("you are Adult !!!")
    console.log("YOU ARE AWESOME !!!")
}
else {
    console.log("STOPKU mas!")
}

for (let i = 0; i < 10; i++) {
    console.log(i);

}

let posts = [{    //ARRAY of Two OBJECTS
    title: "First post",
    likeCount: 24,
}, {
    title: "Second post",
    likeCount: 226,
}];

console.log(colors);

//red , green, white, black //
colors.forEach(color => {   //funkce
    console.log(color)
});

/*let myFunction = x => x * x
//f(x) = x * x //
/*let myfunction = x => {
    console.log(x);
};*/



let jmeno = ['Peter', 'Adam', 'Joe', "Ivan", "Jack", "Peter"];

jmeno.forEach(jmeno => { // for each item in jmeno
    console.log(`Welcome, dear ${jmeno}!`); // print out the item
    if (jmeno === "Peter") {
        console.log("je to blbec")
    };
});

let reminder = 14 % 3; {   //14:3 = 4 zbytek 2//
console.log(reminder);
};

let add = (a, b) => {
    return a + b;  // the return keyword will give you back the result
  };
  
  console.log(add(1, 2)) // will print 3

    console.log('THIS IS THE END OF OUR CODE');

for (let printNumbersTill20 = 1; printNumbersTill20 < 21; printNumbersTill20++) {
    console.log(printNumbersTill20);
    
}
 
//getGreetingTo('Mark');              // Should not print to the console
//console.log(getGreetingTo('Mark')); // Should print 'Hello Mark!'

let getGreetingTo = ["Mark", "Peter"]
getGreetingTo.forEach (getGreetingTo => {
    console.log(`Hello ${getGreetingTo}!`);
});


let printValues = [0, 3, 6, 7, 9, 12, 58, 89, 87, 10257];
console.log(printValues);

printValues.forEach (printValues => {
    console.log(`${printValues}`);
});

console.log(printValues[5]);
console.log(printValues.length);
