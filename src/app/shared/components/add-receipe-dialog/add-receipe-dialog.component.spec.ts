import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceipeDialogComponent } from './add-receipe-dialog.component';

describe('AddReceipeDialogComponent', () => {
  let component: AddReceipeDialogComponent;
  let fixture: ComponentFixture<AddReceipeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddReceipeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReceipeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
