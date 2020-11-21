import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PubgComponent } from '../../../components/games/tranding/pubg/pubg.component';
import { PopulerComponent } from '../../../components/games/populer/populer.component';
import { ListgameComponent } from '../../../components/games/listgame/listgame.component';


const routes: Routes = [
  {path:'pubg', component:PubgComponent,},
  {path:'', component:ListgameComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
