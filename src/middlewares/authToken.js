const { gerarAccessToken } = require('../services/gerarToken');
const {
  verificarAccessToken,
  verificarRefreshToken
} = require('../services/verificarToken');

const Profile = require('../models/Profile');   // nosso “usuário”

module.exports = async function authToken(req, res, next) {
  try {
    const refreshToken = req.cookies?.[process.env.REFRESH_TOKEN];
    let   accessToken;

    /* ───────────────────────── Bearer direto ───────────────────────── */
    if (!refreshToken) {
      const [scheme, token] = (req.headers.authorization || '').split(' ');
      if (scheme !== 'Bearer' || !token)
        return res.status(401).json({ erro: 'Token de acesso ausente' });
      accessToken = token;
    }
    /* ─────────────────────── gerar por refresh ─────────────────────── */
    else {
      const decoded = await verificarRefreshToken(refreshToken)
        .catch(() => null);
      if (!decoded)
        return res.status(401).json({ erro: 'Refresh-token inválido' });

      // renova access-token “on-the-fly”
      accessToken = gerarAccessToken(decoded);
      res.setHeader('x-access-renewed', accessToken); // opcional
    }

    const payload = verificarAccessToken(accessToken);
    if (payload.erro)
      return res.status(401).json({ erro: payload.erro });

    /* ───────────────────── buscando usuário no Mongo ────────────────── */
    const user = await Profile.findOne({ user_id: payload.id });
    if (!user)
      return res.status(404).json({ erro: 'Usuário não encontrado' });

    req.user = user;
    return next();
  } catch (err) {
    console.error('authToken error:', err);
    return res.status(500).json({ erro: 'Falha na autenticação' });
  }
};
