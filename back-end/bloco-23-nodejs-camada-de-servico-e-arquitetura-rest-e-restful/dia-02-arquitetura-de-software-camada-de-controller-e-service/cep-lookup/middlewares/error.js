const errorCodes = {
  invalidData: 400,
  notFound: 404,
  alreadyExists: 409,
};

const errorMiddleware = (error, _req, res, _next) => {
  const { code, message } = error;
  res.status(errorCodes[code] || 500).json({ error: message });
};

module.exports = errorMiddleware;
