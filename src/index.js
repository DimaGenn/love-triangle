/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
    if (preferences[i] != i + 1) {
      let j = preferences[i] - 1;
      let k = preferences[j] - 1;

      if (preferences[k] - 1 == i) {
        count += 1;
      }
    }
  }
  count = count / 3;
  return count;
};
