const express = require('express');

const cors = require('cors');

const turmasRouter = require('./api/turmas');

const API_PORT = 3000;
const API_BASE = 'api';

// Objeto que representará nossa aplicação back end:
const app = express();

// Garante que possamos chamar o back end a partir de um front
// em outra porta e/ou outro domínio/IP:
app.use(cors());

// Declara endpoints relacionados a turmas em `/api/turmas`:
app.use(`/${API_BASE}/turmas`, turmasRouter);

// Inicializa a aplicação:
app.listen(API_PORT, () => {
  console.log(`
    Servidor executando em http://localhost:${API_PORT}/${API_BASE}
  `)
});
