import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  text: string = '';

  public showToast(text: string): void {
    this.text = text;

    const x = document.getElementById("snackbar");
    if (x) {
      x.className = "show";

      setTimeout(function() {
        if (x) {
          x.className = x.className.replace("show", "");
        }
      }, 3000);
    }
  }
}
