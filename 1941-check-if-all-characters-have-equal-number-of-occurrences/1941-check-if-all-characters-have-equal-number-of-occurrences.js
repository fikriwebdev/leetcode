/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let arr = [];

    let totals = [];

    for(let i=0;i<s.length;i++){
      if(!arr.includes(s[i])){
        arr.push(s[i])
      }
    }

    for(let i=0;i<arr.length;i++){
        let temp = 0;
        for(let j=0;j<s.length;j++){
          if(s[j] === arr[i]){
            temp+=1
          }
        }

        totals.push(temp)
    }

    return totals.every(total=> total === totals[0]);
};