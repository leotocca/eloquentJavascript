function printBoard(rows, lines) {
  let arr = [];

  for (let i = 0; i < rows; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j <= lines; j++) {
        if (j !== lines && j % 2 === 0) {
          arr.push(" ");
        } else if (j !== lines && j % 2 !== 0) {
          arr.push("#");
        } else {
          arr.push("\r\n");
        }
      }
    } else if (i % 2 !== 0) {
      for (let j = 0; j <= lines; j++) {
        if (j !== lines && j % 2 === 0) {
          arr.push("#");
        } else if (j !== lines && j % 2 !== 0) {
          arr.push(" ");
        } else {
          arr.push("\r\n");
        }
      }
    }
  }

  return arr.join("");
}
