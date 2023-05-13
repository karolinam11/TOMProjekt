import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { TakeAPictureComponent } from './take-a-picture/take-a-picture.component';
import { AdvicesComponent } from './advices/advices.component';
import { VideoSectionComponent } from './video-section/video-section.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'picture', component: TakeAPictureComponent},
  {path: 'advices', component: AdvicesComponent},
  {path:'video-section', component: VideoSectionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    PanelComponent,
    TakeAPictureComponent,
    AdvicesComponent,
    VideoSectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
