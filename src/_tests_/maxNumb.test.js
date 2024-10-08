const {getMaxNumber}= require ('../maxNumb.js');

describe("Проверка работы функции нахождения максимального числа", () => {
    let numbers = getMaxNumber(6, 2, 8)
    it("должна вернуть максимальное число из трех значений", () => {
        expect(numbers).toBe(8)
    });
})