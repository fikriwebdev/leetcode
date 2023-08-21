/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let total = 0;

    for(let i =0;i<details.length;i++){
      let age = details[i].substring(11).substring(0,2)
      if(age > 60){
        total+=1
      }
    }

    return total;
};