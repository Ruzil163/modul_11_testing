const {getMonth}= require ('../month.js');

describe("Проверка месяца", () => {
    it("1 = январь", () => {
        const monthNumb = getMonth(1)
        expect(monthNumb).toBe("январь")
    });
    it("2 = февраль", () => {
        const monthNumb = getMonth(2)
        expect(monthNumb).toBe("февраль")
    })
    it("3 = март", () => {
        const monthNumb =getMonth(3)
        expect(monthNumb).toBe("март")
    });
    it("4 = апрель", () => {
        const monthNumb = getMonth(4)
        expect(monthNumb).toBe("апрель")
    })
    it("5 = май", () => {
        const monthNumb = getMonth(5)
        expect(monthNumb).toBe("май")
    })
    it("6 = июнь", () => {
        const monthNumb = getMonth(6)
        expect(monthNumb).toBe("июнь")
    })
    it("7 = июль", () => {
        const monthNumb = getMonth(7)
        expect(monthNumb).toBe("июль")
    })
    it("8 = август", () => {
        const monthNumb = getMonth(8)
        expect(monthNumb).toBe("август")
    })
    it("9 = сентябрь", () => {
        const monthNumb = getMonth(9)
        expect(monthNumb).toBe("сентябрь")
    })
    it("10 = октябрь", () => {
        const monthNumb = getMonth(10)
        expect(monthNumb).toBe("октябрь")
    })
    it("11 = ноябрь", () => {
        const monthNumb = getMonth(11)
        expect(monthNumb).toBe("ноябрь")
    })
    it("12 = декабрь", () => {
        const monthNumb = getMonth(12)
        expect(monthNumb).toBe("декабрь")
    })
    it("0 = error", () => {
        const monthNumb = getMonth(0)
        expect(monthNumb).toBe("Число не должно быть меньше единицы")
    });
})
