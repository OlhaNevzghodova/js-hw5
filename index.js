const yearOfBirth = prompt('В якому році ви народились?');

const age = 2022 - yearOfBirth;

if (yearOfBirth === null) alert('Шкода, що ти не захотів вказати свій вік');

const city = prompt('В якому місті ви живите?');
let currentCity = '';

if (city === 'Київ' || city === 'київ') {
    currentCity = 'Ти живеш у столиці України';
} else if (city === 'Вашингтон' || city === 'вашингтон') {
    currentCity = 'Ти живеш у столиці США';
} else if (city === 'Лондон' || city === 'лондон') {
    currentCity = 'Ти живеш у столиці Великобританії';
} else if (city === null) {
    alert('Шкода, що ти не захотів ввести своє місто');
} else {
    currentCity = `Ти живеш у місті ${city}`;
}

const favoriteSport = prompt('Який Ваш улюблений вид спорту?');
let currentSport = '';

if (favoriteSport === 'футбол' || favoriteSport === 'Футбол') {
    currentSport = 'ти хочеш бути як Месі?';
} else if (favoriteSport === 'фридайвінг' || favoriteSport === 'Фридайвінг') {
    currentSport = 'ти хочеш бути як Вільям Трабрідж?';
} else if (favoriteSport === 'баскетбол' || favoriteSport === 'Баскетбол') {
    currentSport = 'ти хочеш бути як Майкл Джордан?';
} else if (favoriteSport === null) {
    alert('Шкода, що ти не захотів розказати про свій улюблений вид спорту');
} else {
    currentSport = `твій улюблений спорт - ${favoriteSport}`;
}

if (city, yearOfBirth, favoriteSport !== null) alert(`То тобі ${age}. ${currentCity} та ${currentSport}`);
