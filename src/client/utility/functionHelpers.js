/**
 * Returns `true` if the object is a function.
 * @param {any} functionToCheck object to check
 */
export default function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
