const transpose = function(matrix) {
    let result = [];
    for (const y in matrix[0]) {
      let temp = [];
      for (const x in matrix){
        temp.push(matrix[x][y]);
      }
      result.push(temp);
    }  
    return result;
  };

const wordSearch = (letters, word) => { 
    
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
   
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
        

    }
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
        

    }

    return false;
}

module.exports = wordSearch


