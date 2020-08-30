let _logger;

module.exports = {
  registerLogger: (logger) => _logger = logger,
  getLogger: () => _logger,
}