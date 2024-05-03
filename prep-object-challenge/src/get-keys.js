/* exported getKeys */
function getKeys(object) {
  const keyObject = [];

  for (const key in object) {
    keyObject.push(key);
  }

  return keyObject;
}
