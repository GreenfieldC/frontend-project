import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone component
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  constructor() {}
}
