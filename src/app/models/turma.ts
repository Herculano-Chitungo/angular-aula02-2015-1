import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";

export class Turma {

  constructor(
    public readonly disciplina: Disciplina,
    public readonly ano: number,
    public readonly periodo: number,
    public alunos: Aluno[],
  ) {
  }

  public get nome(): string {
    return `${this.disciplina.codigo}-${this.ano}/${this.periodo}`;
  }

}
