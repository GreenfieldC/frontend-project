import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormComponent } from '../ui/form/form.component';

@Component({
  selector: 'add-receipe-dialog',
  templateUrl: './add-receipe-dialog.component.html',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElements {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(AddReceipeDialogComponent);
  }
}

@Component({
  selector: 'app-add-receipe-dialog',
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormComponent,
  ],
  standalone: true,
  templateUrl: './add-receipe-dialog.component.html',
  styleUrl: './add-receipe-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddReceipeDialogComponent {}
