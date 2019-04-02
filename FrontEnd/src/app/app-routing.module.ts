import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersInfoComponent } from './players-info/players-info.component';
import { GameComponent } from './game/game.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: 'index', component: PlayersInfoComponent },
  { path: 'game', component: GameComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '**', component: PlayersInfoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
