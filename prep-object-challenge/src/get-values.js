/* exported getValues */
function getValues(object) {
  const valueObject = [];

  for (const key in object) {
    valueObject.push(object[key]);
  }

  return valueObject;
}
