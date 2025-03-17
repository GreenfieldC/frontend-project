import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AddReceipeDialogComponent } from './components/add-receipe-dialog/add-receipe-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone component
  templateUrl: './app.component.html',
  imports: [RouterOutlet, LayoutComponent],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddReceipeDialogComponent);
  }
}
