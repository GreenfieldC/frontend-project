import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import routing module

// Import Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // For Angular Material animations

import { LayoutComponent } from './shared/components/layout/layout.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';

// Import Standalone Components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,       // Import your routing module
    MatSidenavModule,       // Import MatSidenavModule for sidenav
    MatToolbarModule,       // Import MatToolbarModule for toolbar
    MatListModule,          // Import MatListModule for lists (if using lists in sidenav)
    MatIconModule,          // Import MatIconModule for material icons
    MatButtonModule,    // Import MatIconButtonModule for material icon buttons
    BrowserAnimationsModule, // Import BrowserAnimationsModule for animations (required for material components)
  ],
  providers: [],
  bootstrap: [] // Standalone component will be bootstrapped using bootstrapApplication
})
export class AppModule { }
