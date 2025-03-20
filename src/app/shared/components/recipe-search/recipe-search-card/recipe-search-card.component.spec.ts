import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSearchCardComponent } from './recipe-search-card.component';

describe('RecipeSearchCardComponent', () => {
  let component: RecipeSearchCardComponent;
  let fixture: ComponentFixture<RecipeSearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeSearchCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
