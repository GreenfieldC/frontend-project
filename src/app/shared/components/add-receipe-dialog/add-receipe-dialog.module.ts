import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AddReceipeDialogComponent } from './add-receipe-dialog.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    AddReceipeDialogComponent,
  ],
  exports: [AddReceipeDialogComponent],
})
export class AddReceipeDialogModule {}
