const add = function (a, b) {
    let sum=a+b;
    return sum;
};

const subtract = function(a, b) {
    return a-b;
};

const multiply = function(a, b) {
    return a*b;
  };

const divide = function(a, b) {
    if (b===0) {
        //display.style.cssText="font-size:40px; text-align: center; color: white; background: red;";
        return "OOPS!";
    } else {
        return a/b;
    }
};

const operate = function(operator, a, b) {
    if (operator=="+") {
        return add(a,b);
    } else if (operator=="-") {
        return subtract(a,b);
    } else if (operator=="*") {
        return multiply(a,b);
    } else if (operator=="/") {
        return divide(a,b);
    } 
}

const equals=document.querySelector("#equals");
const smile=document.querySelector("#smile");
const display=document.querySelector("#display");
const digits=document.querySelectorAll(".digits");
const operators=document.querySelectorAll(".operator");

let displayValue=0;
display.textContent="0";
let a=0;
let b;
let operator;
let result=0;

digits.forEach(digit=>{
    digit.addEventListener("click", ()=> {
        if (b==display.textContent) {
            display.textContent+=digit.innerHTML;
            displayValue+=digit.innerHTML;
            displayValue=Number(displayValue);
            b=displayValue;
            console.log(`b is ${b}`);
        } else if (operator==undefined) {
            if (display.textContent=="0"||display.textContent=="Result is too long!") {
                display.textContent="";
            }
            display.textContent+=digit.innerHTML;
            displayValue+=digit.innerHTML;
            displayValue=Number(displayValue);
            a=displayValue; 
            console.log(`a is ${a}`);
            //console.log (display.textContent.length);
        } else {
            display.textContent="";
            display.textContent=digit.innerHTML;
            displayValue=digit.innerHTML;
            displayValue=Number(displayValue);
            b=displayValue; 
        }
    });
});

operators.forEach (sign => {
    sign.addEventListener("click", ()=> {
        if (b!==undefined) {
            console.log("b defined working in operators");
            result=Math.round(operate(operator,a,b)*100)/100;
            a=result;
            display.textContent=result;
            operator=sign.innerHTML;
            displayValue=0; 
            resultForDisplay=result.toString();
            if (resultForDisplay.length>13) {
                display.textContent='Result is too long!';
                displayValue=0;
                a=undefined;
                b=undefined;
                result=0;
                operator=undefined;
            }
            
        } else {
            console.log("else working in operators");
            operator=sign.innerHTML;
            displayValue=0;
        }
    });
    
})

clear.addEventListener("click", ()=> {
    display.textContent="0";
    displayValue=0;
    a=undefined;
    b=undefined;
    result=0;
    operator=undefined;
});

equals.addEventListener("click", ()=> {
    
    b=displayValue;
    console.log(`Operator, a, b ${operator}, ${a}, ${b}`);
    console.log(`Result of the operate function is ${operate(operator, a, b)}`);
    //console.log(add(a, b));
    //display.textContent=add(a, b);
    
    result=Math.round(operate(operator,a,b)*100)/100;
    display.textContent=result;
    displayValue=result;
    a=result;
    b=undefined;
    if (result==undefined) {
        display.textContent="0";
        displayValue=0;
        a=undefined;
        b=undefined;
        result=0;
        operator=undefined;
    }
    
    resultForDisplay=result.toString();
    console.log(`length is ${resultForDisplay.length}`);
    if (resultForDisplay.length>13) {
        display.textContent='Result is too long!';
        displayValue=0;
        a=undefined;
        b=undefined;
        result=0;
        operator=undefined;
    }

    
    
});

smile.addEventListener("click", ()=> {
    alert ("HAVE A NICE DAY!");
});



