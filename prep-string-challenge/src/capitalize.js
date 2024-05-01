/* exported capitalize */
function capitalize(word) {
  const firstChar = word.slice(0, 1).toUpperCase(); //first
  const remainderLetters = word.slice(1, word.length).toLowerCase(); //remainder

  return firstChar + remainderLetters;
}
