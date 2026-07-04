const express = require('express');
const router = express.Router();

const TURMAS = [
  {
    "_id": "abcabc",
    "disciplina": {
      "_id": "bcdbcd",
      "codigo": 'WEB01',
      "nome": 'Fundamentos de Desenvolvimento Web',
    },
    "ano": 2025,
    "periodo": 1,
    "alunos": [
      {
        "_id": "defdef",
        "codigo": 111,
        "nome": 'João Melo',
      },
      {
        "_id": "eefdef",
        "codigo": 112,
        "nome": 'Paulo Siqueira',
      },
    ],
  },
  {
    "_id": "abcabd",
    "disciplina": {
      "_id": "bcdbce",
      "codigo": 'WEB11',
      "nome": 'Versionamento de Código com Git',
    },
    "ano": 2025,
    "periodo": 1,
    "alunos": [
      {
        "_id": "eefdef",
        "codigo": 112,
        "nome": 'Paulo Siqueira',
      },
      {
        "_id": "fefdef",
        "codigo": 222,
        "nome": 'Herculano Chitungo',
      },
    ],
  },
  {
    "_id": "abcabe",
    "disciplina": {
      "_id": "bcdbcf",
      "codigo": 'WEB15',
      "nome": 'Angular',
    },
    "ano": 2025,
    "periodo": 1,
    "alunos": [
      {
        "_id": "defaaa",
        "codigo": 333,
        "nome": 'Lucas Garcia',
      },
      {
        "_id": "defaab",
        "codigo": 334,
        "nome": 'Carolina Kita',
      },
    ],
  },
];

router.get('/', (req, res, next) => {
  res.json(TURMAS);
});

module.exports = router;
