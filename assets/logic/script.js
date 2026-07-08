//Define variables and objects
let screen = document.querySelector('.screen');
let numberButtons = document.querySelectorAll('.number');
let functionalButtons = document.querySelectorAll('.functional');
let screenContent = '0';
let oprator = '';
let firstNumber = '';


//Add event listener for each number button
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonNumber = Number(button.innerHTML);
        handelNumber(buttonNumber);
    })
})


//Add event listener for each non number button
functionalButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML == "C"){
            updateScreen('0');
            firstNumber = '';
            oprator = '';
        }else if (button.innerHTML == "=" && oprator != ''){
            let secondNumber = screenContent;
            result = calculateResult(firstNumber, secondNumber);
            updateScreen(result);
            oprator = '';
        }else if (button.innerHTML == '.'){
            if (String(screenContent).indexOf('.') == '-1'){
                updateScreen(`${screenContent}.`)
            }
        }else if (button.innerHTML == '←'){
            updateScreen(String(screenContent).split('').slice(0, -1).join(''));
        }else{
            changeOprator(button.innerHTML);
        }
    })
})


document.addEventListener('keydown', key => {

    //Check if the key is number or not
    if (!isNaN(key.key) && key.key != ' '){
        let inputedNumber = Number(key.key);
        handelNumber(inputedNumber);        
    }else{
        switch (key.key) {
        case 'Enter':
            let secondNumber = screenContent;
            result = calculateResult(firstNumber, secondNumber);
            updateScreen(result);
            break;
    
        case 'Backspace':
            updateScreen(String(screenContent).split('').slice(0, -1).join(''));
            break;

        case 'Escape':
            updateScreen('0');
            firstNumber = '';
            oprator = '';
            break;

        case '+':
        case '-':
        case '*':
        case '/':
            changeOprator(key.key);
            break;
    }
    }
    
})


function changeOprator(newOprator){
    oprator = newOprator;
    firstNumber = screenContent;
    updateScreen('0');
}

function calculateResult(firstNumber, secondNumber){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    switch (oprator) {
        case '+':
            return firstNumber + secondNumber;
            break;

        case '−': 
        case '-':
            return firstNumber - secondNumber;
            break;

        case '×':
        case '*':
            return firstNumber * secondNumber;
            break;
         
        case '÷': 
        case '/':
            return firstNumber / secondNumber;
            break;

        case '%':
            return ((secondNumber/100) * firstNumber);
            break;

        default:
            return 0
            break;
    }
}

function updateScreen(content){
    screenContent = content;
    screen.innerHTML = Number(screenContent).toLocaleString();
}

function handelNumber(number){
    //Prevent two zero bug
    if (screenContent == '0'){
        updateScreen(number)
    }else{
        updateScreen(`${screenContent}${number}`)
    }
}