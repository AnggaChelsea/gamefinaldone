import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { Role  } from './models/index';
import { CommentComponent } from './components/comment/comment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { HomeComponent } from './components/home/home.component';
import { TeamallComponent } from './components/board/teamall/teamall.component';
import { PopulerComponent } from './components/games/populer/populer.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sidebar', component:SidebarComponent},
  {path:'team', component:TeamallComponent },
  {path:'populer', component:PopulerComponent},
  {path:'comment',loadChildren: () =>import('./routes/comment/comment.module').then(m => m.CommentModule)},
  {path: 'sign',loadChildren: () =>import('./routes/auth/auth.module').then(m => m.AuthModule)},
  // {path: 'pubg',loadChildren: () =>import('./routes/board/games/games.module').then(m => m.GamesModule)},
  // {path: 'listgame',loadChildren: () =>import('./routes/board/games/games.module').then(m => m.GamesModule)},
  // {path: 'admin',component: AdminComponent,canActivate: [AuthGuard],data: { roles: [Role.Admin] }},
  // // {path:'notifemail', loadChildren: ()=>import('./routes/notifregister/notifregister.module').then(m=>m.NotifregisterModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
