import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { MainMenuLayoutComponent } from '../main-menu-layout/main-menu-layout.component';
import { FooterLayoutComponent } from '../footer-layout/footer-layout.component';
import { HomeComponent } from '../../pages/home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    // Core
    CommonModule,
    RouterOutlet,

    // Layouts
    HeaderLayoutComponent,
    MainMenuLayoutComponent,
    FooterLayoutComponent,

    // Pages
    HomeComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
