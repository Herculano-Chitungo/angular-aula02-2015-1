import { Component, inject } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { Observable } from 'rxjs';

import { Turma } from '../../models/turma';
import { TurmaService } from '../../services/turma.service';

@Component({
  selector: 'app-lista-turmas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lista-turmas.component.html',
  styleUrl: './lista-turmas.component.css'
})
export class ListaTurmasComponent {

  public turmaService = inject(TurmaService);
  public turmas$: Observable<Turma[]> = this.turmaService.getTurmas();

}
