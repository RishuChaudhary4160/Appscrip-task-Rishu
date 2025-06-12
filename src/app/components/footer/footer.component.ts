import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="newsletter-section">
            <h3 class="section-title">BE THE FIRST TO KNOW</h3>
            <p class="section-description">Sign up for updates from metta muse.</p>
            <div class="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your e-mail..." 
                class="email-input"
                [(ngModel)]="email"
              />
              <button 
                class="subscribe-btn" 
                (click)="onSubscribe()"
                [disabled]="!isValidEmail()"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div class="contact-section">
            <h3 class="section-title">CONTACT US</h3>
            <div class="contact-info">
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            
            <div class="currency-section">
              <h4 class="currency-title">CURRENCY</h4>
              <div class="currency-selector">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMDA1MkI0Ii8+CjxyZWN0IHk9IjgiIHdpZHRoPSIyNCIgaGVpZ2h0PSI4IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB5PSIxNiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjgiIGZpbGw9IiNEODA2MjciLz4KPC9zdmc+" alt="USD Flag" class="flag-icon" />
                <span>• USD</span>
              </div>
              <p class="currency-note">
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr class="divider" />

        <div class="footer-bottom">
          <div class="footer-links">
            <div class="links-column">
              <h4 class="brand-name">mettā muse</h4>
              <ul class="link-list">
                <li><a href="#" class="footer-link">About Us</a></li>
                <li><a href="#" class="footer-link">Stories</a></li>
                <li><a href="#" class="footer-link">Artisans</a></li>
                <li><a href="#" class="footer-link">Boutiques</a></li>
                <li><a href="#" class="footer-link">Contact Us</a></li>
                <li><a href="#" class="footer-link">EU Compliances Docs</a></li>
              </ul>
            </div>

            <div class="links-column">
              <h4 class="column-title">QUICK LINKS</h4>
              <ul class="link-list">
                <li><a href="#" class="footer-link">Orders & Shipping</a></li>
                <li><a href="#" class="footer-link">Join/Login as a Seller</a></li>
                <li><a href="#" class="footer-link">Payment & Pricing</a></li>
                <li><a href="#" class="footer-link">Return & Refunds</a></li>
                <li><a href="#" class="footer-link">FAQs</a></li>
                <li><a href="#" class="footer-link">Privacy Policy</a></li>
                <li><a href="#" class="footer-link">Terms & Conditions</a></li>
              </ul>
            </div>

            <div class="links-column">
              <h4 class="column-title">FOLLOW US</h4>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" class="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              <div class="payment-section">
                <h4 class="column-title">mettā muse ACCEPTS</h4>
                <div class="payment-methods">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzQyODVGNCIvPgo8dGV4dCB4PSI1IiB5PSIxNSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4Ij5HUGF5PC90ZXh0Pgo8L3N2Zz4=" alt="Google Pay" class="payment-icon" />
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI0VCMDAxQiIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjEyIiByPSI2IiBmaWxsPSIjRkY1RjAwIi8+CjxjaXJjbGUgY3g9IjI1IiBjeT0iMTIiIHI9IjYiIGZpbGw9IiNGRkY1RjAiLz4KPC9zdmc+" alt="Mastercard" class="payment-icon" />
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzAwMzA4NyIvPgo8dGV4dCB4PSI1IiB5PSIxNSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4Ij5QYXlQYWw8L3RleHQ+Cjwvc3ZnPg==" alt="PayPal" class="payment-icon" />
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzAwNjFBNyIvPgo8dGV4dCB4PSI4IiB5PSIxNSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4Ij5BbWV4PC90ZXh0Pgo8L3N2Zz4=" alt="American Express" class="payment-icon" />
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzAwN0RGRiIvPgo8dGV4dCB4PSI4IiB5PSIxNSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4Ij5BUGF5PC90ZXh0Pgo8L3N2Zz4=" alt="Apple Pay" class="payment-icon" />
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzY3NTJGRiIvPgo8dGV4dCB4PSI4IiB5PSIxNSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4Ij5TUGF5PC90ZXh0Pgo8L3N2Zz4=" alt="Shop Pay" class="payment-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Output() newsletterSubscribe = new EventEmitter<string>();
  
  email = '';

  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  onSubscribe(): void {
    if (this.isValidEmail()) {
      this.newsletterSubscribe.emit(this.email);
      this.email = '';
    }
  }
}