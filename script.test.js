import {capitalize, reverseString} from './script.js'

describe('script.js test', () => {
    
    test('Capitalize first letter of the word', () => {
        expect(capitalize('hello')).toBe('Hello')
    })

    test('Reverse a string [123]', () => {
        expect(reverseString('123')).toBe('321')
    })

    test('Reverse a string [ABCabc!@??]', () => {
        expect(reverseString('ABCabc!@??')).toBe('??@!cbaCBA')
    })

})