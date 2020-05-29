function printTree(number) {
  const arr = ["\r\n"];
  let result = "";

  for (let i = 0; i < number; i++) {
    arr.unshift("#");
    result += arr.join("");
  }

  console.log(result);
}
