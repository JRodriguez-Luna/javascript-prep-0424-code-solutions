/* exported toObject */
function toObject(keyValuePair) {
  const object = {};
  //Hard code
  const key = keyValuePair[0];
  const value = keyValuePair[1];

  object[key] = value;

  return object;
}
