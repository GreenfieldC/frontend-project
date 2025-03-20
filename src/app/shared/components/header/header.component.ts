import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton
  ],
})
export class HeaderComponent {
  @Output() toggleSidemenu = new EventEmitter<void>();
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  toggle() {
    this.toggleSidemenu.emit(); // Emit event instead of accessing sidenav directly
  }
}
