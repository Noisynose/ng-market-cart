import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private selectedSection: string;

  setSelectedSection(selectedSection: string): void {
    this.selectedSection = selectedSection;
  }

  hasRecipesSelected(): Boolean {
    return this.selectedSection === 'recipes';
  }

  hasShoppingListSelected(): Boolean {
    return this.selectedSection === 'shopping-list';
  }
}
