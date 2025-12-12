import { Main } from "./DayOne";

describe('Main', () => {
    test('Testing Numbers', () => {
        const testData = ["L139",
            "R324",
            "L80",
            "L10",
            "R19",
            "R988"]
        const text = Main(testData)
        expect(text).toBe("Test Text")
    })
})

