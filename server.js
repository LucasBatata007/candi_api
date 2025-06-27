const app = require('./src/app');
const conectarBanco = require('./src/config/database');

const PORT = process.env.PORT || 3000;

conectarBanco();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
