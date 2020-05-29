function printBoard(rows, columns) {
  let arr = [];

  for (let i = 0; i < rows; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j <= columns; j++) {
        if (j !== columns && j % 2 === 0) {
          arr.push(" ");
        } else if (j !== columns && j % 2 !== 0) {
          arr.push("#");
        } else {
          arr.push("\r\n");
        }
      }
    } else if (i % 2 !== 0) {
      for (let j = 0; j <= columns; j++) {
        if (j !== columns && j % 2 === 0) {
          arr.push("#");
        } else if (j !== columns && j % 2 !== 0) {
          arr.push(" ");
        } else {
          arr.push("\r\n");
        }
      }
    }
  }

  return arr.join("");
}
