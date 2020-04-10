import { Component } from '@angular/core';

// Used to import SVG icons, pref over using <img> in template due to additional styling benefits
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'satellite',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/Satellite_Icon.svg')
    );
  }
}
