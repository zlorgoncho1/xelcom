import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-menu-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-menu-layout.component.html',
  styleUrl: './main-menu-layout.component.scss',
})
export class MainMenuLayoutComponent {}
