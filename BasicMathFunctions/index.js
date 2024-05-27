function getInputValues() {
    const x = document.getElementById("fNumber").value;
    const y = document.getElementById("sNumber").value;
    
    if (isNaN(x) || isNaN(y) || x.trim() === "" || y.trim() === "") {
        alert("You have entered an invalid number!");
        return [null, null];
    }else{
        return [parseInt(x), parseInt(y)];
    };
}


function add(x, y) {
    return x + y;
}


function multiply(x, y) {
    return x * y;
}


function square(x) {
    return multiply(x, x);
}


function addSquare(x, y) {
    return add(square(x), square(y));
}


function performOperation(operation) {
    const [x, y] = getInputValues();
    if (x === null || y === null) return;

    let result;
    switch (operation) {
        case 'add':
            result = add(x, y);
            document.getElementById("addition").textContent = `You added ${x} + ${y} = ${result}`;
            break;
        case 'multiply':
            result = multiply(x, y);
            document.getElementById("multiplication").textContent = `You multiplied ${x} * ${y} = ${result}`;
            break;
        case 'square':
            result = square(x);
            document.getElementById("square").textContent = `You squared ${x} = ${result}`;
            break;
        case 'addSquare':
            result = addSquare(x, y);
            document.getElementById("addSquare").textContent = `You added the squares of ${x} and ${y} = ${result}`;
            break;
    }
    console.log(result);
}


