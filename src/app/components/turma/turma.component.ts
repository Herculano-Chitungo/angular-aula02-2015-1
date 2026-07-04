import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmaService } from '../../services/turma.service';

@Component({
  selector: 'app-turma',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css'
})
export class TurmaComponent {

  public turmaService: TurmaService = inject(TurmaService);

}
