var personsJson = '{"maleNames": ["Евгений", "Денис", "Антон"],"femaleNames": ["Анастасия","Екатерина", "Светлана"],"surnames": ["Иванов","Петров","Сидоров"]}';


var personsData;


function randomIntNumber(min, max) {
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    return rand;
}

function randomValue(arr) {
    let number = randomIntNumber(0, arr.length - 1);
    value = arr[number];
    return value;
}

function randomFirstName(gender) {
    if (gender == 'male') {
        return randomValue(personsData.maleNames);
    } else {
        return randomValue(personsData.femaleNames);
    }
}

function randomSurname(gender) {
    surn = randomValue(personsData.surnames);
    if (gender == 'female') {
        surn += "a";
    }
    return surn;
}

function randomGender() {
    let number = randomIntNumber(1, 2);
    if (number == 1) {
        return 'male';
    } else {
        return 'female';
    }
}


function getPerson() {
    personsData = JSON.parse(personsJson);

    person = {
        gender: randomGender()
    };
    if (person.gender == 'male') {
        person.genderTitle = 'мужчина';
    } else {
        person.genderTitle = 'женщина';
    }
    person.firstName = randomFirstName(person.gender);
    person.surname = randomSurname(person.gender);
    person.year = randomIntNumber(1900, 2020);
    return this.person;
}

