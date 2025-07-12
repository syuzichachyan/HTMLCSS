/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function (caption) {
    let result = '#';
    for (let i = 0; i < caption.length; i++) {
        if (i === 0) {
            result += caption[i].toLowerCase();
        } else if (result[i] === ' ' && i + 1 < caption.length) {
            result += caption[i + 1]?.toUpplerCase();
            i++
        } else {
            result += caption[i]
        }
    }

    return result
};

console.log(generateTag('hello world'));