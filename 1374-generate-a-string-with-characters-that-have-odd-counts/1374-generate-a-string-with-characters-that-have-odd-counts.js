/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let str = '';

    let maxValue = n % 2 === 0 ? n - 1 : n

    for(let i=0;i<n;i++){
      if(i < maxValue){
        str+=String.fromCharCode(97);
      }else{
        str+=String.fromCharCode(98)
      }
    }

    return str
};

console.log(generateTheString(7))