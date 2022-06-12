const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number)=> {
    calculatorScreen.value = number
}

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';


const inputNumber = (number) => {
    // currentNumber += number;
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click",(event)=>{
        // console.log(event.target.value);
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})





const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event)=> {
        // console.log(event.target.value)
        inputOperator(event.target.value);
    })
})


const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator;
    currentNumber = '';
}



const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener("click", ()=> {
    calculate()
    updateScreen(currentNumber)
    // console.log("equal button is pressed")
})


const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result
    calculationOperator = ''
}


const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener("click", ()=> {
    // console.log("button ac is clicked")
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}



const decimal = document.querySelector('.decimal')

decimal.addEventListener("click",(event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}