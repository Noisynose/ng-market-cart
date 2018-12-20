import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Eggs n Yogurt',
      'mmmm',
      'https://cdn.cognitiveseo.com/blog/wp-content/uploads/2017/04/The_Complete_Google_Easter_Eggs_List_That_Will_Make_You_Go_Wow_v2.jpg',
    ),
    new Recipe(
      'Poulet thai',
      'tasty',
      'https://chefcuisto.com/files/2014/08/pad-thai-poulet.jpg',
    ),
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  onRecipeSelect(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
