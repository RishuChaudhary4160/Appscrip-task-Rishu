import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <!-- Left side - Menu icon -->
          <div class="header-left">
            <button class="menu-icon" aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>

          <!-- Center - Logo -->
          <div class="header-center">
            <h1 class="logo">LOGO</h1>
          </div>

          <!-- Right side - Icons -->
          <div class="header-right">
            <button class="icon-btn" aria-label="Search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"/>
                <path d="21 21l-4.35-4.35"/>
              </svg>
            </button>
            <button class="icon-btn" aria-label="Wishlist">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <button class="icon-btn" aria-label="Shopping bag">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </button>
            <button class="icon-btn" aria-label="Profile">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
            <div class="language-selector">
              <select>
                <option value="en">ENG</option>
                <option value="es">ESP</option>
                <option value="fr">FRA</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Navigation Menu -->
        <nav class="nav-menu">
          <ul class="nav-links">
            <li><a href="#" class="nav-link">SHOP</a></li>
            <li><a href="#" class="nav-link">SKILLS</a></li>
            <li><a href="#" class="nav-link">STORIES</a></li>
            <li><a href="#" class="nav-link">ABOUT</a></li>
            <li><a href="#" class="nav-link">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}