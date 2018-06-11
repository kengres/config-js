var checkLocalStorage = function () {
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem('feature_test', 'yes');
      if (localStorage.getItem('feature_test') === 'yes') {
        localStorage.removeItem('feature_test');
        return true
        // localStorage is enabled
      } else {
        // localStorage is disabled
        return false
      }
    } catch (e) {
      // localStorage is disabled
      return false
    }
  } else {
    // localStorage is not available
    return false
  } 
}
module.exports = checkLocalStorage;