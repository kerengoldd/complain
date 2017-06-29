import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadFeature = 'all';

  onFeature(feature: string){
    console.log(`AppComponent :: to ${feature} page`);
    this.loadFeature = feature;
  }

}
