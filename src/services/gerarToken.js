const jwt = require('jsonwebtoken');
require('dotenv').config();

const TTL_ACCESS  = '15m';        // access-token curto
const TTL_REFRESH = '7d';         // refresh-token longo

function gerarAccessToken(user) {
  return jwt.sign(
    { id: user.user_id, email: user.email },      // payload mínimo
    process.env.JWT_SECRET,
    { expiresIn: TTL_ACCESS }
  );
}

function gerarRefreshToken(user) {
  return jwt.sign(
    { id: user.user_id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: TTL_REFRESH }
  );
}

module.exports = { gerarAccessToken, gerarRefreshToken };
