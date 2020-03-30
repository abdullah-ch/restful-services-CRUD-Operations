function Log(req, res, next) {
  console.log("Logging in...........");
  next();
}

module.exports = Log;
