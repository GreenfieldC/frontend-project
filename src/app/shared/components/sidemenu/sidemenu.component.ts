import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  imports: [
    MatSidenavContainer,
    MatToolbar,
    MatNavList,
    AsyncPipe,
    MatListItem,
    RouterLink,
    MatSidenav,
  ],
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  @Input() opened = false;
  isHandset$: Observable<boolean>;

  @ViewChild('drawer') drawer!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  toggle() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

  closeSidemenu() {
    if (this.isHandset$ && this.drawer) {
      this.drawer.close();
    }
  }
}
