function getMonth(n) {
    if (n === 1)
        return 'январь'
    if (n === 2)
        return 'февраль';
    if (n === 3)
        return 'март';
    if (n === 4)
        return 'апрель';
    if (n === 5)
        return 'май';
    if (n === 6)
        return 'июнь';
    if (n === 7)
        return 'июль';
    if (n === 8)
        return 'август';
    if (n === 9)
        return 'сентябрь';
    if (n === 10)
        return 'октябрь';
    if (n === 11)
        return 'ноябрь';
    if (n === 12)
        return 'декабрь';
    if (n < 1)
        return 'Число не должно быть меньше единицы';
}
 getMonth(0);
 getMonth(1);
 getMonth(2);
 getMonth(3);
 getMonth(4);
 getMonth(5);
 getMonth(6);
 getMonth(7);
 getMonth(8);
 getMonth(9);
 getMonth(10);
 getMonth(11);
 getMonth(12);
module.exports = {getMonth}