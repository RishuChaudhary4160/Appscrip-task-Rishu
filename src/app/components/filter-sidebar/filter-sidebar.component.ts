import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterState } from '../../models/product.model';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <aside class="filter-sidebar">
      <div class="filter-header">
        <span class="item-count">{{ productCount }} ITEMS</span>
        <button class="hide-filter" (click)="toggleSidebar()">
          {{ isVisible ? 'HIDE FILTER' : 'SHOW FILTER' }}
        </button>
      </div>

      <div class="filter-content" [class.hidden]="!isVisible">
        <!-- Customizable Filter -->
        <div class="customizable-filter">
          <div class="filter-option">
            <input 
              type="checkbox" 
              id="customizable" 
              [(ngModel)]="filters.customizable"
              (change)="onFilterChange()"
            />
            <label for="customizable">CUSTOMIZABLE</label>
          </div>
        </div>

        <!-- Ideal For Section -->
        <div class="filter-section">
          <div class="filter-title" (click)="toggleSection('idealFor')">
            IDEAL FOR
            <span class="chevron" [class.expanded]="expandedSections.idealFor">⌄</span>
          </div>
          <div class="filter-options" [class.hidden]="!expandedSections.idealFor">
            <div class="filter-option">
              <input 
                type="checkbox" 
                id="idealForAll" 
                [checked]="!filters.idealFor.men && !filters.idealFor?.women && !filters.idealFor.babyKids"
                (change)="resetIdealFor()"
              />
              <label for="idealForAll">All</label>
            </div>
            <div class="filter-option">
              <input 
                type="checkbox" 
                id="idealForMen" 
                [(ngModel)]="filters.idealFor.men"
                (change)="onFilterChange()"
              />
              <label for="idealForMen">Men</label>
            </div>
            <div class="filter-option">
              <input 
                type="checkbox" 
                id="idealForWomen" 
                [(ngModel)]="filters.idealFor.women"
                (change)="onFilterChange()"
              />
              <label for="idealForWomen">Women</label>
            </div>
            <div class="filter-option">
              <input 
                type="checkbox" 
                id="idealForBabyKids" 
                [(ngModel)]="filters.idealFor.babyKids"
                (change)="onFilterChange()"
              />
              <label for="idealForBabyKids">Baby & Kids</label>
            </div>
          </div>
        </div>

        <!-- Other Filter Sections -->
        <div class="filter-section">
          <div class="filter-title" (click)="toggleSection('occasion')">
            OCCASION
            <span class="chevron" [class.expanded]="expandedSections.occasion">⌄</span>
          </div>
          <div class="filter-options" [class.hidden]="!expandedSections.occasion">
            <div class="filter-option">
              <span class="filter-text">All</span>
            </div>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-title" (click)="toggleSection('work')">
            WORK
            <span class="chevron" [class.expanded]="expandedSections.work">⌄</span>
          </div>
          <div class="filter-options" [class.hidden]="!expandedSections.work">
            <div class="filter-option">
              <span class="filter-text">All</span>
            </div>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-title" (click)="toggleSection('fabric')">
            FABRIC
            <span class="chevron" [class.expanded]="expandedSections.fabric">⌄</span>
          </div>
          <div class="filter-options" [class.hidden]="!expandedSections.fabric">
            <div class="filter-option">
              <span class="filter-text">All</span>
            </div>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-title" (click)="toggleSection('segment')">
            SEGMENT
            <span class="chevron" [class.expanded]="expandedSections.segment">⌄</span>
          </div>
          <div class="filter-options" [class.hidden]="!expandedSections.segment">
            <div class="filter-option">
              <span class="filter-text">All</span>
            </div>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-title" (click)="toggleSection('suitableFor')">
            SUITABLE FOR
            <span class="chevron" [class.expanded]="expandedSections.suitableFor">⌄</span>
          </div>
          <div class="filter-options" [class.hidden]="!expandedSections.suitableFor">
            <div class="filter-option">
              <span class="filter-text">All</span>
            </div>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-title" (click)="toggleSection('rawMaterials')">
            RAW MATERIALS
            <span class="chevron" [class.expanded]="expandedSections.rawMaterials">⌄</span>
          </div>
          <div class="filter-options" [class.hidden]="!expandedSections.rawMaterials">
            <div class="filter-option">
              <span class="filter-text">All</span>
            </div>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-title" (click)="toggleSection('pattern')">
            PATTERN
            <span class="chevron" [class.expanded]="expandedSections.pattern">⌄</span>
          </div>
          <div class="filter-options" [class.hidden]="!expandedSections.pattern">
            <div class="filter-option">
              <span class="filter-text">All</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  `,
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent {
  @Input() filters!: FilterState;
  @Input() productCount: number = 0;
  @Output() filtersChange = new EventEmitter<FilterState>();

  isVisible = true;
  expandedSections = {
    idealFor: true, 
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false
  };

  toggleSidebar() {
    this.isVisible = !this.isVisible;
  }

  toggleSection(section: keyof typeof this.expandedSections) {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  resetIdealFor() {
    this.filters.idealFor.men = false;
    this.filters.idealFor.women = false;
    this.filters.idealFor.babyKids = false;
    this.onFilterChange();
  }

  onFilterChange() {
    this.filtersChange.emit(this.filters);
  }
}