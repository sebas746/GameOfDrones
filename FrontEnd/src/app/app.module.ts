import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersInfoComponent } from './players-info/players-info.component';
import { GameComponent } from './game/game.component';
import { GamingService } from './gaming.service';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersInfoComponent,
    GameComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GamingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
