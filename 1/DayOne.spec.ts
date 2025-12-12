import { Main } from "./DayOne";

describe('Main', () => { 
    test('Should print out hate speech', () => {

        const text = Main()
        expect(text).toBe("Test Text")
    })
 })