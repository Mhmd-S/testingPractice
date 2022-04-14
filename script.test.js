import {capitalize, reverseString, calculator} from './script.js'

describe('script.js first function test', () => {
    
    test('Capitalize first letter of the word', () => {
        expect(capitalize('hello')).toBe('Hello')
    })

});

describe('Second function test', () => {

    test('Reverse a string [123]', () => {
        expect(reverseString('123')).toBe('321')
    })

    test('Reverse a string [ABCabc!@??]', () => {
        expect(reverseString('ABCabc!@??')).toBe('??@!cbaCBA')
    })

});

describe('Third function test', () => {

    test('Calculator multiply function', () => {
        expect(calculator.multiply(1, 2)).toBe(2)
    })
    
    test('Calculator add function', () => {
        expect(calculator.add(1, 2)).toBe(3)
    })

    test('Calculator subtract function', () => {
        expect(calculator.subtract(1, 2)).toBe(-1)
    })

    test('Calculator divide function', () => {
        expect(calculator.divide(1, 2)).toBe(1/2)
    })

});