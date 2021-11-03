const transpose = function(matrix) {
    // Put your solution here
    let newArray = [];
      
    for (let i = 0; i < matrix[0].length; i++) {
      newArray.push([]);
    }
    // newArray = [[][][][]]
    
    for (let i = 0; i < matrix.length; i++) {
      let row = matrix[i];
      for (let j = 0; j < row.length; j++) {
        newArray[j].push(matrix[i][j]);
      }
    }
    return newArray;
  };
  
  
  const wordSearch = (letters, word) => {
    if (letters.length < 1 || word.length < 1) return false;
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of verticalJoin) {
      if (l.includes(word)) return true;
    }
    return false;
  };
  
  // Check to find the word horizontally and vertically
  // Return true if the word is found, and return false if the word is not found
  module.exports = wordSearch;