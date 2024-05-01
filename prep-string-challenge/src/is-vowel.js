/* exported isVowel */
function isVowel(char) {
  char = char.toLowerCase();

  if (
    'a' === char ||
    'e' === char ||
    'i' === char ||
    'o' === char ||
    'u' === char
  )
    return true;

  return false;
}
