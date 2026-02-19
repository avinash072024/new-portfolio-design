import { DOCUMENT, NgClass } from '@angular/common';
import { Component, HostListener, inject, Inject, OnInit, Renderer2, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Constants } from '../../models/constants';
import { ThemeService } from '../../services/theme.service';
import { ThemeTogglerComponent } from '../theme-toggler/theme-toggler.component';

@Component({
  selector: 'app-header',
  imports: [NgClass, RouterLink, RouterLinkActive, ThemeTogglerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // Existing signals
  isScrolled = signal(false);
  isDarkMode = signal(false);
  scrollProgress = signal(0); // For the progress bar
  isMobileMenuOpen = signal(false);
  websiteName: string = Constants.APP_NAME;

  private themeService = inject(ThemeService);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll = window.scrollY;
    this.isScrolled.set(scroll > 25);

    // Calculate scroll percentage
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress.set((scroll / docHeight) * 100);
  }

  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  toggleTheme(): void {
    this.themeService.toggleTheme();
    // Update local signal to swap icons
    this.isDarkMode.set(this.themeService.getCurrentTheme() === 'dark');
  }

  openMenubar(act: boolean): void {
    this.isMobileMenuOpen.set(!act);
    // alert(this.isMobileMenuOpen())
  }

  // closeNavbar() {
  //   // ... your existing logic to hide the bootstrap collapse ...
  //   this.isMobileMenuOpen.set(false);
  // }
}
