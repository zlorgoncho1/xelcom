import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptLoaderService } from '../../../services/script-loader.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private scriptLoader: ScriptLoaderService) {}

  ngOnInit(): void {
    // this.scriptLoader.removeScript('assets/js/vendors.js');
    // this.scriptLoader.removeScript('assets/js/main.js');
    // this.scriptLoader.loadScript('assets/js/vendors.js');
    // this.scriptLoader.loadScript('assets/js/main.js');
  }

  ngOnDestroy(): void {}
}
