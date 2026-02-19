import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  imports: [],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss'
})
export class ScrollTopComponent {
  isVisible = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible.set(window.scrollY > 250);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}