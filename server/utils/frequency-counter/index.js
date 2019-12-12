const { getNetworkFile } = require("./getNetworkFile");
const { getFrequncy } = require("./frequncyCounter");

const Singletone = (function() {
  let instance;
  const createInstance = async function(url) {
    try {
      if (instance) return instance;
      console.log("create instance invoked");
      const data = await getNetworkFile(url);
      instance = await getFrequncy(data);
      return instance;
    } catch (err) {
      throw new Error(err);
    }
  };
  const getTopRecords = function(N) {
    if (!instance)
      throw new Error("frequncy counter instance is not initialized");
    return instance.slice(0, N);
  };
  return {
    createInstance,
    getTopRecords
  };
})();

module.exports = Singletone;
