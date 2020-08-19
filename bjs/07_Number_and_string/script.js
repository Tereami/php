let lastOperand = 0;
let operation = null;
let memory = 0;

const inputWindow = document.getElementById('inputWindow');
const memoryWindow = document.getElementById('memoryWindow');
const previousWindow = document.getElementById('previousWindow');

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '0';
})

document.getElementById('btn_minus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'minus';
    inputWindow.value = '0';
})

document.getElementById('btn_multiply').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'miltiply';
    inputWindow.value = '0';
})

document.getElementById('btn_divide').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'divide';
    inputWindow.value = '0';
})

document.getElementById('btn_calc').addEventListener('click', function () {
    if(operation == 'sum') {
        const secondOperand = parseFloat(inputWindow.value);
        const result = lastOperand + secondOperand;
        inputWindow.value = result;
        previousWindow.value += "\n" + lastOperand + " + " + secondOperand + " = " + result;
        previousWindow.scrollTop = previousWindow.scrollHeight;
        lastOperand = secondOperand; 
    }
    if(operation == 'minus') {
        const secondOperand = parseFloat(inputWindow.value);
        const result = lastOperand - secondOperand;
        inputWindow.value = result;
        previousWindow.value += "\n" + lastOperand + " - " + secondOperand + " = " + result;
        previousWindow.scrollTop = previousWindow.scrollHeight;
        lastOperand = secondOperand; 
    }
    if(operation == 'miltiply') {
        const secondOperand = parseFloat(inputWindow.value);
        const result = lastOperand * secondOperand;
        inputWindow.value = result;
        previousWindow.value += "\n" + lastOperand + " * " + secondOperand + " = " + result;
        previousWindow.scrollTop = previousWindow.scrollHeight;
        lastOperand = secondOperand; 
    }
    if(operation == 'divide') {
        const secondOperand = parseFloat(inputWindow.value);
        const result = lastOperand / secondOperand;
        inputWindow.value = result;
        previousWindow.value += "\n" + lastOperand + " / " + secondOperand + " = " + result;
        previousWindow.scrollTop = previousWindow.scrollHeight;
        lastOperand = secondOperand; 
    }
})

document.getElementById('btn_plusminus').addEventListener('click', function () {
    if(inputWindow.value[0] == '-') {
        inputWindow.value = inputWindow.value.substring(1);
    } else {
        inputWindow.value = '-' + inputWindow.value;
    }
})

document.getElementById('btn_revert').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    if(lastOperand == 0) {
        inputWindow.value = 'Divide by zero';
    } else {
    inputWindow.value = 1 / lastOperand;
    }
})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})

document.getElementById('btn_ce').addEventListener('click', function () {
    inputWindow.value = '0';
})

document.getElementById('btn_mc').addEventListener('click', function () {
    memory = 0;
    memoryWindow.value = "";
})

document.getElementById('btn_mr').addEventListener('click', function () {
    inputWindow.value = memory;
})

document.getElementById('btn_ms').addEventListener('click', function () {
    memory = parseFloat(inputWindow.value);
    memoryWindow.value = "M";
})

document.getElementById('btn_mplus').addEventListener('click', function () {
    memory += parseFloat(inputWindow.value);
    memoryWindow.value = "M";
})

document.getElementById('btn_mminus').addEventListener('click', function () {
    memory -= parseFloat(inputWindow.value);
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    inputWindow.value = Math.sqrt(lastOperand);
})

document.getElementById('btn_percent').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    inputWindow.value = lastOperand / 100;
})

document.getElementById('btn_backspace').addEventListener('click', function () {
    inputWindow.value = inputWindow.value.substring(0, inputWindow.value.length - 1);
})


document.getElementById('btn_1').addEventListener('click', function () {
    if(inputWindow.value == '0') inputWindow.value = '';
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    if(inputWindow.value == '0') inputWindow.value = '';
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    if(inputWindow.value == '0') inputWindow.value = '';
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    if(inputWindow.value == '0') inputWindow.value = '';
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    if(inputWindow.value == '0') inputWindow.value = '';
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    if(inputWindow.value == '0') inputWindow.value = '';
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    if(inputWindow.value == '0') inputWindow.value = '';
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    if(inputWindow.value == '0') inputWindow.value = '';
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    if(inputWindow.value == '0') inputWindow.value = '';
    inputWindow.value += '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
    if(inputWindow.value == '0') inputWindow.value = '';
    inputWindow.value += '0';
})

document.getElementById('btn_dot').addEventListener('click', function () {
    inputWindow.value += '.';
})



