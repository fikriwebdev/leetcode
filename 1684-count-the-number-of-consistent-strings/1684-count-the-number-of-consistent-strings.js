/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    
    let count = 0;

    for(let i=0;i<words.length;i++){
        const word = words[i].split("");
        const allowedArr = allowed.split("");

        const isOnlyContainAllowed = word.every(letter=> allowedArr.includes(letter));

        if(isOnlyContainAllowed){
            count+=1
        }


    }

    return count
    
};

const allowed = 'ab';
const words = ["ad","bd","aaab","baa","badab"]