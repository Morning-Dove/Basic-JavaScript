// loops through an array of fruits
function loop1(){
    let fruits = ["apple", "kiwi", "banana", "watermelon"];
    for (let i = 0; i < fruits.length; i++){
        console.log(fruits[i]);
    }
}


// Loops three times prompting for a fruit each time. 
// Then loops through the list and prints them individually.
const loop2 = () => {
    const fruitArray = [];
    for (let i = 0; i < 3; i++){
        let fruit = prompt("Type in a fruit.");
        fruitArray.push(fruit);
    }
    for (let i = 0; i < fruitArray.length; i++){
        console.log(fruitArray[i]);
    }
};


// Takes a string and splits each item in the string on the comma
const loop3 = () => {
    const fruitArray = prompt("Type in a list of fruits. Seperated by commas.");
    const fruit = fruitArray.split(",");
    for (let i = 0; i < fruit.length; i++){
        console.log(fruit[i].trim());
    }
};


// Takes in a string of numbers and turns them into Integers
const map1 = () => {
    const numString = prompt("Enter comma seperated numbers (e.g. 3,6,9): ");
    const numArrayAsStrings = numString.split(",");
    // Put different versions here

// Version 1

function convertToNumber(str){
    return parseInt(str);
}

const numArray = numArrayAsStrings.map(convertToNumber);

// Version 2

// const numArray = numArrayAsStrings.map(Number);

// Version 3

    // const numArray = numArrayAsStrings.map((numberAsString) => {
    //     return parseInt(numberAsString);
    // });
    
// Version 4  

    // const numArray = [];
    // for (let i = 0; i < numArrayAsStrings.length; i++){
    //     let num = Number(numArrayAsStrings[i]);
    //     numArray.push(num);
    // }
    
    console.log(numArray);
};


// Doubles each number in an array
// Version 2
const map2 = () => {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((num) => {
        return num * 2;
    });

    console.log("Single numbers " + numbers);
    console.log("Doubled numbers " + doubled);
};


// Version 1
// const map2 = () => {
//     const numbers = [1, 2, 3, 4, 5];

//     function doubleNumbers(numbers){
//         return numbers * 2;
//     }

//     const doubled = numbers.map(doubleNumbers);

//     console.log("Single numbers " + numbers);
//     console.log("Doubled numbers " + doubled);
// };



// Loop through array of numbers. If the number is even double it. 
// If the number is odd tripple it. Save to a new list and print it out.
const map3 = () => {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    changedNum = [];
    for (i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            changedNum.push(numbers[i]*2);
        }else{
            changedNum.push(numbers[i]*3);
        }
    }
    for (i = 0; i < numbers.length; i++){
        console.log(`Original: ${numbers[i]}, Changed: ${changedNum[i]}`);
    }
};








