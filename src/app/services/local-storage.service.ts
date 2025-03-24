import { Injectable } from '@angular/core';
import { DietType } from '../shared/models/recipe.models';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public saveSelectedDietTypes(selectedDietTypes: DietType[]): void {
    localStorage.setItem(
      'selectedDietTypes',
      JSON.stringify(selectedDietTypes)
    );
  }

  public loadSelectedDietTypes(): DietType[] {
    const savedDietTypes = localStorage.getItem('selectedDietTypes');
    return savedDietTypes ? JSON.parse(savedDietTypes) : [];
  }
}
