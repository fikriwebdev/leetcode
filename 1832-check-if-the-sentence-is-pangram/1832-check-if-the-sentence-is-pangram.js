/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if(sentence.length < 26) return false;

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';


    return alphabet.split("").every((str,index)=> sentence.includes(str))

};