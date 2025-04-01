import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Recipe } from '../../../models/recipe.models';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'recipe-search-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './recipe-search-card.component.html',
  styleUrl: './recipe-search-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeSearchCardComponent {
  @Input({ required: true }) recipe: Recipe = {} as Recipe;
  @Input() isFavorite: boolean = false;
  @Output() selectCard = new EventEmitter();
  @Output() addFavorite = new EventEmitter();
  isFavorit: any;
  constructor() {
    this.isFavorit = this.isFavorite;
  }
  onSelectCard() {
    this.selectCard.emit();
  }

  onAddingFavorite(event: any) {
    this.addFavorite.emit();
    event.stopPropagation();
  }
}
