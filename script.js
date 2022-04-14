function capitalize(word) {
    word = word.split('');
    word[0] = word[0].toUpperCase();
    return word.join('');
}

function reverseString(word) {
    word = word.split('');
    word = word.reverse();
    return word.join('')
}

const calculator = {
    add(num1, num2) {
        return num1 + num2
    },
    subtract(num1, num2) {
        return num1 - num2
    },
    divide(num1, num2) {
        return num1 / num2
    },
    multiply(num1, num2) {
        return num1 * num2
    }
}


export {capitalize, reverseString, calculator}