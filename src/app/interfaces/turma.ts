export interface ITurma {
  "_id": string,
  "disciplina": {
    "_id": string,
    "codigo": string,
    "nome": string,
  },
  "ano": number,
  "periodo": number,
  "alunos": {
    "_id": string,
    "codigo": number,
    "nome": string,
  }[],
}
