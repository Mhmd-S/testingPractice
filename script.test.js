const capitalize = require("./script");
const 

describe('script.js test', () => {
    test('Capitalize first letter of the word', () => {
        expect(capitalize('hello')).toBe('Hello')
    })
})