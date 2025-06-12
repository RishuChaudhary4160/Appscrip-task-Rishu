import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-grid-container">
      <div class="product-header">
        <div class="sort-controls">
          <select class="sort-select" (change)="onSortChange($event)">
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price-high">PRICE: HIGH TO LOW</option>
            <option value="price-low">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>

      <div class="product-grid" *ngIf="products.length > 0; else noProducts">
        <div class="product-card" *ngFor="let product of products; trackBy: trackByProductId">
          <div class="product-image-container">
            <img 
              [src]="product.image" 
              [alt]="product.title"
              class="product-image"
              loading="lazy"
            />
            <button 
              class="wishlist-btn"
              [class.active]="wishlist.has(product.id)"
              (click)="toggleWishlist(product.id)"
              [attr.aria-label]="'Add ' + product.title + ' to wishlist'"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <div class="product-badge" *ngIf="product.id === 1">NEW PRODUCT</div>
            <div class="product-badge out-of-stock" *ngIf="product.id === 2">OUT OF STOCK</div>
          </div>
          
          <div class="product-info">
            <h3 class="product-title">{{ product.title }}</h3>
            <p class="product-subtitle">
              <span class="sign-in-link">Sign in</span> or Create an account to see pricing
            </p>
            
            <div class="product-rating" *ngIf="product.rating">
              <div class="stars">
                <span 
                  *ngFor="let star of getStars(product.rating.rate)" 
                  class="star"
                  [class.filled]="star"
                >★</span>
              </div>
              <span class="rating-count">({{ product.rating.count }})</span>
            </div>
          </div>
        </div>
      </div>

      <ng-template #noProducts>
        <div class="no-products">
          <p>No products found matching your criteria.</p>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent {
  @Input() products: Product[] = [];
  @Input() wishlist: Set<number> = new Set();
  @Output() sortChange = new EventEmitter<string>();
  @Output() wishlistToggle = new EventEmitter<number>();

  onSortChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortChange.emit(target.value);
  }

  toggleWishlist(productId: number) {
    this.wishlistToggle.emit(productId);
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }

  getStars(rating: number): boolean[] {
    const stars: boolean[] = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars);
    }
    
    return stars;
  }
}