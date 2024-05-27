function add(x, y){
    return parseInt(x) + parseInt(y);
}


function addition() {
    let x = document.getElementById("fNumber").value;
    let y = document.getElementById("sNumber").value;
    let addition = parseInt(x) + parseInt(y);
    let adding = document.getElementById("addition");

    adding.textContent = `You added ${x} + ${y} = ${addition}`;
    console.log(addition);
}


function multiply(x,y){
    return parseInt(x) * parseInt(y);
}

function times(){
    let x = document.getElementById("fNumber").value;
    let y = document.getElementById("sNumber").value;
    let multiplication = multiply(x,y);
    let times = document.getElementById("multiplication");

    times.textContent = `You multiplied ${x} * ${y} = ${multiplication}`;
    console.log(multiplication);
}


function square(x){
    return multiply(x,x)
}


function squareNums(){
    let x = document.getElementById("fNumber").value;
    let squares = multiply(x,x)
    let sq = document.getElementById("square");
    sq.textContent = `You squared ${x} = ${squares}`

    return multiply(x, x);
}

function add_square(x,y){
    let num1 = square(x);
    let num2 = square(y);
    let addednums = add(num1, num2);
    return addednums
}

function squared(){
    let x = document.getElementById("fNumber").value;
    let y = document.getElementById("sNumber").value;
    let addedsquare = add_square(x,y)
    
    let squared = document.getElementById("addSquare");
    squared.textContent = `You added the squares of ${x} and ${y} = ${addedsquare}`;
    return addedsquare;
}




