import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [HeaderComponent, SidemenuComponent, RouterOutlet, FooterComponent],
  providers: [HttpClientModule],
  /* styleUrls: ['./layout.component.css'], */
})
export class LayoutComponent {
  @ViewChild(SidemenuComponent) sidemenu!: SidemenuComponent;
  constructor() {}

  toggleSidemenu() {
    if (this.sidemenu) {
      this.sidemenu.toggle();
    }
  }
}
