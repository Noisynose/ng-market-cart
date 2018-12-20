import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() selectedSection = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.onRecipes();
  }

  emitSelectedSection(selectedSection: string) {
    this.selectedSection.emit(selectedSection);
  }

  onRecipes(): void {
    this.emitSelectedSection('recipes');
  }

  onShoppingList(): void {
    this.emitSelectedSection('shopping-list');
  }
}
