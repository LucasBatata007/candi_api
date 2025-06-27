const express = require('express'); 
const path = require('path');
const app = require('./src/app');
const conectarBanco = require('./src/config/database');

const PORT = process.env.PORT || 3000;

conectarBanco();

app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'front.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
