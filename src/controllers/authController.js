const jwtUtils = require('../utils/jwtUtils');
const refreshTokens = [];

const login = (req, res) => {
  // Authenticate User
  const { username } = req.body;
  const user = { name: username };
  const accessToken = jwtUtils.generateAccessToken(user);
  const refreshToken = jwtUtils.generateRefreshToken(user);
  refreshTokens.push(refreshToken);
  res.json({ accessToken, refreshToken });
};

const refreshToken = (req, res) => {
  const { token } = req.body;
  if (token == null || !refreshTokens.includes(token)) {
    return res.sendStatus(401);
  }
  const user = jwtUtils.verifyRefreshToken(token);
  if (!user) {
    return res.sendStatus(403);
  }
  const accessToken = jwtUtils.generateAccessToken({ name: user.name });
  res.json({ accessToken });
};

const logout = (req, res) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter((t) => t !== token);
  res.sendStatus(204);
};

module.exports = {
  login,
  refreshToken,
  logout,
};
