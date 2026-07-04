import { Injectable } from '@angular/core';

import { map, Observable, of, Subject } from 'rxjs';

import { Turma }      from '../models/turma';
import { Disciplina } from '../models/disciplina';
import { Aluno }      from '../models/aluno';

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

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private _turmaSelecionada$ = new Subject<Turma>;
  public turmaSelecionada$ = this._turmaSelecionada$.asObservable();

  constructor(
  ) {
  }

  public getTurmas(): Observable<Turma[]> {
    return of(TURMAS).pipe(
      map(arrTurmasCruas => arrTurmasCruas.map(
        turmaCrua => new Turma(
          new Disciplina(turmaCrua.disciplina.codigo, turmaCrua.disciplina.nome),
          turmaCrua.ano,
          turmaCrua.periodo,
          turmaCrua.alunos.map(
            alunoCru => new Aluno(
              alunoCru.codigo,
              alunoCru.nome,
            )
          ),
        ),
      ))
    );
  }

  public selecionarTurma(t: Turma) {
    this._turmaSelecionada$.next(t);
  }

}
