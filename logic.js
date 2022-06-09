const sum = function(a,b){
    return a+b
}

const subtract = function(a,b){
    return a-b
}

const multiply = function(a,b){
    return a*b
}

const divide = function(a,b){
    return Math.round(a/b*100)/100
}

const operator = function(operator, a, b){
    return operator(a,b)
}

const clearCalc = function(){
    display.textContent = ''
    displayValue = []
    valueA = 0
    valueB = 0
    click = 0
}

const clearDisplay = function(){
    display.textContent = '';
    displayValue = []
}


let numPad = document.querySelector('.numPad')
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');
let multi = document.querySelector('.multiply');
let result = document.querySelector('.result')

for (let i=0; i<=9; i++){
    let div = document.createElement('div')
    div.className = 'number';
    div.textContent = i;
    div.style.height = '90px';
    div.style.width = '90px';
    div.style.border = '2px solid black';
    numPad.appendChild(div);
}

displayValue = []

valueA = 0
valueB = 0


let body = document.querySelector('.calcBody');
body.addEventListener('click', (e)=>{
    if (e.target.className == 'number'){
        displayValue.push(e.target.textContent)
        display.textContent = displayValue.join("")
    }


})

click = 0

 multi.addEventListener('click',()=>{
    if (click == 0){
        valueA = display.textContent;
        click++
    }else if(click == 2){
        valueB = display.textContent;
        display.textContent = operator(multiply,valueA, valueB);
        valueA = display.textContent;
        click = 1
    }
    
 })

clear.addEventListener('click', ()=>{
    clearCalc();
});

numPad.addEventListener('click', ()=>{
    if (click == 1){
        clearDisplay();
        click++
    }
})