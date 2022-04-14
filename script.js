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




module.exports = {capitalize, reverseString};