//Define variables and objects
let screen = document.querySelector('.screen');
let numberButtons = document.querySelectorAll('.number');
let screenContent = '0';
let functionalButtons = document.querySelectorAll('.functional');
let oprator = '';
let firstNumber = '';


//Add event listener for each number button
numberButtons.forEach(button => {
    button.addEventListener('click', () => {

        let buttonNumber = Number(button.innerHTML);

        //Prevent two zero bug
        if (screenContent == '0'){
            updateScreen(buttonNumber)
        }else{
            updateScreen(`${screenContent}${buttonNumber}`)
        }
        
    })
})


//Add event listener for each non number button
functionalButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML == "C"){
            updateScreen('0')
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

function changeOprator(newOprator){
    oprator = newOprator;
    firstNumber = screenContent;
    updateScreen('0');
}

function calculateResult(firstNumber, secondNumber){
    switch (oprator) {
        case '+':
            return firstNumber + secondNumber;
            break;

        case '−':
            return firstNumber - secondNumber;
            break;

        case '×':
            return firstNumber * secondNumber;
            break;
         
        case '÷':
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
