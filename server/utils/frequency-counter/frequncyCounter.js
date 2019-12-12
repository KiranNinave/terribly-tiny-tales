function getFrequncy(words) {
  return new Promise((resolve, reject) => {
    const wordArray = words.split(/\s+/);
    const HashMap = {};

    wordArray.forEach(key => {
      if (HashMap.hasOwnProperty(key)) {
        HashMap[key]++;
      } else {
        HashMap[key] = 1;
      }
    });

    var result = Object.keys(HashMap).map(function(key) {
      return {
        word: key,
        count: HashMap[key]
      };
    });

    result.sort(function(a, b) {
      return b.count - a.count;
    });
    resolve(result);
  });
}

module.exports = {
  getFrequncy
};
