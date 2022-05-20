function validation(req, res, next) {
  const {
    firstName, lastName, email, password,
  } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      error: true,
      message: 'Insira todos os dados.',
    });
  }

  if (password.length < 6) return res.status(400).json('O campo "password" deve ter pelo menos 6 caracteres');

  return next();
}

module.exports = validation;
