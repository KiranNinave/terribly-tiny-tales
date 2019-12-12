const https = require("https");

function getNetworkFile(url) {
  return new Promise((resolve, reject) => {
    let data = "";
    https
      .get(url)
      .on("response", function(response) {
        response.on("data", function(chunk) {
          data += chunk;
        });
        response.on("end", function() {
          resolve(data);
        });
      })
      .on("error", err => {
        reject(err);
      });
  });
}

module.exports = {
  getNetworkFile
};
