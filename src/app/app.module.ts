import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayComponent } from './display/display.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './display/Safe.pipe';
import { PlayerComponent } from './player/player.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { SoundService } from 'src/app/sound.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayComponent,
    HomeComponent,
    SafePipe,
    PlayerComponent,
    TrackDetailsComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzPaginationModule,
    NzDrawerModule,
    NzAvatarModule,
    NzInputModule,
    NzCommentModule,
    NzButtonModule,
    NzBadgeModule,
    NzLayoutModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'display', component: DisplayComponent },
      { path: 'track-details/:id', component: TrackDetailsComponent },
      { path: '**', component: NotFoundComponent }
    ]),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
