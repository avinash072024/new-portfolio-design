import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Signals for dynamic data
  name = signal('Avinash Marbhal');
  role = signal('Front-End Developer');

  downloadResume(): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/resume/Avinash-Marbhal-Resume-Angular-Updated.pdf'); // Path to your file
    link.setAttribute('download', 'Avinash-Marbhal-Resume-Angular.pdf'); // Desired filename
    document.body.appendChild(link);
    link.click();
    link.remove();
    $('#staticBackdrop').modal('show');
  }
}
