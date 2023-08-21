/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let string = '';

    for(let i=0; i<s.length;i++){
        const indexOfIndeces = indices.indexOf(i);

        string+=s[indexOfIndeces]
    }

    return string
};
