import {Component, ViewChild} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {SidemenuComponent} from '../sidemenu/sidemenu.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [
    HeaderComponent,
    SidemenuComponent,
    RouterOutlet,
    FooterComponent
  ],
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  @ViewChild(SidemenuComponent) sidemenu!: SidemenuComponent;

  toggleSidemenu() {
    if (this.sidemenu) {
      this.sidemenu.toggle();
    }
  }
}
