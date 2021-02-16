import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayComponent } from './display/display.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SafePipe } from './display/Safe.pipe';
import { PlayerComponent } from './player/player.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { SoundService } from 'src/app/sound.service';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayComponent,
    HomeComponent,
    SidebarComponent,
    SafePipe,
    PlayerComponent,
    TrackDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SoundService,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'display', component: DisplayComponent },
      { path: 'track-details/:id', component: TrackDetailsComponent },
      { path: '**', component: NotFoundComponent }
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
