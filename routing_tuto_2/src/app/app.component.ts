import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private readonly rndUrl: string = crypto.randomUUID().toString();

  get randomUrl(){
    return this.rndUrl
  }
}
