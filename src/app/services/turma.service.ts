import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable, of, Subject } from 'rxjs';

import { API_BASE } from '../app.config';
import { ITurma }     from '../interfaces/turma';
import { Turma }      from '../models/turma';
import { Disciplina } from '../models/disciplina';
import { Aluno }      from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  private _turmaSelecionada$ = new Subject<Turma>;
  public turmaSelecionada$ = this._turmaSelecionada$.asObservable();

  constructor(
  ) {
  }

  public getTurmas(): Observable<Turma[]> {
    return this.httpClient.get<ITurma[]>(`${this.apiBase}/turmas`).pipe(
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
