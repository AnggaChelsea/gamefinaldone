import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketComponent } from '../../../components/board/bracket/bracket.component';
import { TeamallComponent } from '../../../components/board/teamall/teamall.component';
import { PlayerComponent } from '../../../components/board/player/player.component';

const routes: Routes = [
  {path:'', component:TeamallComponent,},
  {path:'', component:BracketComponent,},
  {path:'', component:PlayerComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
