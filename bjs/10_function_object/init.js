window.onload = function()
{
    
    generateNewPerson();
};

document.getElementById('regenerate').addEventListener('click', function () {
    generateNewPerson();
});

function generateNewPerson () {
    console.log('start generate');
    const initPerson = getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.genderTitle;
    document.getElementById('birthYearOutput').innerText = 'Год рождения ' + initPerson.year;
    console.log('finished');
}