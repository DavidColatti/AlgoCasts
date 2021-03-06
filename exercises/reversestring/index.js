// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

module.exports = reverse;

// Other Solutions:


// function reverse(str) {
//     let arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }


// function reverse(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('');
// }
