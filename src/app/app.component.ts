import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StarwarsService } from './services/starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private starWarsService: StarwarsService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.starWarsService.initialize();
    });
  }
}
