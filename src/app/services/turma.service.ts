import { Injectable } from '@angular/core';

import { Turma }      from '../models/turma';
import { Disciplina } from '../models/disciplina';
import { Aluno }      from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(
  ) {
  }

  public getTurmas(): Turma[] {
    return [
      new Turma(
        new Disciplina(
          'WEB01',
          'Fundamentos de Desenvolvimento Web',
        ),
        2025,
        1,
        [
          new Aluno(111, 'João Melo'),
          new Aluno(112, 'Paulo Siqueira'),
        ],
      ),
      new Turma(
        new Disciplina(
          'WEB11',
          'Versionamento de Código com Git',
        ),
        2025,
        1,
        [
          new Aluno(112, 'Paulo Siqueira'),
          new Aluno(222, 'Herculano Chitungo'),
        ],
      ),
      new Turma(
        new Disciplina(
          'WEB15',
          'Angular',
        ),
        2025,
        1,
        [
          new Aluno(333, 'Lucas Garcia'),
          new Aluno(334, 'Carolina Kita'),
        ],
      ),
    ];
  }

}
