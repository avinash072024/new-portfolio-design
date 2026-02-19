import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private themeKey = 'portfolio-theme';

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: Object // Vital for SSR/Hydration in Angular 20
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  // 1. Call this immediately on app startup
  initTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.themeKey) || 'dark';
      this.applyTheme(savedTheme);
    }
  }

  // 2. Logic to switch and save
  toggleTheme() {
    const newTheme = this.getCurrentTheme() === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
    localStorage.setItem(this.themeKey, newTheme);
  }

  private applyTheme(theme: string) {
    this.renderer.setAttribute(document.documentElement, 'data-bs-theme', theme);
  }

  getCurrentTheme(): string {
    if (isPlatformBrowser(this.platformId)) {
      return document.documentElement.getAttribute('data-bs-theme') || 'light';
    }
    return 'light';
  }
}
