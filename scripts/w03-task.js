/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */


function add (number1, number2) {
    return number1 + number2;
}

function addNumbers(){

    // Read from the input fields
    const num1 = parseInt(document.getElementById("add1").value);
    const num2 = parseInt(document.querySelector("#add2").value);

    // compute the sum
    const sum = add(num1, num2);

    document.getElementById("sum").value = sum;
}

const theElement = document.getElementById("addNumbers");
console.log(theElement);
theElement.addEventListener("click", addNumbers);
// document.getElementById("addNumbers").addEventListener("click", addNumbers);



/* Function Expression - Subtract Numbers */

const subtract = function (num1, num2) {
    return num1 - num2;
};

const subtractNumbers = function () {
    let minuend=parseInt(document.querySelector('#subtract1').value); 
    let subtrahend=parseInt(document.querySelector('#subtract2').value); 
    document.querySelector("#difference").value = subtract(minuend, subtrahend);
} 
document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2;

  // Function expression to handle button click and display the result
const multiplyNumbers = () => {
    // Get input values
    const factor1 = Number(document.getElementById('factor1').value);
    const factor2 = Number(document.getElementById('factor2').value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */

// Using Function Definition
function divide(num1, num2) {
    return num1 / num2;
}

// Using Function Expression
const divideNumbers = function () {
    const dividend = parseFloat(document.getElementById('dividend').value);
    const divisor = parseFloat(document.getElementById('divisor').value);
    document.querySelector("#quotient").value = divide(dividend, divisor);

}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */


const getTotal = function(){
    let subtotal = Number(document.querySelector('#subtotal').value);
    if (document.getElementById("member").checked) {    
        subtotal *= .80
    }
document.querySelector("#total").textContent = `$ ${subtotal.toFixed(2)}`;}
document.querySelector('#getTotal').addEventListener('click', getTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

// Declare and instantiate an array variable with numbers 1 through 13
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers.join(', ');
/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');


/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;


/* Output Multiplied by 2 Array */
const multipliedBy2 = numbersArray.map(num => num * 2);
document.getElementById('multiplied').textContent = multipliedBy2.join(', ');

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = numbersArray.map(num => num * 2).reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
