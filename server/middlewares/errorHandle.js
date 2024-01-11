const errorHandle = (err, req, res, next) => {
  console.log(err?.message);
  res.status(500).json(err?.message || err);
};

const pageNotFound = (req, res, next) => {
  res.status(404).json("what???");
};

module.exports = { errorHandle, pageNotFound };
