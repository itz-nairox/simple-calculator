let screen = document.querySelector('.screen');
let numberButtons = document.querySelectorAll('.number');
let screenContent = '0';
let functionalButtons = document.querySelectorAll('.functional');
let func = '';
let firstNumber = '';


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonNumber = Number(button.innerHTML);

        if (screenContent == '0'){
            updateScreen(buttonNumber)
        }else{
            updateScreen(`${screenContent}${buttonNumber}`)
        }
        
    })
})


functionalButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML == "C"){
            updateScreen('0')
            func = '';
        }else if (button.innerHTML == "+"){
            func = '+';
            firstNumber = screenContent;
            updateScreen('0');
        }else if (button.innerHTML == "−"){
            func = '−';
            firstNumber = screenContent;
            updateScreen('0');
        }else if (button.innerHTML == "×"){
            func = '×';
            firstNumber = screenContent;
            updateScreen('0');
        }else if (button.innerHTML == "÷"){
            func = '÷';
            firstNumber = screenContent;
            updateScreen('0');
        }else if (button.innerHTML == "=" && func != ''){
            if (func == '%'){
                let secondNumber = screenContent;
                let result = eval(`(${secondNumber}/100) * ${firstNumber}`);

                updateScreen(result);
                func = '';

            }else{

                let secondNumber = screenContent;
                let result = eval(`${Number(firstNumber)}${func}${Number(secondNumber)}`.replaceAll('÷', '/').replaceAll('×', '*').replaceAll('−', '-'));
                
                updateScreen(result);
                func = '';
            }
        }else if (button.innerHTML == '.'){
            updateScreen(`${screenContent}.`)

        }else if (button.innerHTML == '%'){
            func = '%';
            firstNumber = screenContent;
            updateScreen('0');
        }else if (button.innerHTML == '←'){
            updateScreen(screenContent.split('').slice(0, -1).join(''));
        }
    })
})


function updateScreen(content){
    screenContent = content;
    screen.innerHTML = Number(screenContent).toLocaleString();
    let num = 123;
}
