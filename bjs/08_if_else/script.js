const hundredsBase = {
    0: '',
    1: 'сто ',
    2: 'двести ',
    3: 'триста ',
    4: 'четыреста ',
    5: 'пятьсот ',
    6: 'шестьсот ',
    7: 'семьсот ',
    8: 'восемьсот ',
    9: 'девятьсот ',
    10: 'одна тысяча '
}

const tensBase = {
    0: '',
    1: '',
    2: 'двадцать ',
    3: 'тридцать ',
    4: 'сорок ',
    5: 'пятьдесят ',
    6: 'шестьдесят ',
    7: 'семьдесят ',
    8: 'восемьдесят ',
    9: 'девяносто ',
}

const integersBase = {
    0: '',
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять',
    10: 'десять',
    11: 'одиннадцать',
    12: 'двенадцать',
    13: 'тринадцать',
    14: 'четырнадцать',
    15: 'пятнадцать',
    16: 'шестнадцать ',
    17: 'семнадцать ',
    18: 'восемнадцать ',
    19: 'девятнадцать ',
}
let minValue = 0;
let minValueDefault = 0;
let maxValue = 100;
let maxValueDefault = 0;
let maxOrder = 8;
let answerNumber = 0;
let orderNumber = 1;
let gameRun = true;

let numberAsText = "";
let numberToGetText = 0;
let hundreds = 0;
let tens = 0;
let integers = 0;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

document.getElementById('game').hidden = true;
document.getElementById('btnOk').addEventListener('click', function () {
    console.log('btnOk click');
    gameRun = true;

    document.getElementById('startData').hidden = true;
    document.getElementById('game').hidden = false;


    minValue = parseInt(document.getElementById('minNumber').value) || 0;
    minValue = (minValue > 999) ? 999 : minValue;
    minValue = (minValue < -999) ? -999 : minValue;
    minValueDefault = minValue;

    maxValue = parseInt(document.getElementById('maxNumber').value) || 100;
    maxValue = (maxValue > 999) ? 999 : maxValue;
    maxValue = (maxValue < -999) ? -999 : maxValue;
    maxValueDefault = maxValue;

    maxOrder = parseInt(document.getElementById('maxOrders').value) || 8;

    if (isNaN(minValue) || isNaN(maxValue) || isNaN(maxOrder)) {
        alert(`Некорректный ввод! Будут установлены значения по умолчанию...`);
    }

    console.log(`start values loaded, maxValue= ${maxValue}, minvalue=${minValue}, ordernumber= ${orderNumber}`);

    //поменял логику на random, так как иначе бот получается предсказуемый и его легко победить
    answerNumber = minValue + Math.floor(Math.round(Math.random() * (maxValue - minValue)));
    orderNumber = 1;
    console.log(`New answer: ${answerNumber}, try #${orderNumber}`);
    gameRun = true;
    orderNumberField.innerText = orderNumber;


    ////////////function get text by number
    numberToGetText = answerNumber;
    numberAsText = "";
    if (numberToGetText == 0) {
        numberAsText = "ноль";
    } else {
        hundreds = Math.floor((Math.abs(numberToGetText) % 1000) / 100);
        tens = Math.floor((Math.abs(numberToGetText) % 100) / 10);
        integers = Math.floor(Math.abs(numberToGetText) % 10);
        if (tens == 1) {
            tens = 0;
            integers += 10;
        }
        console.log(`hundreds ${hundreds}, tens ${tens}, ints ${integers}`);
        numberAsText += hundredsBase[hundreds];
        numberAsText += tensBase[tens];
        numberAsText += integersBase[integers];
    }
    if (numberToGetText < 0) {
        numberAsText = "минус " + numberAsText;
    }
    numberAsText = (numberAsText.length > 20) ? numberToGetText : numberAsText;
    console.log("Число в текст: " + numberAsText);
    ////////////

    answerField.innerText = `Вы загадали число ${numberAsText}?`;

    console.log('btnOk success');
})



document.getElementById('btnRetry').addEventListener('click', function () {
    console.log('game reloading');
    gameRun = true;

    minValue = minValueDefault;
    maxValue = maxValueDefault;

    answerNumber = minValue + Math.floor(Math.round(Math.random() * (maxValue - minValue)));
    orderNumber = 1;
    console.log(`New answer: ${answerNumber}, try #${orderNumber}`);
    gameRun = true;
    orderNumberField.innerText = orderNumber;


    ////////////function get text by number
    numberToGetText = answerNumber;
    numberAsText = "";
    if (numberToGetText == 0) {
        numberAsText = "ноль";
    } else {
        hundreds = Math.floor((Math.abs(numberToGetText) % 1000) / 100);
        tens = Math.floor((Math.abs(numberToGetText) % 100) / 10);
        integers = Math.floor(Math.abs(numberToGetText) % 10);
        if (tens == 1) {
            tens = 0;
            integers += 10;
        }
        console.log(`hundreds ${hundreds}, tens ${tens}, ints ${integers}`);
        numberAsText += hundredsBase[hundreds];
        numberAsText += tensBase[tens];
        numberAsText += integersBase[integers];
    }
    if (numberToGetText < 0) {
        numberAsText = "минус " + numberAsText;
    }
    numberAsText = (numberAsText.length > 20) ? numberToGetText : numberAsText;
    console.log("Число в текст: " + numberAsText);
    ////////////

    answerField.innerText = `Вы загадали число ${numberAsText}?`;

    console.log(`reloaded, maxValue= ${maxValue}, minvalue=${minValue}, ordernumber= ${orderNumber}, 'answerNumber = ${answerNumber} `);
})

document.getElementById('btnOver').addEventListener('click', function () {
    console.log(`btnOver click, maxValue= ${maxValue}, minvalue=${minValue}, ordernumber= ${orderNumber}, 'answerNumber = ${answerNumber} `);
    if (!gameRun) {
        alert("Начни игру заново!");
        return;
    }
    if (maxValue - minValue < 2) {
        let answerPhrase = `Ваше число больше ${minValue}, но меньше ${maxValue}!`;
        answerPhrase += (Math.random() > 0.5) ? ` Cтранно...` : ` Я сдаюсь..\n\u{1F92F}`;
        answerField.innerText = answerPhrase;
        gameRun = false;
        return;
    }
    if (orderNumber == maxOrder) {
        answerField.innerText = `Попытки закончились! Я проиграл...`;
        gameRun = false;
        return;
    }

    minValue = answerNumber + 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber++;
    console.log(`New answer: ${answerNumber}, try #${orderNumber}`);
    orderNumberField.innerText = orderNumber;

    ////////////function get text by number
    numberToGetText = answerNumber;
    numberAsText = "";
    if (numberToGetText == 0) {
        numberAsText = "ноль";
    } else {
        hundreds = Math.floor((Math.abs(numberToGetText) % 1000) / 100);
        tens = Math.floor((Math.abs(numberToGetText) % 100) / 10);
        integers = Math.floor(Math.abs(numberToGetText) % 10);
        if (tens == 1) {
            tens = 0;
            integers += 10;
        }
        console.log(`hundreds ${hundreds}, tens ${tens}, ints ${integers}`);
        numberAsText += hundredsBase[hundreds];
        numberAsText += tensBase[tens];
        numberAsText += integersBase[integers];
    }
    if (numberToGetText < 0) {
        numberAsText = "минус " + numberAsText;
    }
    numberAsText = (numberAsText.length > 20) ? numberToGetText : numberAsText;
    console.log("Число в текст: " + numberAsText);
    ////////////

    let answerPhrase = ``;
    let distance = maxValue - minValue;
    if (distance > 5) {
        answerPhrase = `Ваше число ${numberAsText}?`;
    } else if (distance > 2) {
        answerPhrase = `Скоро угадаю... Это ${numberAsText}?`;
    } else {
        answerPhrase = `Точно! Это ${numberAsText}!`;
    }
    answerField.innerText = answerPhrase;
    console.log(`end btnOver, maxValue= ${maxValue}, minvalue=${minValue}, ordernumber= ${orderNumber}, 'answerNumber = ${answerNumber} `);
})



document.getElementById('btnLess').addEventListener('click', function () {
    console.log(`btnLess click, maxValue= ${maxValue}, minvalue=${minValue}, ordernumber= ${orderNumber}, 'answerNumber = ${answerNumber} `);
    if (!gameRun) {
        alert("Начни игру заново!");
        return;
    }
    if (maxValue - minValue < 2) {
        let answerPhrase = `Ваше число больше ${minValue}, но меньше ${maxValue}!`;
        answerPhrase += (Math.random() > 0.5) ? ` Так не бывает!` : ` Я сдаюсь..\n\u{1F611}`;
        answerField.innerText = answerPhrase;
        gameRun = false;
        return;
    }
    if (orderNumber == maxOrder) {
        answerField.innerText = `Окей, ты победил!`;
        gameRun = false;
        return;
    }

    maxValue = answerNumber - 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber++;
    console.log(`New answer: ${answerNumber}, try #${orderNumber}`);
    orderNumberField.innerText = orderNumber;

    ////////////function get text by number
    numberToGetText = answerNumber;
    numberAsText = "";
    if (numberToGetText == 0) {
        numberAsText = "ноль";
    } else {
        hundreds = Math.floor((Math.abs(numberToGetText) % 1000) / 100);
        tens = Math.floor((Math.abs(numberToGetText) % 100) / 10);
        integers = Math.floor(Math.abs(numberToGetText) % 10);
        if (tens == 1) {
            tens = 0;
            integers += 10;
        }
        console.log(`hundreds ${hundreds}, tens ${tens}, ints ${integers}`);
        numberAsText += hundredsBase[hundreds];
        numberAsText += tensBase[tens];
        numberAsText += integersBase[integers];
    }
    if (numberToGetText < 0) {
        numberAsText = "минус " + numberAsText;
    }
    numberAsText = (numberAsText.length > 20) ? numberToGetText : numberAsText;
    console.log("Число в текст: " + numberAsText);
    ////////////

    let answerPhrase = ``;
    let distance = maxValue - minValue;
    if (distance > 5) {
        answerPhrase = `Так, посмотрим... Это ${numberAsText}?`;
    } else if (distance > 2) {
        answerPhrase = `Я уже близко! Это ${numberAsText}?`;
    } else {
        answerPhrase = `Точно! Это ${numberAsText}!`;
    }
    answerField.innerText = answerPhrase;
    console.log(`end btnLess, maxValue= ${maxValue}, minvalue=${minValue}, ordernumber= ${orderNumber}, 'answerNumber = ${answerNumber} `);

})




document.getElementById('btnEqual').addEventListener('click', function () {
    if (!gameRun) {
        alert("Начни игру заново!");
        return;
    }
    let answerType = Math.round(Math.random() * 3);
    console.log("Answer type: " + answerType);
    switch (answerType) {
        case 1:
            answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
            break;
        case 2:
            answerField.innerText = `Легко! Давай попробуем ещё.`;
            break;
        case 3:
            answerField.innerText = `А ты во мне сомневался?`;
            break;
    }
    gameRun = false;
})

