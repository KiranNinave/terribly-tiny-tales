const frequncyCounter = require("../utils/frequency-counter");

exports.getWords = async (req, res) => {
  try {
    const N = req.params.id;
    res.json(frequncyCounter.getTopRecords(Number.parseInt(N)));
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error!" });
  }
};
