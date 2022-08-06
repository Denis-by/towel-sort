  module.exports = function towelSort (matrix) {
    if (!matrix) {
      return [];
    }
    if (matrix.length === 0) {
      return [];
    }
    const newMatrix = [];
    matrix.forEach((value, index) => {
      if (index % 2 !== 0) {
        value.reverse();
      }
      newMatrix.push(...value); 
      })
    return newMatrix
  }