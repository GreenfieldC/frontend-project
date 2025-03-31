import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AddReceipeComponent } from './add-receipe.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule, MatDialogModule, AddReceipeComponent],
  exports: [AddReceipeComponent],
})
export class AddReceipeDialogModule {}
