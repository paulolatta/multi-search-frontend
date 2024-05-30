import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './simple-input.component.html',
  styleUrl: './simple-input.component.scss',
})
export class SimpleInputComponent {
  @Input() label: string = '';
  @Input() inputId: string = '';
  @Input() control: any;
}
