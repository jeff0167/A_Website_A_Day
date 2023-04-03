import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StarwarsService } from './services/starwars.service';
import { BabyAPIService } from './services/baby-api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private starWarsService: StarwarsService, private babyService: BabyAPIService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.starWarsService.initialize();
      this.babyService.initialize();

    });
  }
}
