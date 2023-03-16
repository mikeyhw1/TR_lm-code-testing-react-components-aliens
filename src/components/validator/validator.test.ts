import {
    test_failIsNumbers,
    test_failMatchAnswer,
    test_failMaxLength,
    test_failMinLength,
    test_failMinValue,
    test_failNoNumbers,
    test_failNoSpecialCharacters,
    test_failValidEntry,
} from "./validator";

describe("test test_failMinLength", () => {
    it("returns false if valiation pass, test length larger than requirment", async () => {
        const input = "aaa";
        const min = 2;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMinLength(input, min, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });

    it("returns false if valiation pass, test length equal", async () => {
        const input = "aa";
        const min = 2;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMinLength(input, min, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });

    it("returns true if valiation fail, test less than requirment", async () => {
        const input = "d3";
        const min = 3;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMinLength(input, min, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });

    it("returns true if valiation fail, test empty", async () => {
        const input = "";
        const min = 3;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMinLength(input, min, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });
});

describe("test test_failMaxLength", () => {
    it("returns false if valiation pass, test length less than requirment", async () => {
        const input = "abcabc";
        const max = 8;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMaxLength(input, max, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });

    it("returns false if valiation pass, test length equal", async () => {
        const input = "abcabcab";
        const max = 8;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMaxLength(input, max, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });

    it("returns true if valiation fail, test longer than requirment", async () => {
        const input = "abcabcabc";
        const max = 8;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMaxLength(input, max, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });

    it("returns false if valiation pass, test empty", async () => {
        const input = "";
        const max = 3;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMaxLength(input, max, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });
});

describe("test test_failMinValue", () => {
    it("returns false if valiation pass, test larger than requirment", async () => {
        const input = "1001";
        const minValue = 1000;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMinValue(input, minValue, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });

    it("returns false if valiation pass, test equal", async () => {
        const input = "1000";
        const minValue = 1000;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMinValue(input, minValue, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });

    it("returns true if valiation fail, test smaller than requirment", async () => {
        const input = "999";
        const minValue = 1000;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMinValue(input, minValue, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });
});

describe("test test_failNoNumbers", () => {
    it("returns false if valiation pass, test match requirment", async () => {
        const input = "abcdefg";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failNoNumbers(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });

    it("returns true if valiation fail, test have number", async () => {
        const input = "abcd2efg";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failNoNumbers(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });

    it("returns true if valiation fail, test all number", async () => {
        const input = "112233";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failNoNumbers(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });
});

describe("test test_failIsNumbers", () => {
    it("returns false if valiation pass, test match requirment", async () => {
        const input = "112233";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failIsNumbers(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });

    it("returns true if valiation fail, test not number", async () => {
        const input = "abc";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failIsNumbers(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });

    it("returns true if valiation fail, test include number", async () => {
        const input = "ab11c";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failIsNumbers(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });
});

describe("test test_failNoSpecialCharacters", () => {
    it("returns false if valiation pass, test match requirment", async () => {
        const input = "112233 abcabc";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failNoSpecialCharacters(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });

    it("returns true if valiation fail, test have Special Characters", async () => {
        const input = "abc!";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failIsNumbers(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });

    it("returns true if valiation fail, test all Characters", async () => {
        const input = "@$!";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failIsNumbers(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });
});

describe("test test_failMatchAnswer", () => {
    it("returns false if valiation pass, test match requirment", async () => {
        const input = "aa bb 22";
        const answer = "aa bb 22";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMatchAnswer(input, answer, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });

    it("returns true if valiation fail, test NOT match", async () => {
        const input = "aa bb 22";
        const answer = "aa bb";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failMatchAnswer(input, answer, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });
});

describe("test test_failValidEntry", () => {
    it("returns false if valiation pass, test valid entry with string", async () => {
        const input = "abc";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failValidEntry(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });

    it("returns false if valiation pass, test valid entry with number", async () => {
        const input = 123;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failValidEntry(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(false);
    });

    it("returns true if valiation fail, test null", async () => {
        const input = null;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failValidEntry(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });

    it("returns true if valiation fail, test undefined", async () => {
        const input = undefined;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failValidEntry(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });

    it("returns true if valiation fail, test 0", async () => {
        const input = 0;
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failValidEntry(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });

    it("returns true if valiation fail, test empty string", async () => {
        const input = "";
        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        const inputName = "testing";
        await test_failValidEntry(input, validateResult, inputName);
        expect(validateResult.validationError).toBe(true);
    });
});
