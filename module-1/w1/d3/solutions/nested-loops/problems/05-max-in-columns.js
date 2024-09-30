/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column.
The return array's length should be equal to the number of columns, such that
each of its elements is the max value in a column.
*/

function maxColumn(matrix) {
  //!!START
  const height = matrix.length;
  const width = matrix[0].length;

  const maxColumns = [];
  for (let col = 0; col < width; col++) {
    let colMax = matrix[0][col];
    for (let row = 1; row < height; row++) {
      if (matrix[row][col] > colMax) {
        colMax = matrix[row][col];
      }
    }
    maxColumns.push(colMax);
  }

  return maxColumns;
  //!!END
}

// matrix = [
//   [5, 9, 21],
//   [9, 19, 6],
//   [12, 14, 15],
// ];

// console.log(maxColumn(matrix)); // [12, 19, 21]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxColumn;