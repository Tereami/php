let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));







let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
let maxOrder = parseInt(prompt('Задайте максимальное число попыток', '8'));
if (isNaN(minValue) || isNaN(maxValue) || isNaN(maxOrder)) {
    alert(`Вы не задали числа! Будут установлены значения по умолчанию...`);
    minValue = 0;
    maxValue = 100;
    maxOrder = 8;
}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю за ${maxOrder} попыток!`);
let answerNumber = minValue + Math.floor(Math.round(Math.random() * (maxValue - minValue)));
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;






let numberAsText = "";
if (answerNumber == 0) {
    numberAsText = "ноль";
} 
if (answerNumber < 0) {
    numberAsText += "минус ";
}

let hundreds = Math.floor((Math.abs(answerNumber) % 1000) / 100);
let tens = Math.floor((Math.abs(answerNumber) % 100) / 10);
let integers = Math.floor(Math.abs(answerNumber) % 10);
console.log(`hundreds ${hundreds}, tens ${tens}, ints ${integers}`);

if (hundreds == 1) {
    numberAsText += "сто ";
} else if (hundreds == 2) {
    numberAsText += "двести ";
} else if (hundreds == 3) {
    numberAsText += "триста ";
} else if (hundreds == 4) {
    numberAsText += "четыреста ";
} else if (hundreds == 5) {
    numberAsText += "пятьсот ";
} else if (hundreds == 6) {
    numberAsText += "шестьсот ";
} else if (hundreds == 7) {
    numberAsText += "семьсот ";
} else if (hundreds == 8) {
    numberAsText += "восемьсот ";
} else if (hundreds == 9) {
    numberAsText += "десятьсот ";
}

if (tens == 2) {
    numberAsText += "двадцать ";
} else if (tens == 3) {
    numberAsText += "тридцать ";
} else if (tens == 4) {
    numberAsText += "сорок ";
} else if (tens == 5) {
    numberAsText += "пятьдесят ";
} else if (tens == 6) {
    numberAsText += "шестьдесят ";
} else if (tens == 7) {
    numberAsText += "семьдесят ";
} else if (tens == 8) {
    numberAsText += "восемьдесят ";
} else if (tens == 9) {
    numberAsText += "девяносто ";
}

if (tens != 1) {
    if (integers == 1) {
        numberAsText += "один";
    } else if (integers == 2) {
        numberAsText += "два";
    } else if (integers == 3) {
        numberAsText += "три";
    } else if (integers == 4) {
        numberAsText += "четыре";
    } else if (integers == 5) {
        numberAsText += "пять";
    } else if (integers == 6) {
        numberAsText += "шесть";
    } else if (integers == 7) {
        numberAsText += "семь";
    } else if (integers == 8) {
        numberAsText += "восемь";
    } else if (integers == 9) {
        numberAsText += "девять";
    }
} else {
    if (integers == 0) {
        numberAsText += "десять";
    } else if (integers == 1) {
        numberAsText += "одиннадцать";
    } else if (integers == 2) {
        numberAsText += "двенадцать";
    } else if (integers == 3) {
        numberAsText += "тринадцать";
    } else if (integers == 4) {
        numberAsText += "четырнадцать";
    } else if (integers == 5) {
        numberAsText += "пятнадцать";
    } else if (integers == 6) {
        numberAsText += "шестнадцать";
    } else if (integers == 7) {
        numberAsText += "семнадцать";
    } else if (integers == 8) {
        numberAsText += "восемнадцать";
    } else if (integers == 9) {
        numberAsText += "девятнадцать";
    }
}
answerField.innerText = `Вы загадали число ${numberAsText}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    maxOrder = parseInt(prompt('Задайте максимальное число попыток', '5'));
    if (isNaN(minValue) || isNaN(maxValue) || isNaN(maxOrder)) {
        alert(`Вы не задали числа! Будут установлены значения по умолчанию...`);
        minValue = 0;
        maxValue = 100;
        maxOrder = 5;
    }
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю за ${maxOrder} попыток!`);
    answerNumber = minValue + Math.floor(Math.round(Math.random() * (maxValue - minValue)));
    gameRun = true;
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;



    numberAsText = "";
    if (answerNumber == 0) {
        numberAsText = "ноль";
    } 
    if (answerNumber < 0) {
        numberAsText += "минус ";
    }
    hundreds = Math.floor((Math.abs(answerNumber) % 1000) / 100);
    tens = Math.floor((Math.abs(answerNumber) % 100) / 10);
    integers = Math.floor(Math.abs(answerNumber) % 10);
        console.log(`hundreds ${hundreds}, tens ${tens}, ints ${integers}`);
    if (hundreds == 1) {
        numberAsText += "сто ";
    } else if (hundreds == 2) {
        numberAsText += "двести ";
    } else if (hundreds == 3) {
        numberAsText += "триста ";
    } else if (hundreds == 4) {
        numberAsText += "четыреста ";
    } else if (hundreds == 5) {
        numberAsText += "пятьсот ";
    } else if (hundreds == 6) {
        numberAsText += "шестьсот ";
    } else if (hundreds == 7) {
        numberAsText += "семьсот ";
    } else if (hundreds == 8) {
        numberAsText += "восемьсот ";
    } else if (hundreds == 9) {
        numberAsText += "десятьсот ";
    }

    if (tens == 2) {
        numberAsText += "двадцать ";
    } else if (tens == 3) {
        numberAsText += "тридцать ";
    } else if (tens == 4) {
        numberAsText += "сорок ";
    } else if (tens == 5) {
        numberAsText += "пятьдесят ";
    } else if (tens == 6) {
        numberAsText += "шестьдесят ";
    } else if (tens == 7) {
        numberAsText += "семьдесят ";
    } else if (tens == 8) {
        numberAsText += "восемьдесят ";
    } else if (tens == 9) {
        numberAsText += "девяносто ";
    }

    if (tens != 1) {
        if (integers == 1) {
            numberAsText += "один";
        } else if (integers == 2) {
            numberAsText += "два";
        } else if (integers == 3) {
            numberAsText += "три";
        } else if (integers == 4) {
            numberAsText += "четыре";
        } else if (integers == 5) {
            numberAsText += "пять";
        } else if (integers == 6) {
            numberAsText += "шесть";
        } else if (integers == 7) {
            numberAsText += "семь";
        } else if (integers == 8) {
            numberAsText += "восемь";
        } else if (integers == 9) {
            numberAsText += "девять";
        }
    } else {
        if (integers == 0) {
            numberAsText += "десять";
        } else if (integers == 1) {
            numberAsText += "одиннадцать";
        } else if (integers == 2) {
            numberAsText += "двенадцать";
        } else if (integers == 3) {
            numberAsText += "тринадцать";
        } else if (integers == 4) {
            numberAsText += "четырнадцать";
        } else if (integers == 5) {
            numberAsText += "пятнадцать";
        } else if (integers == 6) {
            numberAsText += "шестнадцать";
        } else if (integers == 7) {
            numberAsText += "семнадцать";
        } else if (integers == 8) {
            numberAsText += "восемнадцать";
        } else if (integers == 9) {
            numberAsText += "девятнадцать";
        }
    }
    answerField.innerText = `Вы загадали число ${numberAsText}?`;
    gameRun = true;
    console.log('game reloaded');
    console.log(`reloaded, maxValue= ${maxValue}, minvalue=${minValue}, ordernumber= ${orderNumber}, 'answerNumber = ${answerNumber} `);

})

document.getElementById('btnOver').addEventListener('click', function () {
    console.log(`btnOver, maxValue= ${maxValue}, minvalue=${minValue}, ordernumber= ${orderNumber}, 'answerNumber = ${answerNumber} `);
    if (gameRun) {
        if (maxValue - minValue < 2) {
            let answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            if (Math.random() > 0.5) {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            if (orderNumber == maxOrder) {
                answerField.innerText = `Попытки закончились! Я проиграл...`;
                gameRun = false;
            } else {
                

                minValue = answerNumber + 1;
                answerNumber = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;



                numberAsText = "";
                if (answerNumber == 0) {
                    numberAsText = "ноль";
                } 
                if (answerNumber < 0) {
                    numberAsText += "минус ";
                }
                hundreds = Math.floor((Math.abs(answerNumber) % 1000) / 100);
                tens = Math.floor((Math.abs(answerNumber) % 100) / 10);
                integers = Math.floor(Math.abs(answerNumber) % 10);
                console.log(`hundreds ${hundreds}, tens ${tens}, ints ${integers}`);
                
                if (hundreds == 1) {
                    numberAsText += "сто ";
                } else if (hundreds == 2) {
                    numberAsText += "двести ";
                } else if (hundreds == 3) {
                    numberAsText += "триста ";
                } else if (hundreds == 4) {
                    numberAsText += "четыреста ";
                } else if (hundreds == 5) {
                    numberAsText += "пятьсот ";
                } else if (hundreds == 6) {
                    numberAsText += "шестьсот ";
                } else if (hundreds == 7) {
                    numberAsText += "семьсот ";
                } else if (hundreds == 8) {
                    numberAsText += "восемьсот ";
                } else if (hundreds == 9) {
                    numberAsText += "десятьсот ";
                }
            
                if (tens == 2) {
                    numberAsText += "двадцать ";
                } else if (tens == 3) {
                    numberAsText += "тридцать ";
                } else if (tens == 4) {
                    numberAsText += "сорок ";
                } else if (tens == 5) {
                    numberAsText += "пятьдесят ";
                } else if (tens == 6) {
                    numberAsText += "шестьдесят ";
                } else if (tens == 7) {
                    numberAsText += "семьдесят ";
                } else if (tens == 8) {
                    numberAsText += "восемьдесят ";
                } else if (tens == 9) {
                    numberAsText += "девяносто ";
                }
            
                if (tens != 1) {
                    if (integers == 1) {
                        numberAsText += "один";
                    } else if (integers == 2) {
                        numberAsText += "два";
                    } else if (integers == 3) {
                        numberAsText += "три";
                    } else if (integers == 4) {
                        numberAsText += "четыре";
                    } else if (integers == 5) {
                        numberAsText += "пять";
                    } else if (integers == 6) {
                        numberAsText += "шесть";
                    } else if (integers == 7) {
                        numberAsText += "семь";
                    } else if (integers == 8) {
                        numberAsText += "восемь";
                    } else if (integers == 9) {
                        numberAsText += "девять";
                    }
                } else {
                    if (integers == 0) {
                        numberAsText += "десять";
                    } else if (integers == 1) {
                        numberAsText += "одиннадцать";
                    } else if (integers == 2) {
                        numberAsText += "двенадцать";
                    } else if (integers == 3) {
                        numberAsText += "тринадцать";
                    } else if (integers == 4) {
                        numberAsText += "четырнадцать";
                    } else if (integers == 5) {
                        numberAsText += "пятнадцать";
                    } else if (integers == 6) {
                        numberAsText += "шестнадцать";
                    } else if (integers == 7) {
                        numberAsText += "семнадцать";
                    } else if (integers == 8) {
                        numberAsText += "восемнадцать";
                    } else if (integers == 9) {
                        numberAsText += "девятнадцать";
                    }
                }



                let answerPhrase = ``;
                let distance = maxValue - minValue;
                if (distance > 5) {
                    answerPhrase = `Ваше число ${numberAsText}?`;
                } else if (distance > 2) {
                    answerPhrase = `Скоро угадаю! Это ${numberAsText}?`;
                } else {
                    answerPhrase = `Точно! Это ${numberAsText}!`;
                }
                answerField.innerText = answerPhrase;
                console.log(`end btnOver, maxValue= ${maxValue}, minvalue=${minValue}, ordernumber= ${orderNumber}, 'answerNumber = ${answerNumber} `);
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    console.log(`btnLess, maxValue= ${maxValue}, minvalue=${minValue}, ordernumber= ${orderNumber}, 'answerNumber = ${answerNumber} `);
    if (gameRun) {
        if (maxValue - minValue < 2) {
            let answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            if (Math.random() > 0.5) {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            if (orderNumber == maxOrder) {
                answerField.innerText = `Попытки закончились! Я проиграл...`;
                gameRun = false;
            } else {
                
                maxValue = answerNumber - 1;
                answerNumber = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;


                numberAsText = "";
                if (answerNumber == 0) {
                    numberAsText = "ноль";
                } 
                if (answerNumber < 0) {
                    numberAsText += "минус ";
                }
                hundreds = Math.floor((Math.abs(answerNumber) % 1000) / 100);
                tens = Math.floor((Math.abs(answerNumber) % 100) / 10);
                integers = Math.floor(Math.abs(answerNumber) % 10);
                console.log(`hundreds ${hundreds}, tens ${tens}, ints ${integers}`);
                if (hundreds == 1) {
                    numberAsText += "сто ";
                } else if (hundreds == 2) {
                    numberAsText += "двести ";
                } else if (hundreds == 3) {
                    numberAsText += "триста ";
                } else if (hundreds == 4) {
                    numberAsText += "четыреста ";
                } else if (hundreds == 5) {
                    numberAsText += "пятьсот ";
                } else if (hundreds == 6) {
                    numberAsText += "шестьсот ";
                } else if (hundreds == 7) {
                    numberAsText += "семьсот ";
                } else if (hundreds == 8) {
                    numberAsText += "восемьсот ";
                } else if (hundreds == 9) {
                    numberAsText += "десятьсот ";
                }
            
                if (tens == 2) {
                    numberAsText += "двадцать ";
                } else if (tens == 3) {
                    numberAsText += "тридцать ";
                } else if (tens == 4) {
                    numberAsText += "сорок ";
                } else if (tens == 5) {
                    numberAsText += "пятьдесят ";
                } else if (tens == 6) {
                    numberAsText += "шестьдесят ";
                } else if (tens == 7) {
                    numberAsText += "семьдесят ";
                } else if (tens == 8) {
                    numberAsText += "восемьдесят ";
                } else if (tens == 9) {
                    numberAsText += "девяносто ";
                }
            
                if (tens != 1) {
                    if (integers == 1) {
                        numberAsText += "один";
                    } else if (integers == 2) {
                        numberAsText += "два";
                    } else if (integers == 3) {
                        numberAsText += "три";
                    } else if (integers == 4) {
                        numberAsText += "четыре";
                    } else if (integers == 5) {
                        numberAsText += "пять";
                    } else if (integers == 6) {
                        numberAsText += "шесть";
                    } else if (integers == 7) {
                        numberAsText += "семь";
                    } else if (integers == 8) {
                        numberAsText += "восемь";
                    } else if (integers == 9) {
                        numberAsText += "девять";
                    }
                } else {
                    if (integers == 0) {
                        numberAsText += "десять";
                    } else if (integers == 1) {
                        numberAsText += "одиннадцать";
                    } else if (integers == 2) {
                        numberAsText += "двенадцать";
                    } else if (integers == 3) {
                        numberAsText += "тринадцать";
                    } else if (integers == 4) {
                        numberAsText += "четырнадцать";
                    } else if (integers == 5) {
                        numberAsText += "пятнадцать";
                    } else if (integers == 6) {
                        numberAsText += "шестнадцать";
                    } else if (integers == 7) {
                        numberAsText += "семнадцать";
                    } else if (integers == 8) {
                        numberAsText += "восемнадцать";
                    } else if (integers == 9) {
                        numberAsText += "девятнадцать";
                    }
                }


                let answerPhrase = ``;
                let distance = maxValue - minValue;
                if (distance > 5) {
                    answerPhrase = `Надо подумать... Это ${numberAsText}?`;
                } else if (distance > 2) {
                    answerPhrase = `Я близко! Это ${numberAsText}?`;
                } else {
                    answerPhrase = `Уверен! Это ${numberAsText}!`;
                }
                answerField.innerText = answerPhrase;
                console.log(`next question btnOver, maxValue= ${maxValue}, minvalue=${minValue}, ordernumber= ${orderNumber}, 'answerNumber = ${answerNumber} `);
            }
        }
    }
})



document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        let answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
        const answerType = Math.round(Math.random() * 3);
        if (answerType == 1) {
            answerPhrase = `Легко! Давай попробуем ещё.`;
        } else if (answerType == 2) {
            answerPhrase = `А ты во мне сомневался?`;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

