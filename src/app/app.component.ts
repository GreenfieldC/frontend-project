import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Mark as standalone component
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    LayoutComponent,
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
