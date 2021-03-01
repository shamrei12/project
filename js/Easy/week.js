let day = +prompt('Введите номер');
if(day > 7 || day < 1){
    console.log('Введите корректный номер недели');
    day = prompt('Введите номер');
}
else{
    switch (day){
        case 1: 
        console.log('Понедельник');
        break;

        case 2:
        console.log('Вторник');
        break;

        case 3: 
        console.log('Среда');
        break;

        case 4: 
        console.log('Четверг');
        break;

        case 5: 
        console.log('Пятница');
        break;

        case 6: 
        console.log('Суббота');
        break;

        case 8: 
        console.log('Восскресенье');
        break;

        default: console.log('Нет такого дня');
    }

}