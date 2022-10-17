import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "crisis", component: CrisisListComponent, title: "Crisis Center"},
      {path: "heroes", component: HeroesListComponent, title: "Heroes"},
      {path: "", redirectTo: "/heroes", pathMatch: "full"},
      {path: "**", component: PageNotFoundComponent, title: "404"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
