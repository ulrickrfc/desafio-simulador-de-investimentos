export function isValid(value) {
  if (!isNaN(+value) || value == '') {
    return true
  }
  return false
}
