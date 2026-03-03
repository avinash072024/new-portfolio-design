import { Component, HostListener, inject, signal } from '@angular/core';
import { Constants } from '../../models/constants';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeTogglerComponent } from '../theme-toggler/theme-toggler.component';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterLink, RouterLinkActive, ThemeTogglerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentYear = new Date().getFullYear();
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
    { id: 1, path: '/home', label: 'Home' },
    { id: 2, path: '/about', label: 'About Me' },
    { id: 3, path: '/skills', label: 'Skills' },
    { id: 4, path: '/projects', label: 'Projects' },
    { id: 5, path: '/contact', label: 'Contact' }
  ];

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkMode.set(this.themeService.getCurrentTheme() === 'dark');
  }

  // openMenubar(): void {
  //   this.isMobileMenuOpen.update(v => !v);
  // }

  openMenubar(): void {
    this.isMobileMenuOpen.update(v => !v);
    // if (this.isMobileMenuOpen()) {
    //   document.body.style.overflow = 'hidden'; // Lock scroll
    // } else {
    //   document.body.style.overflow = 'auto'; // Unlock scroll
    // }
  }
}
