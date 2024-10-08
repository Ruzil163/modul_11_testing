const {evenIsNotEven}= require ("../evenIsNotEven.js");

describe("test for the function of determining an even number", () => {
    it("must work correctly with an even number", () => {
        const num =14
        expect(num % 2).toBe(0);
    });
    it("should operate correctly with complex number", () => {
        const num =17
        expect(num % 2 ).toBe(1)
    });
});