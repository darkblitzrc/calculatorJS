const sum = function(a,b){
    return parseFloat(a)+parseFloat(b);
}

const subtract = function(a,b){
    return a-b
}

const multiply = function(a,b){
    return a*b
}

const divide = function(a,b){
    output = parseFloat(a)/parseFloat(b)
    if (output > 0.01){
        return Math.round(output*100)/100
    }else{
        return Math.round(output*100000000)/100000000
    }
}

const operator = function(operator, a, b){
    return operator(a,b)
}

const clearCalc = function(){
    display.textContent = ''
    displayValue = []
    valueA = null
    valueB = null
    step = 0
}

const clearDisplay = function(){
    display.textContent = '';
    displayValue = []
}

const expo = function (x, f = 2) {
    return Number.parseFloat(x).toExponential(f);
  }

let numPad = document.querySelector('.numPad')
let display = document.querySelector('.display');
let clearAll = document.querySelector('.clearAll');
let multiplyButton = document.querySelector('.multiply');
let divideButton = document.querySelector('.divide');
let sumButton = document.querySelector('.sum');
let subsButton = document.querySelector('.substract');
let result = document.querySelector('.result');
let sign = document.querySelector('.signs');
let percentage = document.querySelector('.percentage');
let decimal = document.querySelector('.decimal');


displayValue = []

valueA = null
valueB = null

step = 0
type = 0 //1 = multiplication, 2 = division, 3 = sum, 4 = substraction, 5 = result 

display.style.fontFamily = 'Arial'

let numbersRaw = document.querySelectorAll('.number')
let numbers = Array.from(numbersRaw);
numbers.forEach(number => {
    number.addEventListener('click',(e)=>{
        if (display.textContent.length <= 8){
            if (valueA == null & valueB == null){
                displayValue.push(e.target.textContent)
                display.textContent = displayValue.join("")
                step = 1
                }
            if (step == 2){
                    clearDisplay();
                    step = 3
            }
            if(step == 3){
                    displayValue.push(e.target.textContent)
                    display.textContent = displayValue.join("")
            }

        }
    })
});

 multiplyButton.addEventListener('click',()=>{
    if (type != 1){
        if(type == 2){
            valueB = display.textContent;
            display.textContent = operator(divide,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }else if(type == 3){
            valueB = display.textContent;
            display.textContent = operator(sum,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }else if(type == 4){
            valueB = display.textContent;
            display.textContent = operator(subtract,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }else if (type == 5){
            valueA = display.textContent;
            step = 2
        }
    }
        if(step == 1){
            valueA = display.textContent;
            step = 2
        }else if(step == 3){
            valueB = display.textContent;
            display.textContent = operator(multiply,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }
        
    
    type = 1
 })

divideButton.addEventListener('click', ()=>{
    if (type != 2){
        if(type == 1){
            valueB = display.textContent;
            display.textContent = operator(multiply,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }else if(type == 3){
            valueB = display.textContent;
            display.textContent = operator(sum,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }else if(type == 4){
            valueB = display.textContent;
            display.textContent = operator(subtract,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }else if (type == 5){
            valueA = display.textContent;
            step = 2
        }
    }

        if(step == 1){
            valueA = display.textContent;
            step = 2
        }else if(step == 3){
            valueB = display.textContent;
            display.textContent = operator(divide,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }
        
    type = 2
})

sumButton.addEventListener('click', ()=>{
    if (type != 3){
        if(type == 1){
            valueB = display.textContent;
            display.textContent = operator(multiply,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }else if(type == 2){
            valueB = display.textContent;
            display.textContent = operator(divide,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }else if(type == 4){
            valueB = display.textContent;
            display.textContent = operator(subtract,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }else if (type == 5){
            valueA = display.textContent;
            step = 2
        }
    }

        if(step == 1){
            valueA =  display.textContent;
            step = 2
        }else if(step == 3){
            valueB = display.textContent;
            display.textContent = operator(sum,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }
        
    type = 3
})

subsButton.addEventListener('click', ()=>{
    if (type != 4){
        if(type == 1){
            valueB = display.textContent;
            display.textContent = operator(multiply,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }else if(type == 2){
            valueB = display.textContent;
            display.textContent = operator(divide,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }else if(type == 3){
            valueB = display.textContent;
            display.textContent = operator(sum,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }else if (type == 5){
            valueA = display.textContent;
            step = 2
        }
    }

        if(step == 1){
            valueA =  display.textContent;
            step = 2
        }else if(step == 3){
            valueB = display.textContent;
            display.textContent = operator(subtract,valueA, valueB);
            valueA = display.textContent;
            step = 2
        }
        
    type = 4
})

clearAll.addEventListener('click', ()=>{
    clearCalc();
    display.style.fontSize = '40px'
});


result.addEventListener('click',()=>{
    if(type == 1 & valueB == null){
        valueB = display.textContent;
        display.textContent = operator(multiply,valueA, valueB);
        valueA = display.textContent;
    }else if(type == 1){
        valueB = display.textContent; 
        display.textContent = operator(multiply,valueA, valueB);
    }else if(type == 2 & valueB == null){
        valueB = display.textContent; 
        if (valueA != 0 && valueB == 0){
            display.style.fontSize = '18px'
            display.textContent = 'Error: Can\'t divide by zero.'
        }else{
            display.textContent = operator(divide,valueA, valueB);
            valueA = display.textContent; 
        }
    }else if(type == 2){
        valueB = display.textContent; 
        display.textContent = operator(divide,valueA, valueB);  
    }else if(type == 3 & valueB == null){
        valueB = display.textContent;
        display.textContent = operator(sum,valueA, valueB);
        valueA = display.textContent;
    }else if(type == 3){
        valueB = display.textContent; 
        display.textContent = operator(sum,valueA, valueB);
    }else if(type == 4 & valueB == null){
        valueB = display.textContent;
        display.textContent = operator(subtract,valueA, valueB);
        valueA = display.textContent;
    }else if(type == 4){
        valueB = display.textContent; 
        display.textContent = operator(subtract,valueA, valueB);
        
    }
  type = 5
})

sign.addEventListener('click', ()=>{
    if (displayValue[0] != '-'){
        displayValue.unshift('-');
        display.textContent = displayValue.join('');
    }else if (displayValue[0] == '-'){
        displayValue.shift()
        display.textContent = displayValue.join('');
    }
})

percentage.addEventListener('click',()=>{
    percent = display.textContent/100
    display.textContent = percent
})

decimal.addEventListener('click', ()=>{
    let find = displayValue.find((decimal)=>{
        return decimal == '.'
    })
    if(find == undefined){
        displayValue.push('.');
        display.textContent = displayValue.join('');
    }
})