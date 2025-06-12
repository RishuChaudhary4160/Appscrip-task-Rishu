import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { HeaderComponent } from '../../components/header/header.component';
import { FilterSidebarComponent } from '../../components/filter-sidebar/filter-sidebar.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductService } from '../../services/product.service';
import { Product, FilterState, SortOption } from '../../models/product.model';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    FilterSidebarComponent,
    ProductGridComponent,
    FooterComponent
  ],
  template: `
    <!-- Announcement Bar -->
    <div class="announcement-bar">
      <div class="container">
        <span class="announcement-text">📦 Lorem ipsum dolor</span>
      </div>
    </div>

    <app-header></app-header>

    <main class="main-content">
      <div class="container">
        <!-- Page Header -->
        <div class="page-header">
          <h1 class="page-title">DISCOVER OUR PRODUCTS</h1>
          <p class="page-description">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
            Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>

        <!-- Content Layout -->
        <div class="content-layout">
          <app-filter-sidebar
            [filters]="filters"
            [productCount]="filteredProducts.length"
            (filtersChange)="onFiltersChange($event)"
          ></app-filter-sidebar>

          <app-product-grid
            [products]="sortedProducts"
            [wishlist]="wishlist"
            (sortChange)="onSortChange($event)"
            (wishlistToggle)="onWishlistToggle($event)"
          ></app-product-grid>
        </div>
      </div>
    </main>

    <app-footer (newsletterSubscribe)="onNewsletterSubscribe($event)"></app-footer>
  `,
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  sortedProducts: Product[] = [];
  wishlist = new Set<number>();
  sortOption: SortOption = 'recommended';
  isLoading = false;
  error: string | null = null;

  filters: FilterState = {
    customizable: false,
    idealFor: [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterials: [],
    pattern: [],
  };

  private destroy$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.setPageMeta();
    this.loadProducts();
    this.addStructuredData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setPageMeta(): void {
    this.titleService.setTitle('Discover Our Products - Premium Collection | mettā muse');
    
    this.metaService.updateTag({
      name: 'description',
      content: 'Discover our premium product collection featuring handcrafted items from skilled artisans. Shop authentic, customizable products with free shipping on orders over $50.'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'Discover Our Products - mettā muse' });
    this.metaService.updateTag({ 
      property: 'og:description', 
      content: 'Premium handcrafted products from skilled artisans. Authentic, customizable items with worldwide shipping.' 
    });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: window.location.href });

    this.metaService.updateTag({ name: 'keywords', content: 'handcrafted products, artisan goods, premium collection, customizable items, authentic crafts' });
    this.metaService.updateTag({ name: 'author', content: 'mettā muse' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }

  private addStructuredData(): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Product Catalog - mettā muse",
      "description": "Browse our collection of premium handcrafted products",
      "url": window.location.href,
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": this.products.length,
        "itemListElement": this.products.map((product, index) => ({
          "@type": "Product",
          "position": index + 1,
          "name": product.title,
          "description": product.description,
          "image": product.image,
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        }))
      }
    });
    document.head.appendChild(script);
  }

  private loadProducts(): void {
    this.isLoading = true;
    this.error = null;

    this.productService.getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (products) => {
          this.products = products;
          this.applyFiltersAndSort();
          this.isLoading = false;
        },
        error: (error) => {
          this.error = 'Failed to load products. Please try again later.';
          this.isLoading = false;
          console.error('Error loading products:', error);
        }
      });
  }

  onFiltersChange(newFilters: FilterState): void {
    this.filters = { ...newFilters };
    this.applyFiltersAndSort();
  }

  onSortChange(sortOption: string): void {
    this.sortOption = sortOption as SortOption;
    this.applyFiltersAndSort();
  }

  onWishlistToggle(productId: number): void {
    if (this.wishlist.has(productId)) {
      this.wishlist.delete(productId);
    } else {
      this.wishlist.add(productId);
    }
  }

  onNewsletterSubscribe(email: string): void {
    console.log('Newsletter subscription:', email);
  }

  private applyFiltersAndSort(): void {
    this.filteredProducts = this.products.filter(product => {
      return true;
    });

    this.sortedProducts = [...this.filteredProducts].sort((a, b) => {
      switch (this.sortOption) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id;
        case 'popular':
          return (b.rating?.count || 0) - (a.rating?.count || 0);
        case 'recommended':
        default:
          return (b.rating?.rate || 0) - (a.rating?.rate || 0);
      }
    });
  }
}