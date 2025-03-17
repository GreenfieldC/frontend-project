import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { AddReceipeDialogComponent } from './components/add-receipe-dialog/add-receipe-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddReceipeDialogComponent);
  }
}
