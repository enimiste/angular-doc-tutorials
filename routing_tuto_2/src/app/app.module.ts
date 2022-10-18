import { RouterModule, UrlSegment } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfilesComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {matcher: (url) => {
        if(url.length==1 && url[0].path.match(/^@[\w]+$/gm)){
            return {
              consumed: url,
              posParams: {
                username: new UrlSegment(url[0].path.slice(1), {})
              }
            };
        } else return null;
      }, component: ProfileComponent, title: "Profile Detail"},
      {path: "login", component: LoginComponent, title: "Connection"},
      {path: "profiles", component: ProfilesComponent, title: "Profiles List"},
      {path: "", redirectTo:"profiles", pathMatch: "full"},
      {path: "**", component: NotFoundComponent, title: "404 Page not found"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
