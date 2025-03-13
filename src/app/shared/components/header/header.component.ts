import { Component, EventEmitter, Output } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidemenu = new EventEmitter<void>();
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
}
