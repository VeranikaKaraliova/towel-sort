module.exports = function towelSort (matrix=[]) {
  let newArr = [];
  if(matrix.length >0){
    for(let i=0; i < matrix.length; i++){
      for(let j=0; j < matrix[i].length; j++){
        if(i%2 !== 0){
          matrix[i].sort((a, b) => b - a);
          newArr.push(matrix[i][j]);
        } else{
          newArr.push(matrix[i][j]);
        };
      };
    };
  };
  return newArr;
};
