const jwt = require('jsonwebtoken');
require('dotenv').config();

function verificarAccessToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return { erro: err.message };
  }
}

function verificarRefreshToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

module.exports = { verificarAccessToken, verificarRefreshToken };
