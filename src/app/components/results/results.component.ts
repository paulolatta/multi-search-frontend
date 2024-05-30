import { Component, Input } from '@angular/core';

import { DataEach } from '../../services/multi-search.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  @Input() title: string | undefined;
  @Input() results: DataEach[] | undefined;
}
