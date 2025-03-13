import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import {MatListItem, MatNavList} from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  imports: [
    MatSidenavContainer,
    MatToolbar,
    MatNavList,
    AsyncPipe,
    MatIconButton,
    MatIcon,
    MatListItem,
    RouterLink,
    MatSidenav,
    MatSidenavContent
  ],
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  @Input() opened = false;  // Input to control whether the sidenav is open or not
  isHandset$: Observable<boolean>;  // Observable to track screen size (mobile or not)
  @ViewChild('drawer') drawer!: MatSidenav;  // Reference to the sidenav

  constructor(private breakpointObserver: BreakpointObserver) {
    // Check if the device is a handset (mobile or tablet)
    this.isHandset$ = this.breakpointObserver.observe([Breakpoints.Handset])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  // Toggle the sidenav open/close
  async toggle() {
    if (this.drawer) {
      await this.drawer.toggle();
    }
  }

  // Close the sidenav on handset
  async closeSidemenu() {
    if (this.isHandset$ && this.drawer) {
      await this.drawer.close();
    }
    this.opened = false;
  }
}
