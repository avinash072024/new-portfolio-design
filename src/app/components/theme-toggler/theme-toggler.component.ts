import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggler',
  imports: [],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss'
})
export class ThemeTogglerComponent {
  private themeService = inject(ThemeService);

  isDarkMode = signal(false);

  toggleTheme(): void {
    this.themeService.toggleTheme();
    // Update local signal to swap icons
    this.isDarkMode.set(this.themeService.getCurrentTheme() === 'dark');
  }
}
