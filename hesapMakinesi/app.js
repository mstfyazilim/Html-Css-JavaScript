const display = document.querySelector(".calculator-input")
const keys = document.querySelector(".calculator-keys")
let displayValue = '0';
let firstValue=null;
let operator=null;
let waitingForSecondValue=false;
updateDisplay();
function updateDisplay() {

    display.value = displayValue

}

keys.addEventListener("click", function (e) {

    const element = e.target;
    if (!element.matches("button")) return;

    if (element.classList.contains("operator")) { 
        
        heandleOperator(element.value)
        updateDisplay()
        return; }


if (element.classList.contains("decimal")) { 
    inputDecimal(element.value);
    updateDisplay()
    
    
    return }

if (element.classList.contains("clear")) {

    clear()
    updateDisplay()
    return;
}
inputNumber(element.value)
updateDisplay()

})
function heandleOperator(nextoperator){

    if(operator&&waitingForSecondValue){

operator=nextoperator()
return;


    }
const value=parseFloat(displayValue);
if(firstValue===null)
{

firstValue=value

}

else{
    const result=calculate(firstValue,value,operator)
    displayValue=String(result)
    firstValue=result;
}
waitingForSecondValue=true;
operator=nextoperator
}

function calculate(first,second,operator)
{
if(operator==="+"){

    return first+second;
}

if(operator==="-"){

    return first-second;
}

else if(operator==="*"){

    return first*second;
}
else if(operator==="/"){

    return first/second;
}
return second;

}
function inputNumber(num){

    if(waitingForSecondValue){

displayValue=num
waitingForSecondValue=false
    }
else{
    displayValue=displayValue==='0'?num:displayValue+num

}
}
function inputDecimal(){if(!displayValue.includes('.'))

{displayValue+="."}

}

function clear(){

    displayValue="0"
}
//dört işlem yaılan bölüm