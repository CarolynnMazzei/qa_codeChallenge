describe("checking for truth", function () {
    test("are the littleNumbers < bigNumbers?", function () {
        var littleNumbers = [-5, 0, 3.14159];
        var bigNumbers = [10, 100, 10000000000000000000];
        for (var i = 0; i < littleNumbers.length && i < bigNumbers.length; i++) {
            expect(littleNumbers[i]).toBeLessThan(bigNumbers[i]);
        }
    });
    test("wordToCheck is a palindrome, case and everything", function () {
        var wordToCheck = "tacocat";
        expect(wordToCheck.split("").reverse().join("")).toBe(wordToCheck);
    });
    test("true", function () {
        var val = true;
        expect(val).toBeTruthy();
    });
    test("there is a sequence to this test", function () {
        var values = ["I am a string.", true, 1];
        for (var i = 0; i < values.length; i++) {
            if (i == 0)
                expect(typeof values[i]).toBe("string");
            else if (i == 1)
                expect(typeof values[i]).toBe("boolean");
            else if (i == 2)
                expect(typeof values[i]).toBe("number");
            else if (i == 3)
                expect(values[i]).toBeNull();
            else
                expect(false).toBe(true);
        }
    });
});
