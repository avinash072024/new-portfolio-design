import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DisableRightClickDirective } from './directives/disable-right-click.directive';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ThemeService } from './services/theme.service';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NgxSpinnerModule, DisableRightClickDirective, HeaderComponent, FooterComponent, ScrollTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  protected readonly title = signal('portfolio');

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private themeService: ThemeService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  ngOnInit() {
    this.themeService.initTheme();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Disable Ctrl+C (Copy)
    if (event.ctrlKey && event.key === 'c') {
      event.preventDefault();
    }

    // Disable Ctrl+P (Print)
    if (event.ctrlKey && event.key === 'p') {
      event.preventDefault();
    }

    // Disable F12 (Inspect Element)
    if (event.key === 'F12') {
      event.preventDefault();
    }

    // Disable Ctrl+Shift+I (Inspect Element)
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
      event.preventDefault();
    }

    // Disable Ctrl+U (View Source)
    if (event.ctrlKey && event.key === 'u') {
      event.preventDefault();
    }
  }
}
